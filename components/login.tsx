"use client";

import { Button } from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import { Icons } from "./icons";

export default function Login() {
  const router = useRouter()
  const handleLogin = async () => {
    router.push("/dashboard")
  };
  return (
    <Button className="cursor-pointer" onClick={handleLogin}>
      <Icons.arrowRight />
    </Button>
  );
}
