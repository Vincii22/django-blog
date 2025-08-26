"use client";
import { useEffect, useState } from "react";
import axios from "axios";
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
    axios.get("http://127.0.0.1:8000/api/posts/")
      .then(res => setPosts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1 className="text-4xl font-bold mb-6">My Blog</h1>
      <div className="space-y-6">
        {posts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
