"use client";

import { Post } from "@/types";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import Link from "next/link";
import { ButtonHTMLAttributes, ElementRef, FormEvent, useCallback, useEffect, useRef, useState } from "react";
import { Icons } from "./icons";
import { Button } from "@radix-ui/themes";
import { useForm } from "react-hook-form";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface EditorProps {
  post: Post;
}

export default function Editor({ post }: EditorProps) {
  const router = useRouter()
  const [isSaving, setSave] = useState(false);
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = async (data: any) => {
    setSave(true);
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts`, {
      method: "PATCH",
      body: JSON.stringify({
        postId: post.id,
        title: data.title,
        content: data.content,
      }),
    });
    if (!response.ok) throw new Error();
    setSave(false);
  };

  return (
    <div className="container p-8 mx-auto grid">
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-between items-center">
          <Link href="/dashboard">
            <Icons.chevronLeft />
          </Link>
          <Button type="submit" className="bg-black cursor-pointer" size="3">
            {isSaving && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Save
          </Button>
        </div>
        <div id="editor"></div>
        <div className="w-[800px] mx-auto space-y-4">
          <input
            type="text"
            placeholder="Untitled"
            id="title"
            defaultValue={post.title}
            className="outline-none w-full text-5xl font-bold placeholder:text-gray-500"
            // @ts-ignore
            {...register("title")}
          />
          <textarea
            id="content"
            // @ts-ignore
            {...register("content")}
            cols={30}
            rows={10}
            className="outline-none w-full"
          ></textarea>
        </div>
      </form>
    </div>
  );
}
