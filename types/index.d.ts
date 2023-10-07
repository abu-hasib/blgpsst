export type DashboardConfig = {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
};

export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};

export type Post = {
  id: number
  title: String
}

export type Posts = {
  posts: Post[]
}