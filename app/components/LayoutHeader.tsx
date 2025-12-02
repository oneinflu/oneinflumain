"use client";
import { usePathname } from "next/navigation";
import Header from "./Header";

export default function LayoutHeader() {
  const pathname = usePathname();
  const hide = pathname?.startsWith("/profile/") ?? false;
  if (hide) return null;
  return <Header />;
}

