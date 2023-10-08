import prisma from "@/lib/prisma";

export async function POST(req: Request) {
//   console.log({ req: await req.json() });
  const { title } = await req.json();
  try {
    const post = await prisma.post.create({
      data: {
        title,
        content: "",
        author: {
          connect: {
            email: "bob@prisma.io",
          },
        },
      },
    });
    return new Response(JSON.stringify(post))
  } catch (error) {
    console.error({ error });
  }

  return new Response(null, { status: 200 });
}
