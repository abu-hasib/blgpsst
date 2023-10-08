"use client";

import { DropdownMenu, Button, AlertDialog, Flex } from "@radix-ui/themes";
import { Icons } from "./icons";
import Link from "next/link";
import { Post } from "@/types";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface Operations {
  post: Post;
}

export default function Operations({ post }: Operations) {
  const [showDialog, setDialog] = useState<boolean>(false);
  const [isRemoving, setRemoving] = useState<boolean>(false);
  const router = useRouter()

  const handleDelete = async() => {
    setRemoving(true)
    const response = await fetch('/api/posts', {
      method: "DELETE",
      body: JSON.stringify({
        postId: post.id
      })
    })

    if(!response.ok) throw new Error()
    setRemoving(false)
    router.refresh()
  }

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
          <DropdownMenu.Item
            color="red"
            onSelect={() => setDialog(true)}
          >
            Delete
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>

      <AlertDialog.Root
        open={showDialog}
        onOpenChange={setDialog}
      >
        <AlertDialog.Content style={{ maxWidth: 450 }}>
          <AlertDialog.Title>Remove post</AlertDialog.Title>
          <AlertDialog.Description size="2">
            Are you sure? This post will no longer show in your list.
          </AlertDialog.Description>
          <Flex gap="3" mt="4" justify="end">
            <AlertDialog.Cancel onClick={() => setDialog(false)}>
              <Button variant="soft" color="gray">
                Cancel
              </Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action onClick={handleDelete}>
              <Button variant="solid" color="red">
                {isRemoving && <Icons.spinner />}
                Remove
              </Button>
            </AlertDialog.Action>
          </Flex>
        </AlertDialog.Content>
      </AlertDialog.Root>
    </>
  );
}
