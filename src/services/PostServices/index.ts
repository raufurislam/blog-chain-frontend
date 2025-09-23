export async function getBlogById(blogId: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post/${blogId}`);
  return await res.json();
}

export async function getAllBlogs(options: RequestInit & { next?: any }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`, {
    cache: "force-cache", // default
    ...options,
  });
  return res.json();
}
