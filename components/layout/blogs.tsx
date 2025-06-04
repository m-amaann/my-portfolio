import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import SectionHeading from '../section-heading';
// import { useSectionInView } from "@/hooks/useSection";

interface BlogFields {
    title: string;
    date: string;
    excerpt: string;
    link: string;
    featured_media_url?: string;
    category: string;
    author: string;
    author_image?: string;
}

interface WPPost {
    title: { rendered: string };
    date: string;
    excerpt: { rendered: string };
    link: string;
    _embedded?: {
        ["wp:featuredmedia"]?: [{ source_url: string }];
        ["wp:term"]?: [{ name: string }[]];
        author?: [
            {
                name: string;
                avatar_urls?: { [key: string]: string }; // For author image
            }
        ];
    };
}

function decodeHtmlEntities(text: string): string {
    const textArea = document.createElement('textarea');
    textArea.innerHTML = text;
    return textArea.value;
}

export default function Blogs() {
    // const { ref } = useSectionInView("Blogs");

    const [blogs, setBlogs] = useState<BlogFields[]>([]);
    const [visibleBlogs, setVisibleBlogs] = useState<BlogFields[]>([]);
    const [categories, setCategories] = useState<string[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>('All');

    const placeholderImage = '/images/Placeholder.jpg'; // Add your placeholder image path here
    const authorPlaceholderImage = '/images/Placeholder.jpg'; // Add a placeholder for author image

    useEffect(() => {
        const API_URL = 'https://codeelevate.blog/wp-json/wp/v2/posts?_embed';

        fetch(API_URL)
            .then((res) => res.json())
            .then((data: WPPost[]) => {
                const sortedPosts = data.sort((a, b) =>
                    new Date(b.date).getTime() - new Date(a.date).getTime()
                );

                const posts: BlogFields[] = sortedPosts.map((post) => ({
                    title: decodeHtmlEntities(post.title.rendered),
                    date: post.date,
                    excerpt: post.excerpt.rendered.replace(/<\/?p>/g, ''),
                    link: post.link,
                    featured_media_url: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url,
                    category: post._embedded?.['wp:term']?.[0]
                        ?.map((term) => decodeHtmlEntities(term.name))
                        .join(', ') || 'Uncategorized',
                    author: post._embedded?.author?.[0]?.name || 'Unknown Author',
                    author_image:
                        post._embedded?.author?.[0]?.avatar_urls?.['96'] || authorPlaceholderImage,
                }));

                const uniqueCategories = Array.from(
                    new Set(
                        posts.flatMap((post) =>
                            post.category.split(', ')
                        )
                    )
                );
                uniqueCategories.unshift('All');

                setBlogs(posts);
                setVisibleBlogs(posts);
                setCategories(uniqueCategories);
            })
            .catch((err) => console.error('Error:', err));
    }, []);

    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category);

        if (category === 'All') {
            setVisibleBlogs(blogs);
        } else {
            setVisibleBlogs(
                blogs.filter((blog) =>
                    blog.category.split(', ').includes(category)
                )
            );
        }
    };

    return (
        <section
            // ref={ref}
            className="mb-28 scroll-mt-28 text-center sm:mb-40"
        >
            <SectionHeading>Recent Blogs</SectionHeading>

            {/* Category Menu */}
            <div className="flex gap-2 mb-6 justify-start overflow-x-auto w-full">
                {categories.map((category, index) => (
                    <button
                        key={index}
                        className={`px-4 py-2 rounded-full border text-sm ${selectedCategory === category
                            ? 'bg-blue-500 text-white'
                            : 'bg-white text-gray-700 border-gray-300'
                            } hover:bg-blue-400 hover:text-white transition-all whitespace-nowrap`}
                        onClick={() => handleCategoryClick(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Blog Posts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {visibleBlogs.length > 0 ? (
                    visibleBlogs.map((blog, i) => (
                        <div
                            key={i}
                            className="bg-white shadow-md rounded-lg overflow-hidden"
                        >
                            <div className="relative w-full h-48 sm:h-40 md:h-48">
                                <Image
                                    src={blog.featured_media_url || placeholderImage}
                                    alt={blog.title}
                                    fill
                                    className="object-cover"
                                    priority={i < 3}
                                />
                            </div>
                            <div className="p-4">
                                <span className="text-xs md:text-sm text-gray-600 mb-2 block">
                                    {blog.category}
                                </span>
                                <h3 className="text-base md:text-lg font-semibold mb-2 text-black dark:text-black">
                                    {blog.title}
                                </h3>
                                <div className="text-xs md:text-sm text-gray-500 mb-2 flex items-center gap-2">
                                    <div className="w-8 h-8 relative rounded-full overflow-hidden">
                                        <Image
                                            src={blog.author_image || authorPlaceholderImage}
                                            alt={blog.author}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <span>
                                        By {blog.author} |{' '}
                                        {new Date(blog.date).toLocaleDateString()}
                                    </span>
                                </div>
                                <p
                                    className="text-xs md:text-sm text-gray-300 mb-4 line-clamp-2"
                                    dangerouslySetInnerHTML={{ __html: blog.excerpt }}
                                />
                                <a
                                    href={blog.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:underline text-xs md:text-sm"
                                >
                                    Read more...
                                </a>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No posts found for this category.</p>
                )}
            </div>
        </section>
    );
}
