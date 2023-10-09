import { Post } from "@prisma/client";

export type SiteConfig = {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
};

export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};

export type Post = Post

export type Posts = {
  posts: Post[]
}