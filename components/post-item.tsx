import { Post } from "@/types";

interface PostItem {
  post: Post;
}

export default function PostItem({ post }: PostItem) {
  return (
    <article>
      <h1>{post.title}</h1>
      <time>{`${new Date(post.createdAt)}`}</time>
    </article>
    )
}
