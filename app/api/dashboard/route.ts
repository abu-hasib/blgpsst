import prisma from "@/lib/prisma";

export async function GET(req: Request) {
  console.log("dashing....");
  const user = await prisma.user.findFirst();

  console.log({ user });

  const posts = await prisma.post.findMany({
    where: {
      authorId: 1,
    },
    orderBy: {
      updatedAt: "desc",
    },
  });

  return Response.json({ posts });
}
