import CreatePost from "@/components/create-post";
import { Icons } from "@/components/icons";
import Operations from "@/components/operations";
import UserPost from "@/components/post";
import prisma from "@/lib/prisma";
import { useAppSelector } from "@/redux/hooks";
import { store } from "@/redux/store";
import { Button } from "@radix-ui/themes";
import Link from "next/link";

async function getCurrentUserPosts() {
  const posts = await prisma.post.findMany({
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
  // const state = store.getState()
  // console.log({state})
  return (
    <section className="space-y-6 w-[90%]">
      <UserPost posts={posts}/>
    </section>
  );
}
