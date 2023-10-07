import PostItem from "@/components/post-item";
import Image from "next/image";
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

export default async function Home() {
  const posts = await getPosts();
  console.log({ posts });
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <hr className="my-8" />
        {posts?.length ? (
          <div>
            {posts.map((post: any) => (
              <article key={post.id}>
                <Link href={`${post.id}`}>
                <PostItem post={post} />
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <p>NO posts</p>
        )}
      </div>
    </main>
  );
}
