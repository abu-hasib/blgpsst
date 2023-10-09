import Blog from "@/components/Blog";
import Hydrate from "@/components/hydrate-client";
import prisma from "@/lib/prisma";

async function getPosts() {
  const posts = await prisma.post.findMany({
    orderBy: {
      updatedAt: "desc",
    },
  });

  return posts;
}

export default async function BlogPage() {
  const posts = await getPosts();
  return (
    <Hydrate>
      <main className="">
        <div className="max-w-3xl mx-auto py-8">
          <Blog posts={posts} />
        </div>
      </main>
    </Hydrate>
  );
}
