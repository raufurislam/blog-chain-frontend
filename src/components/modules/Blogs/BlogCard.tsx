/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import Image from "next/image";

export default function BlogCard({ post }: { post: any }) {
  return (
    <Link
      href={`/blogs/${post.id}`}
      className="block group transform hover:-translate-y-1 transition-transform duration-300"
    >
      <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
        {post.thumbnail ? (
          <div className="relative h-56 w-full overflow-hidden">
            <Image
              src={post.thumbnail}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        ) : (
          <div className="h-56 w-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-300">
            No Image
          </div>
        )}

        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
            {post.title}
          </h3>

          <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
            {post.content}
          </p>

          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Image
                src={
                  post.author.picture ||
                  "https://cdn-icons-png.flaticon.com/512/9385/9385289.png"
                }
                alt={post.author.name}
                width={36}
                height={36}
                className="rounded-full border-2 border-gray-200 dark:border-gray-700"
              />
              <span className="text-gray-600 dark:text-gray-300 text-sm flex items-center gap-1">
                {post.author.name}
                {post.author.isVerified && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </span>
            </div>
            <span className="text-gray-500 dark:text-gray-400 text-sm">
              {post.views} views
            </span>
          </div>

          <div className="text-right">
            <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm hover:underline">
              Read More →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
