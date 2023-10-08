import CreatePost from "@/components/create-post";
import { Icons } from "@/components/icons";
import Operations from "@/components/operations";
import prisma from "@/lib/prisma";
import { Post } from "@/types";
import { Button } from "@radix-ui/themes";
import Link from "next/link";

async function getCurrentUserPosts() {
  const posts = prisma.post.findMany({
    where: {
      authorId: 1,
    },
    orderBy: {
      updatedAt: "desc",
    },
  });

  console.log({ posts });
  return posts;
}

export default async function DashboardPage() {
  const posts = await getCurrentUserPosts();

  return (
    <section>
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">Posts</h1>
        <CreatePost />
      </div>
      <div className="border rounded container mx-auto space-y-1 divide-y-2 divide-solid">
        {posts.length ? (
          posts.map((post: Post) => (
            <section key={post.id} className="p-4 flex justify-between">
              <div>
                <Link href={`/editor/${post.id}`}>
                  <h1 className="">{post.title}</h1>
                </Link>
                <time>{`${new Date(post.updatedAt)}`}</time>
              </div>
              <Operations post={post} />
            </section>
          ))
        ) : (
          <p>Create post</p>
        )}
      </div>
    </section>
  );
}
