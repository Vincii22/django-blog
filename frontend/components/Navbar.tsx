import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-indigo-600">
          My Blog
        </Link>
        <div className="space-x-6">
          <Link href="/" className="text-gray-600 hover:text-indigo-600">
            Home
          </Link>
          <Link href="/posts/new" className="text-gray-600 hover:text-indigo-600">
            New Post
          </Link>
        </div>
      </div>
    </nav>
  );
}
