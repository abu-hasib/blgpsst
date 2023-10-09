import "@radix-ui/themes/styles.css";
import { MainNav } from "@/components/main-nav";
import { siteConfig } from "@/config/site";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <header className="sticky top-0 z-40 border-b bg-white">
        <div className="container flex h-16 items-center justify-between py-4">
          <MainNav items={siteConfig.mainNav} />
          {/* <UserAccountNav
            user={{
              name: user.name,
              image: user.image,
              email: user.email,
            }}
          /> */}
        </div>
      </header>
      {children}
    </div>
  );
}
