"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import PostCard from "../components/PostCard";

type Post = {
  id: number;
  title: string;
  content: string;
  created_at: string;
};

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/posts/")
      .then((res) => setPosts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-bold tracking-tight text-gray-800">
          ✍️ My Blog
        </h1>
        <Link
          href="/posts/new"
          className="px-5 py-2.5 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl shadow-md hover:opacity-90 transition"
        >
          New Post
        </Link>
      </div>

      {posts.length === 0 ? (
        <p className="text-gray-500 text-center mt-20">No posts yet. Be the first to write!</p>
      ) : (
        <div className="space-y-8">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
