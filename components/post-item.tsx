import { Post } from "@/types";

interface PostItem {
  post: Post;
}

export default function PostItem({ post }: PostItem) {
  return <h1>{post.title}</h1>;
}
