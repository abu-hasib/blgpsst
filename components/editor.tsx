"use client";

import { Post } from "@/types";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import Link from "next/link";
import { FormEvent, useCallback, useEffect, useRef, useState } from "react";
import { Icons } from "./icons";
import { Button } from "@radix-ui/themes";
import { useForm } from "react-hook-form";
import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";

interface EditorProps {
  post: Post;
}

export default function Editor({ post }: EditorProps) {
  //   const editorRef = useRef<EditorJS>();
  //   const [isMounted, setMounted] = useState(false);

  //   const initEditor = useCallback(() => {
  //     if (!editorRef.current) {
  //       const editor = new EditorJS({
  //         holder: "editor",
  //         onReady: () => {
  //           editorRef.current = editor;
  //         },
  //         data: DEFAULT_INITIAL_DATA,
  //         tools: {
  //             header: Header
  //         },
  //         onChange: async () => {
  //           let content = await editor.saver.save();
  //           console.log(content);
  //         },
  //       });
  //     }
  //   }, []);

  //   useEffect(() => {
  //     if (typeof window !== undefined) setMounted(true);
  //   }, []);

  //   useEffect(() => {
  //     if (isMounted) initEditor();

  //     return () => {
  //       editorRef.current?.destroy();
  //       editorRef.current = undefined;
  //     };
  //   }, [isMounted, initEditor]);
  const [isSaving, setSave] = useState(false);
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    console.log({ data });

    const response = await fetch(`/api/posts/${post.id}`, {
      method: "POST"
    })
    // const post = await prisma.user.create({
    //   data: {
    //     name: "Bob",
    //     email: "bob@prisma.io",
    //     posts: {
    //       create: {
    //         title: "Hello content",
    //         content: "This is it"
    //       },
    //     },
    //   },
    // });
    // console.log({post})
    console.log("submitting");
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
        <div id="editor">{/* <input type="text" value={post.title} /> */}</div>
        <div className="w-[800px] mx-auto space-y-4">
          <input
            type="text"
            placeholder="Untitled"
            id="title"
            defaultValue={post.title}
            className="outline-none w-full text-5xl font-bold placeholder:text-gray-500"
            {...register("title")}
          />
          <textarea
            id="content"
            {...register("content")}
            // id="cont"
            cols={30}
            rows={10}
            className="outline-none w-full"
          ></textarea>
        </div>
      </form>
    </div>
  );
}
