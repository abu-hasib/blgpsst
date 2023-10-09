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
  const [isAddImage, setAddImage] = useState(false);
  const fileRef = useRef<ElementRef<"input">>(null)
  const handleClick = () => {
   if(!fileRef.current) return
   fileRef?.current?.click
  }

  const onSubmit = async (data: any) => {
    setSave(true);
    const response = await fetch(`/api/posts`, {
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
        <div id="editor">{/* <input type="text" value={post.title} /> */}</div>
        <div className="w-[800px] mx-auto space-y-4">
          <div
            className="flex items-center gap-2 p-1.5 rounded-xl hover:bg-[#e2e8f0] w-fit"
            onClick={() => setAddImage(!isAddImage)}
          >
            <Icons.sun />
            <span>Add cover</span>
          </div>
          {/* {isAddImage && (
            <>
              <Image src={""} width={100} height={100} alt="cover" />
              <input ref={fileRef} type="file" name="" id="" className="hidden" />
              <button onClick={handleClick}>

              <Icons.add />
              </button>
            </>
          )} */}
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
