"use client";

import { setUser } from "@/redux/features/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { Button } from "@radix-ui/themes";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Login() {
  const dispatch = useAppDispatch();
  const router = useRouter()
  const handleLogin = async () => {
    const res = await fetch("/api");
    const json = await res.json();
    dispatch(setUser(json.user));
    console.log({ json });
    router.push("/dashboard")
  };
  return (
    <Button className="cursor-pointer" onClick={handleLogin}>
      Login
    </Button>
  );
}
