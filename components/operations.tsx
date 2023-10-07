"use client";

import { DropdownMenu, Button } from "@radix-ui/themes";
import { Icons } from "./icons";
import Link from "next/link";
import { Post } from "@/types";

interface Operations {
  post: Post;
}

export default function Operations({ post }: Operations) {
  return (
    <>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <Button variant="soft">
            <Icons.ellipsis />
          </Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content className="min-w-[150px]">
          <Link href={`/editor/${post.id}`}>
            <DropdownMenu.Item>Edit</DropdownMenu.Item>
          </Link>
          <DropdownMenu.Item color="red">Delete</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </>
  );
}
