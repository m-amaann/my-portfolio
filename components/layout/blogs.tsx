// import React, { useEffect, useState } from 'react';
// import SectionHeading from '../section-heading';
// import Image from 'next/image';

// interface BlogFields {
//     title: string;
//     date: string;
//     excerpt: string;
//     url: string;
//     image?: {
//         fields: {
//             file: {
//                 url: string;
//             };
//             title?: string;
//         };
//     }[];
// }

// interface ContentfulResponse {
//     items: Array<{
//         sys: {
//             id: string;
//         };
//         fields: BlogFields;
//     }>;
// }

// export default function Blogs() {
//     const [blogs, setBlogs] = useState<BlogFields[]>([]);

//     useEffect(() => {
//         const API_URL = `https://cdn.contentful.com/spaces/yt2sw3usxlu4/environments/master/entries`;

//         fetch(API_URL, {
//             headers: {
//                 'Authorization': `Bearer QznN0OuJnnFi2LL4g07sGdSibA2obSXO-663KkfG1Gw`,
//                 'Content-Type': 'application/json'
//             }
//         })
//         .then(response => response.json())
//         .then((data: ContentfulResponse) => {
//             const blogPosts = data.items.map(item => item.fields);
//             setBlogs(blogPosts);
//         })
//         .catch(error => {
//             console.error('Error fetching data:', error);
//         });
//     }, []);

//     console.log('Blogs:', blogs);

//     return (
//         <section
//             className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-28"
//             id="blogs"
//         >
//             <SectionHeading>Recent Blogs</SectionHeading>
//             <div className="flex justify-center gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
//                 {blogs.map((blog, index) => (
//                     <div key={index} className="group w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl">
//                         <div className="flex items-center">
//                             {blog.image && blog.image.length > 0 && (
//                                 <Image
//                                     src={blog.image[1]?.fields?.file?.url || 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fdevelopers.elementor.com%2Fdocs%2Fhooks%2Fplaceholder-image%2F&psig=AOvVaw2IUqleaVLcIYtD5wcv1Ke_&ust=1723998778335000&source=images&cd=vfe&opi=89978449&ved=0CBUQ3YkBahcKEwiQ0OiHuvyHAxUAAAAAHQAAAAAQBA'} // Use a default image if the URL is not available
//                                     alt={blog.image[0]?.fields?.title || blog.title}
//                                     layout="responsive"
//                                     width={500}  // Adjust based on your design
//                                     height={300} // Adjust based on your design
//                                     className="rounded-t-2xl"
//                                 />
//                             )}
//                         </div>
//                         <div className="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl group-hover:bg-gray-50">
//                             <span className="text-indigo-600 font-medium mb-3 block">{new Date(blog.date).toLocaleDateString()}</span>
//                             <h4 className="text-xl text-white font-medium leading-8 mb-5">{blog.title}</h4>
//                             <p className="text-gray-500 leading-6 mb-10">{blog.excerpt}</p>
//                             <a href={blog.url} className="cursor-pointer text-lg text-indigo-600 font-semibold">Read more..</a>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// }
