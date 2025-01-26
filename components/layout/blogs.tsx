import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import SectionHeading from '../section-heading';

interface BlogFields {
    title: string;
    date: string;
    excerpt: string;
    link: string;
    featured_media_url?: string;
    category: string;
    author: string;
}

function decodeHtmlEntities(text: string): string {
    const textArea = document.createElement('textarea');
    textArea.innerHTML = text;
    return textArea.value;
}

export default function Blogs() {
    const [blogs, setBlogs] = useState<BlogFields[]>([]);
    const [visible, setVisible] = useState<BlogFields[]>([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        const API_URL = 'https://codeelevate.blog/wp-json/wp/v2/posts?_embed';

        fetch(API_URL)
            .then(res => res.json())
            .then(data => {
                // Sort posts by date (most recent first)
                const sortedPosts = data.sort((a: any, b: any) =>
                    new Date(b.date).getTime() - new Date(a.date).getTime()
                );

                const posts = sortedPosts.map((post: any) => ({
                    title: post.title.rendered,
                    date: post.date,
                    excerpt: post.excerpt.rendered.replace(/<\/?p>/g, ''),
                    link: post.link,
                    featured_media_url: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url,
                    // Decode HTML entities and exclude "Frontend"
                    category: post._embedded?.['wp:term']?.[0]
                        ?.filter((term: any) => term.name.toLowerCase() !== 'frontend')
                        .map((term: any) => decodeHtmlEntities(term.name))
                        .join(', ') || 'Uncategorized',
                    author: post._embedded?.author?.[0]?.name || 'Unknown Author'
                }));

                setBlogs(posts);
                setVisible(posts.slice(0, 3));
            })
            .catch(err => console.error('Error:', err));
    }, []);

    const seeAll = () => {
        setShowAll(true);
        setVisible(blogs);
    };

    return (
        <div className="container mx-auto px-2">
            <SectionHeading>Recent Blogs</SectionHeading>
            <div className="grid md:grid-cols-3 gap-6">
                {visible.map((blog, i) => (
                    <div key={i} className="bg-white shadow-md rounded-lg overflow-hidden">
                        {blog.featured_media_url && (
                            <div className="relative w-full h-48">
                                <Image
                                    src={blog.featured_media_url}
                                    alt={blog.title}
                                    fill
                                    className="object-cover"
                                    priority={i < 3}
                                />
                            </div>
                        )}
                        <div className="p-4">
                            <span className="text-sm text-gray-600 mb-2 block">
                                {blog.category}
                            </span>
                            <h3 className="text-lg font-semibold mb-2">
                                {blog.title}
                            </h3>
                            <div className="text-sm text-gray-500 mb-2">
                                By {blog.author} | {new Date(blog.date).toLocaleDateString()}
                            </div>
                            <p
                                className="text-gray-600 mb-4 line-clamp-2"
                                dangerouslySetInnerHTML={{ __html: blog.excerpt }}
                            />
                            <a
                                href={blog.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                Read more...
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            {!showAll && blogs.length > 3 && (
                <div className="text-center mt-6">
                    <button
                        onClick={seeAll}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        See All Posts
                    </button>
                </div>
            )}
        </div>
    );
}
