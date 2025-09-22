import BlogCard from "@/components/modules/Blogs/BlogCard";
import Hero from "@/components/modules/Home/Hero";
import { IPost } from "@/types";

export default async function HomePage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`);
  const { data: blogs } = await res.json();

  console.log(blogs);

  return (
    <div>
      <Hero />
      <h2 className="text-center my-5 text-4xl">Featured Posts</h2>
      <div className="grid grid-cols-3 gap-4">
        {blogs.map((blog: IPost) => (
          <BlogCard key={blog.id} post={blog} />
        ))}
      </div>
    </div>
  );
}
