"use client";

import { useState } from "react";
import BlogItem from "./BlogItem";
import { Icons } from "./icons";
import SearchDialog from "./SearchDialog";
import { useSelector } from "react-redux";
import { useAppSelector } from "@/redux/hooks";

interface BlogProps {
  posts: {}[];
}

export default function Blog({ posts }: BlogProps) {
  const [isGrid, setIsGrid] = useState(true);
  const [showDialog, setDialog] = useState<boolean>(false);
  const { searchTerm } = useAppSelector((state) => state.searchReducer);

  return (
    <>
      <div className="flex justify-between items-center">
        <pre className="text-5xl">{searchTerm}</pre>
        <h1 className="font-bold text-4xl">Blog</h1>
        <div className=" divide-x-2 divide-solid">
          <div className="flex gap-2">
            <Icons.grid
              onClick={() => setIsGrid(true)}
              className="cursor-pointer hover:bg-gray-200"
            />
            <Icons.list
              onClick={() => setIsGrid(false)}
              className="cursor-pointer hover:bg-gray-200"
            />
            <Icons.settings
              className="cursor-pointer hover:bg-gray-200"
              onClick={() => setDialog(true)}
            />
          </div>
        </div>
        <SearchDialog showDialog={showDialog} setDialog={setDialog} />
      </div>
      <hr className="my-8" />
      {posts?.length ? (
        <div
          className={`grid ${
            isGrid ? "sm:grid-cols-2" : "grid-cols-1"
          } gap-10 `}
        >
          {posts
            .filter((post: any) => post.text.includes(searchTerm))
            .map((post: any) => (
              <BlogItem key={post.id} post={post} />
            ))}
        </div>
      ) : (
        <p>NO posts</p>
      )}
    </>
  );
}
