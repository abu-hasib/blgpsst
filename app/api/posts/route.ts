import prisma from "@/lib/prisma";


export async function GET(req: Request) {
  try {
    const post = await prisma.post.findMany()
    return new Response(JSON.stringify(post));
  } catch (error) {
    console.error({ error });
  }
  return new Response(null, { status: 200 });
}
export async function POST(req: Request) {
  const { title } = await req.json();
  try {
    const post = await prisma.post.create({
      data: {
        title,
        content: "",
        url: "https://picsum.photos/1200",
        author: {
          connect: {
            email: "ridwan@prisma.io",
          },
        },
      },
    });
    return new Response(JSON.stringify(post));
  } catch (error) {
    console.error({ error });
  }

  return new Response(null, { status: 200 });
}

export async function PATCH(req: Request) {
  console.log("patching..");
  const { postId, title, content } = await req.json();
  console.log({ postId, title, content });
  try {
    const updatedPost = await prisma.post.update({
      where: {
        id: postId,
      },
      data: {
        title,
        content,
      },
    });
    console.log({ updatedPost });
    return new Response(JSON.stringify(updatedPost));
  } catch (error) {
    console.error({ error });
  }

  return new Response(null, { status: 200 });
}
export async function DELETE(req: Request) {
  console.log("deleting..");
  const { postId } = await req.json();
  console.log({ postId });
  try {
    const deletedPost = await prisma.post.delete({
      where: {
        id: postId,
      }
    });
    console.log({ deletedPost });
  } catch (error) {
    console.error({ error });
  }

  return new Response(null, { status: 200 });
}
