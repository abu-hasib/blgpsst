import { Post, Posts } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface BlogItemProps {
  post: Post
}

export default function BlogItem({ post }: BlogItemProps) {
  return (
    <article>
      <Link href={`/blog/${post.id}`}>
        <div className="aspect-square h-[80%] w-full border border-gray-100 rounded-lg p-1">
          <Image
            src={post.url}
            alt={`${post.id}`}
            width={165}
            height={165}
            style={{ height: "100%", width: "100%" }}
            className="rounded-lg"
          />
        </div>
        <h2 className="text-2xl font-bold capitalize">{post.title}</h2>
      </Link>
    </article>
  );
}
