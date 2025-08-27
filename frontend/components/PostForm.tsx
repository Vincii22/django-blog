"use client";
import { useState } from "react";

export default function PostForm({ onSubmit, initialData }: any) {
  const [title, setTitle] = useState(initialData?.title || "");
  const [content, setContent] = useState(initialData?.content || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ title, content });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 bg-white rounded-2xl shadow-md space-y-6"
    >
      <div>
        <label className="block mb-2 text-gray-700 font-medium">Title</label>
        <input
          type="text"
          className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-400 focus:outline-none"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div>
        <label className="block mb-2 text-gray-700 font-medium">Content</label>
        <textarea
          className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-400 focus:outline-none h-40 resize-none"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl shadow-md hover:opacity-90 transition"
      >
        Save Post
      </button>
    </form>
  );
}
