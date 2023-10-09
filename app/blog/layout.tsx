import "@radix-ui/themes/styles.css";
import { MainNav } from "@/components/main-nav";
import { siteConfig } from "@/config/site";
import { Button } from "@radix-ui/themes";
import Login from "@/components/login";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
