"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home", twoLine: false },
  { href: "/technology", label: "Science of", sublabel: "Surface Carbon", twoLine: true },
  { href: "/rhino-mining", label: "Rhino Mining", sublabel: "Company", twoLine: true },
  { href: "/library", label: "Library &", sublabel: "Resources", twoLine: true },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] border-b border-white/10 bg-black/95 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-8 lg:px-12">
        <Link href="/" className="relative z-10 flex shrink-0 items-center py-1">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.png"
            alt="Ecogensus"
            className="h-10 w-auto sm:h-12"
            style={{ maxHeight: "48px", minHeight: "36px" }}
            fetchPriority="high"
          />
        </Link>

        {/* Desktop nav - Robin-style: spread out, white, clear */}
        <div className="hidden md:flex md:items-center md:gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium leading-tight text-white transition-colors hover:text-white/80"
            >
              {link.twoLine ? (
                <span className="flex flex-col items-start">
                  <span>{link.label}</span>
                  <span>{link.sublabel}</span>
                </span>
              ) : (
                link.label
              )}
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden p-2 text-zinc-400 hover:text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/10 bg-black px-4 py-4">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-zinc-400 hover:text-white"
                onClick={() => setMobileOpen(false)}
              >
                {link.twoLine ? `${link.label} ${link.sublabel}` : link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
