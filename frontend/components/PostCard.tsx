import Link from "next/link";

type Post = {
  id: number;
  title: string;
  content: string;
  created_at: string;
};

export default function PostCard({ post }: { post: Post }) {
  return (
    <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition duration-300 border border-gray-100">
      <Link href={`/posts/${post.id}`}>
        <h2 className="text-2xl font-semibold text-gray-800 hover:text-indigo-600 transition">
          {post.title}
        </h2>
      </Link>
      <p className="text-gray-600 mt-3 leading-relaxed">
        {post.content.substring(0, 120)}...
      </p>
      <p className="text-sm text-gray-400 mt-4">
        {new Date(post.created_at).toLocaleDateString()}
      </p>
    </div>
  );
}
