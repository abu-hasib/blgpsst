export type SiteConfig = {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
};

export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};

export type Post = {
  id: number;
  title: string;
  content: string | null;
  published: boolean;
  authorId: number;
  createdAt: Date;
  updatedAt: Date;
};

export type Posts = Post[];
