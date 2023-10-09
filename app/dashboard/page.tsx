import UserPost from "@/components/post";
import prisma from "@/lib/prisma";

async function getCurrentUserPosts() {
  // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/dashboard`, {
  //   method: "GET",
  //   cache: "no-cache"
  // })

  const posts = await prisma.post.findMany({
    where: {
      authorId: 1,
    },
    orderBy: {
      updatedAt: "desc",
    },
  });
  return posts
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
