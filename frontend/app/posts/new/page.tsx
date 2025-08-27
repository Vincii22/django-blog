"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";


export default function NewPost() {
    const router = useRouter();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await axios.post("http://127.0.0.1:8000/api/posts", { title, content});
        router.push("/")
    };


  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Create New Post</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="border p-2 w-full"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="border p-2 w-full"
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button className="px-4 py-2 bg-blue-600 text-white rounded" type="submit">
          Save
        </button>
      </form>
    </div>
  );
};
