import Editor from "@/components/editor";
import { Icons } from "@/components/icons";
import prisma from "@/lib/prisma";
import { Post } from "@prisma/client";
import { Button } from "@radix-ui/themes";
import Link from "next/link";
import { Router } from "next/router";

interface EditorPageProps {
  params: { postId: string };
}
async function getAPost(postId: number): Promise<Post> {
  try {
    const post = await prisma.post.findFirst({
      where: {
        id: postId,
      },
    });
    if(!post) throw new Error()
    return post;
  } catch (error) {
    throw new Error()
  }
}

export default async function EditorPage({ params }: any) {
  console.log({ par: params });

  const post = await getAPost(parseInt(params.postId));

  return (
    <Editor post={post}/>
  );
}
