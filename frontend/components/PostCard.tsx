type Post = {
  id: number;
  title: string;
  content: string;
  created_at: string;
};

export default function PostCard({ post }: { post: Post }) {
  return (
    <div className="p-4 border rounded-lg shadow bg-white">
      <h2 className="text-2xl font-semibold">{post.title}</h2>
      <p className="mt-2 text-gray-700">{post.content}</p>
      <p className="mt-2 text-sm text-gray-500">
        {new Date(post.created_at).toLocaleString()}
      </p>
    </div>
  );
}
