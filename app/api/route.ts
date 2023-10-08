import prisma from "@/lib/prisma";

export async function GET(req: Request) {
    const post = await prisma.post.findMany()

    return Response.json({post})
}