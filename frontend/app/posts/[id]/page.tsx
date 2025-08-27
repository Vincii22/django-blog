"use client";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useRouter } from 'next/navigation';

type Post = {
    id: number;
    title: string;
    content: string;
    created_at: string;
};

export default function PostDetail() {
    const { id } = useParams();
    const router = useRouter();
    const [post, setPost] = useState<Post | null>(null);

    useEffect(() =>  {
        axios.get(`http://127.0.0.1:8000/api/posts/${id}/`)
            .then( res => setPost(res.data))
            .catch(err => console.error(err));
    }, [id]);

    const handleDelete = async () => {
        await axios.delete(`http://127.0.0.1:8000/api/posts/${id}/`);
        router.push("/");
    };

    if (!post) return <p>Loading...</p>;

    return (
    <div>
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="mt-4">{post.content}</p>
      <p className="text-sm text-gray-500 mt-2">
        {new Date(post.created_at).toLocaleString()}
      </p>
      <div className="mt-4 space-x-2">
        <button
          onClick={() => router.push(`/posts/${id}/edit`)}
          className="px-4 py-2 bg-yellow-500 text-white rounded"
        >
          Edit
        </button>
        <button
          onClick={handleDelete}
          className="px-4 py-2 bg-red-600 text-white rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
}