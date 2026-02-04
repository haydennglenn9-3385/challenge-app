"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const [hasProfile, setHasProfile] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("userProfile");
    setHasProfile(!!stored);
  }, []);

  const linkClasses = (path: string) =>
    `px-4 py-2 rounded-md text-sm font-medium transition-colors ${
      pathname === path
        ? "text-black font-semibold"
        : "text-gray-500 hover:text-black"
    }`;

  return (
    <nav className="fixed top-0 left-0 w-full h-16 border-b bg-white/80 backdrop-blur-md flex items-center justify-between px-6 z-50">
      {/* LEFT SIDE — Desktop */}
      <div className="hidden md:flex items-center gap-6">
        <Link href="/" className={linkClasses("/")}>Home</Link>
        <Link href="/create" className={linkClasses("/create")}>Create</Link>
        <Link href="/join" className={linkClasses("/join")}>Join</Link>
      </div>

      {/* MOBILE HAMBURGER */}
      <button
        className="md:hidden text-black"
        onClick={() => setOpen(!open)}
      >
        {open ? (
          <span className="text-2xl font-bold">×</span>
        ) : (
          <span className="text-2xl font-bold">☰</span>
        )}
      </button>

      {/* RIGHT SIDE — Avatar */}
      <Link href="/profile" className="hidden md:flex items-center">
        <div
          className="w-8 h-8 rounded-full border flex items-center justify-center text-gray-700 text-sm"
        >
          👤
        </div>
      </Link>

      {/* MOBILE MENU */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-white border-b shadow-sm md:hidden flex flex-col py-4">
          <Link href="/" className="px-6 py-3 text-gray-700 hover:bg-gray-100" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/create" className="px-6 py-3 text-gray-700 hover:bg-gray-100" onClick={() => setOpen(false)}>Create</Link>
          <Link href="/join" className="px-6 py-3 text-gray-700 hover:bg-gray-100" onClick={() => setOpen(false)}>Join</Link>

          <Link href="/profile" className="px-6 py-3 flex items-center gap-3 border-t mt-3" onClick={() => setOpen(false)}>
            <div className="w-8 h-8 rounded-full border flex items-center justify-center text-gray-700 text-sm">
              👤
            </div>
            <span className="text-gray-700">Profile</span>
          </Link>
        </div>
      )}
    </nav>
  );
}
