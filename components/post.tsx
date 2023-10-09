import Link from "next/link";
import Operations from "./operations";
import CreatePost from "./create-post";
import { Post, Posts } from "@/types";
import { useAppSelector } from "@/redux/hooks";
interface UserPostProps {
  posts: Posts;
}
export default function UserPost({ posts }: UserPostProps) {
  // const { user } = useAppSelector((state) => state.authReducer);

  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">Posts</h1>
        <CreatePost />
      </div>
      <div className="border rounded container mx-auto space-y-1 divide-y-2 divide-solid">
        {posts.length ? (
          posts.map((post) => (
            <section key={post.id} className="p-4 flex justify-between">
              <div>
                <Link href={`/editor/${post.id}`}>
                  <h1 className="">{post.title}</h1>
                </Link>
                <time>{`${new Date(post.updatedAt)}`}</time>
              </div>
              <Operations post={post} />
            </section>
          ))
        ) : (
          <p>Create post</p>
        )}
      </div>
    </>
  );
}
