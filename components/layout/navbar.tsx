import Link from "next/link";

import Container from "../ui/container";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur-xl">
      <Container>
        <div className="flex h-20 items-center justify-between">

          <Link
            href="/"
            className="text-xl font-bold tracking-tight"
          >
            Skema HQ
          </Link>

          <nav className="hidden gap-8 md:flex">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/contact">Contact</Link>
          </nav>

        </div>
      </Container>
    </header>
  );
}