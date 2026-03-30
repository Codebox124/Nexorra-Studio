"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

// ─── Types ───────────────────────────────────────────────────────────────────

interface NavProps {
  currentPage: string;
}

// ─── Data ────────────────────────────────────────────────────────────────────

const NAV_ITEMS = ["Home", "About", "Services", "Work", "Contact"] as const;

function getHref(item: string) {
  return item === "Home" ? "/" : `/${item.toLowerCase()}`;
}

function isActive(item: string, currentPage: string) {
  return currentPage === `/${item.toLowerCase()}`;
}

// ─── Root ────────────────────────────────────────────────────────────────────

const Navbar = () => {
  const pathname = usePathname();
  const [currentPage, setCurrentPage] = useState<string>(pathname ?? "");

  useEffect(() => {
    setCurrentPage(pathname === "/" ? "/home" : (pathname ?? ""));
  }, [pathname]);

  return (
    <>
      <DesktopNav currentPage={currentPage} />
      <MobileNav currentPage={currentPage} />
    </>
  );
};

export default Navbar;

// ─── Desktop Nav ─────────────────────────────────────────────────────────────

const DesktopNav = ({ currentPage }: NavProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <header
      className={cn(
        " top-0 inset-x-0 z-50 hidden md:block transition-all duration-300",
        scrolled
          ? "py-3 bg-background/80 backdrop-blur-xl border-b border-border/40 shadow-sm"
          : "py-5 bg-transparent"
      )}
    >
      <nav className="max-w-350 mx-auto px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="/" aria-label="Nexorra Studio home">
          <Image
            src="/logo.png"
            alt="Nexorra Studio"
            width={120}
            height={44}
            className="object-contain"
            priority
          />
        </a>

        {/* Nav links */}
        <ul className="flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <li key={item}>
              <a
                href={getHref(item)}
                className={cn(
                  "relative text-sm font-medium transition-colors duration-200 group",
                  isActive(item, currentPage)
                    ? "text-foreground"
                    : "text-foreground/60 hover:text-foreground"
                )}
              >
                {item}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-px bg-primary transition-all duration-300",
                    isActive(item, currentPage)
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  )}
                />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a href="/contact">
          <button className="px-6 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:brightness-110 transition-all duration-300 shadow-[0_0_30px_-8px_hsl(72_100%_50%/0.3)]">
            Get Started
          </button>
        </a>
      </nav>
    </header>
  );
};

// ─── Mobile Nav ──────────────────────────────────────────────────────────────

const MobileNav = ({ currentPage }: NavProps) => {
  const [open, setOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* Top bar — always visible */}
      <div className=" top-0 inset-x-0 z-50 md:hidden flex items-center justify-between px-5 py-4 bg-background/80 backdrop-blur-xl border-b border-border/40">
        <a href="/" aria-label="Nexorra Studio home">
          <Image
            src="/logo.png"
            alt="Nexorra Studio"
            width={100}
            height={40}
            className="object-contain"
            priority
          />
        </a>
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          className="p-2 text-foreground/70 hover:text-foreground transition-colors"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Full-screen overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 md:hidden bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 transition-all duration-300",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <ul className="flex flex-col items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <li key={item}>
              <a
                href={getHref(item)}
                onClick={() => setOpen(false)}
                className={cn(
                  "text-2xl font-medium transition-colors",
                  isActive(item, currentPage)
                    ? "text-primary"
                    : "text-foreground/70 hover:text-foreground"
                )}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <a href="/contact" onClick={() => setOpen(false)}>
          <button className="px-8 py-3 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:brightness-110 transition-all shadow-[0_0_40px_-10px_hsl(72_100%_50%/0.4)]">
            Get Started
          </button>
        </a>
      </div>
    </>
  );
};
