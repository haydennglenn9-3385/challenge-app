"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

  const linkClasses = (path: string) =>
    `px-4 py-2 rounded-md text-sm font-medium transition-colors ${
      pathname === path
        ? "text-black font-semibold"
        : "text-gray-500 hover:text-black"
    }`;

  return (
    <nav className="fixed top-0 left-0 w-full h-16 border-b bg-white/80 backdrop-blur-md flex items-center px-6 z-50">
      <div className="flex items-center gap-6">
        <Link href="/" className={linkClasses("/")}>
          Home
        </Link>
        <Link href="/create" className={linkClasses("/create")}>
          Create
        </Link>
        <Link href="/join" className={linkClasses("/join")}>
          Join
        </Link>
      </div>
    </nav>
  );
}
