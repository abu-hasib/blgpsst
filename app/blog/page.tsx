import Blog from "@/components/Blog";
import BlogItem from "@/components/BlogItem";
import { Icons } from "@/components/icons";
import PostItem from "@/components/post-item";
import Image from "next/image";
import Link from "next/link";

async function getPosts() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/post?limit=10`, {
    headers: {
      "app-id": "652274d22d9ce33ceba499b1",
    },
    cache: "no-cache",
  });
  const payload = await response.json();
  return payload.data;
}

export default async function BlogPage() {
  const posts = await getPosts();
  console.log({ posts });
  return (
    <main className="">
      <div className="max-w-3xl mx-auto py-8">
        
        <Blog posts={posts} />
      </div>
    </main>
  );
}
