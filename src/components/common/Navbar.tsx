"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <header className="sticky z-(--z-sticky) top-0">
      <nav
        className={`${isScrolled ? "border-white/25 bg-white/25 dark:bg-black/25 backdrop-blur-lg" : "border-transparent"} p-4 md:px-8 border-b transition duration-300`}>
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <Link
            href="/"
            className="font-mono">
            estvrtecky
          </Link>
          <Link
            href="mailto:contact@estvrtecky.com"
            className="px-3 py-2 rounded-lg font-mono font-medium text-xs text-btn bg-fg hover:bg-(--neutral-800) dark:hover:bg-(--neutral-200) transition">
            Get in touch
          </Link>
        </div>
      </nav>
    </header>
  );
}
