"use client";
import { Button } from "@radix-ui/themes";
import { Icons } from "./icons";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreatePost() {
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();
  const handleClick = async () => {
    setLoading(true);
    const response = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title: "Untitled",
      }),
    });

    if (!response.ok) {
      console.error("Oh no");
    }
    setLoading(false);
    const post = await response.json();
    router.push(`/editor/${post.id}`);
  };

  return (
    <Button onClick={handleClick} size="3">
      {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
      New Post
    </Button>
  );
}
