"use server";
import { FieldValues } from "react-hook-form";

export async function register(data: FieldValues) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!res?.ok) {
    console.error("User Registration failed", await res.text());
  }

  return await res.json();
}
