"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "../ui/container";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md transition-all duration-300">
      <Container>
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold tracking-tight text-neutral-950 transition-opacity hover:opacity-80"
          >
            skema<span className="text-neutral-400">hq</span>
          </Link>

          {/* Nav Links */}
          <nav className="hidden items-center gap-10 md:flex">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative text-sm font-medium transition-colors duration-200 hover:text-neutral-950 ${
                    isActive ? "text-neutral-950 font-semibold" : "text-neutral-600"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-neutral-950" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Contact Button / Pill */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-neutral-950 px-5 py-2 text-xs font-semibold text-neutral-950 transition-all duration-300 hover:bg-neutral-950 hover:text-white active:scale-95"
            >
              Contacts
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}