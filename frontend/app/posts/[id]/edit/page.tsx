"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";

export default function EditPost() {
    const { id } = useParams();
    const router  = useRouter();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/posts/${id}/`)
        .then(res => {
            setTitle(res.data.title);
            setContent(res.data.content);
        });
    }, [id]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await axios.put(`http://127.0.0.1:8000/api/posts/${id}/`, { title, content });
        router.push(`/posts/${id}`);
    };

     return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Edit Post</h1>
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
          Update
        </button>
      </form>
    </div>
  );
}