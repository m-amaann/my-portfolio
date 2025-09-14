"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { MediumPost } from "@/lib/getMediumPosts";

export default function Blogs() {
  const [posts, setPosts] = useState<MediumPost[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch("/api/medium");
        const data = await res.json();
        setPosts(data);
      } catch (err) {
        console.error("Error fetching posts:", err);
      }
    }
    fetchPosts();
  }, []);

  return (
    <section className="mb-28 scroll-mt-28 sm:mb-40">
      <h2 className="text-2xl font-bold mb-6 text-center">Recent Blogs</h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.length === 0 ? (
          <p className="text-gray-500 text-center col-span-full">Loading blogs...</p>
        ) : (
          posts.map((post, idx) => (
            <div
              key={idx}
              className="border rounded-xl shadow-sm hover:shadow-md transition overflow-hidden"
            >
              {/* Thumbnail */}
              <div className="relative w-full h-48">
                <Image
                  src={post.thumbnail}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority={idx === 0}
                />
              </div>

              {/* Blog content */}
              <div className="p-4">
                {/* Author Name */}
                <p className="text-sm text-gray-500 mb-1">{post.authorName}</p>

                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold text-blue-600 hover:underline"
                >
                  {post.title}
                </a>

                <p className="text-sm text-gray-400 mt-1">
                  {new Date(post.pubDate).toLocaleDateString()}
                </p>

                <p className="mt-2 text-gray-700 text-sm line-clamp-3">
                  {post.snippet}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}