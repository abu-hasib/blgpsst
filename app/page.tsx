import PostItem from "@/components/post-item";
import Image from "next/image";
import Link from "next/link";

async function getPosts() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/post?limit=10`, {
    headers: {
      "app-id": "652274d22d9ce33ceba499b1",
    },
    cache: "no-cache"
  });
  const payload = await response.json();
  return payload.data;
}

export default async function Home() {
  // const posts = await getPosts();
  // console.log({ posts });
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="grid place-items-center">
        <p className="text-5xl font-black">Blgpsst! by Ridwan</p>
      </div>
    </main>
  );
}
