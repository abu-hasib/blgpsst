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
      <div>
        <hr className="my-8" />
        {/* {posts?.length ? (
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
        )} */}
      </div>
    </main>
  );
}
