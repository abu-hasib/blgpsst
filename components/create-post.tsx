"use client";
import { Button } from "@radix-ui/themes";
import { Icons } from "./icons";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreatePost() {
  const [isLoading, setLoading] = useState(false)
  const router = useRouter()
  const handleClick = async () => {
    console.log("cliec..");
    setLoading(true)
    const response = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title: "Untitled#"
      })
    });

    if(!response.ok) {
      console.error("Oh no")
    }
    setLoading(false)
    const post = await response.json();
    router.push(`/editor/${post.id}`)
  };

  return (
    <Button onClick={handleClick}>
      {isLoading && <Icons.spinner />}
      <Icons.add /> Create
    </Button>
  );
}
