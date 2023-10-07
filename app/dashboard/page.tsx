import Operations from "@/components/operations";
import { Post } from "@/types";
import Link from "next/link";

async function getPosts() {
  const response = await fetch("https://dummyjson.com/posts", {
    headers: {
      "app-id": "0JyYiOQXQQr5H9OEn21312",
    },
  });
  const payload = await response.json();
  return payload.posts;
}

export default async function DashboardPage() {
  const posts = await getPosts();
  return (
    <section>
      <h1 className="text-3xl font-bold">Posts</h1>
      <div className="border rounded container mx-auto space-y-1 divide-y-2 divide-solid">
        {posts.length ? (
          posts.map((post: Post) => (
            <section key={post.id} className="p-4 flex justify-between">
              <div>
                <Link href={`/editor/${post.id}`}>
                <h1 className="">{post.title}</h1>
                </Link>
                <time>{post.id}</time>
              </div>
              <Operations post={post}/>
            </section>
          ))
        ) : (
          <p>Create post</p>
        )}
      </div>
    </section>
  );
}
