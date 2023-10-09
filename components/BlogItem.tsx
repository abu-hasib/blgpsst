import { Post } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface BlogItemProps {
  post: { id: number; image: string, text: string };
}

export default function BlogItem({ post }: BlogItemProps) {
  return (
    <article>
      <Link href={`${post.id}`}>
        <div className="aspect-square h-[80%] w-full border border-gray-100 rounded-lg p-1">
          <Image
            src={post.image}
            alt={`${post.id}`}
            width={165}
            height={165}
            style={{ height: "100%", width: "100%" }}
            className="rounded-lg"
          />
        </div>
        <h2 className="text-2xl font-bold capitalize">{post.text}</h2>
      </Link>
    </article>
  );
}
