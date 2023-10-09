import Link from "next/link";
import Operations from "./operations";
import CreatePost from "./create-post";
import { Post, Posts } from "@/types";
import { useAppSelector } from "@/redux/hooks";
import { Icons } from "./icons";
interface UserPostProps {
  posts: Posts;
}
export default function UserPost({ posts }: UserPostProps) {
  return (
    <>
      <div className="flex justify-between py-8">
        <h1 className="text-3xl font-bold">Posts</h1>
        <CreatePost />
      </div>
      <div className="border rounded container mx-auto space-y-1 divide-y-2 divide-solid min-h-[50vh]">
        {posts.length ? (
          posts.map((post) => (
            <section key={post.id} className="p-4 flex justify-between">
              <div>
                <Link href={`/editor/${post.id}`}>
                  <h1 className="">{post.title}</h1>
                </Link>
                <time>{`${new Date(post.updatedAt).toDateString()}`}</time>
              </div>
              <Operations post={post} />
            </section>
          ))
        ) : (
          <div className="grid place-items-center min-h-full py-4 space-y-2">
            <Icons.post />
            <p className="font-medium text-2xl">No post yet</p>
            <CreatePost />
          </div>
        )}
      </div>
    </>
  );
}
