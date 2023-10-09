import prisma from "@/lib/prisma";

export async function GET(req: Request) {
  console.log("dashing....");
  const user = await prisma.user.findFirst();

  console.log({ user });

  return Response.json({ user });
}
