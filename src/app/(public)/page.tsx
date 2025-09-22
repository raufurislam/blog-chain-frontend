import BlogCard from "@/components/modules/Blogs/BlogCard";
import Hero from "@/components/modules/Home/Hero";
import { IPost } from "@/types";

export default async function HomePage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`, {
    // cache: "no-store", // because its home page. i don't want to update it on time and don't want to show loading state so I revalidate it
    next: {
      revalidate: 30,
    },
  });
  const { data: blogs } = await res.json();
  console.log(blogs);

  return (
    <div>
      <Hero />
      <div className="my-10">
        <h2 className="text-center my-5 text-4xl">Featured Posts</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-3 gap-4 my-5">
          {blogs.slice(0, 6).map((blog: IPost) => (
            <BlogCard key={blog.id} post={blog} />
          ))}
        </div>
      </div>
    </div>
  );
}
