"use server";

import { redirect } from "next/navigation";

export const create = async (data: FormData) => {
  //   console.log({ ...data, authorId: 1 });
  const blogInfo = Object.fromEntries(data.entries());
  const modifiedData = {
    ...blogInfo,
    authorId: 1,
    tags: blogInfo.tags
      .toString()
      .split(",")
      .map((tag) => tag.trim()),
    isFeatured: Boolean(blogInfo.isFeatured),
  };
  console.log(modifiedData);

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(modifiedData),
  });

  const result = await res.json();
  if (result?.id) {
    redirect("/blogs");
  }

  console.log(result);
  return result;
};
