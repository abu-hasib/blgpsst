import Editor from "@/components/editor";
import { Icons } from "@/components/icons";
import { Button } from "@radix-ui/themes";
import Link from "next/link";
import { Router } from "next/router";

interface EditorPageProps {
  params: { postId: string };
}

export default function EditorPage({ params }: any) {
  console.log({ par: params });

  return (
    <div className="p-6">
      <div className="flex justify-between">
        <Link href="/dashboard">
          <Icons.chevronLeft />
        </Link>
        <Button className="bg-black" size="4">
          Save
        </Button>
      </div>
      <div>
        <Editor />
      </div>
    </div>
  );
}
