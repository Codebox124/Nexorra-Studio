"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [currentPage, setCurrentPage] = useState<string>(pathname ?? "");

  useEffect(() => {
    setCurrentPage(pathname === "/" ? "/home" : (pathname ?? ""));
  }, [pathname]);

  return (
    <>
      <DesktopNavBar currentPage={currentPage} />
      <MobileMenu currentPage={currentPage} />
    </>
  );
};

export default Navbar;

interface MenuProps {
  currentPage: string;
}

const navItems = ["Home", "About", "Services", "Work", "Contact"];

const MobileMenu = ({ currentPage }: MenuProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`z-50 md:hidden left-0 right-0 top-0 transition-all duration-300 ${
        open
          ? "inset-0 bg-background/95 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-5 py-4">
        <Image
          src="/logo.png"
          alt="Nexorra Studio"
          width={140}
          height={40}
          className="object-contain"
          priority
        />
        <button
          onClick={() => setOpen(!open)}
          className="p-2 text-foreground/70 hover:text-foreground transition-colors"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Menu items */}
      {open && (
        <div className="flex flex-col items-center justify-center gap-6 pt-12">
          {navItems.map((item) => (
            <a
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className={`text-2xl font-medium transition-colors ${
                currentPage === `/${item.toLowerCase()}`
                  ? "text-primary"
                  : "text-foreground/70 hover:text-foreground"
              }`}
            >
              {item}
            </a>
          ))}
          <a href="/contact" onClick={() => setOpen(false)} className="mt-4">
            <button className="px-8 py-3 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:brightness-110 transition-all shadow-[0_0_40px_-10px_hsl(72_100%_50%/0.4)]">
              Get Started
            </button>
          </a>
        </div>
      )}
    </div>
  );
};

const DesktopNavBar = ({ currentPage }: MenuProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handle);
    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <nav
      className='  hidden md:block z-50 left-8 right-8 top-2 rounded-full transition-all duration-300 max-w-[1400px] mx-auto '
    >
      <div className="px-6 py-2 flex items-center justify-between">
        {/* Logo */}
        <Image
          src="/logo.png"
          alt="Nexorra Studio"
          width={160}
          height={44}
          className="object-contain"
          priority
        />

        {/* Nav links */}
        <div className="flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className={`text-sm relative group transition-colors duration-200 ${
                currentPage === `/${item.toLowerCase()}`
                  ? "text-foreground"
                  : "text-foreground/60 hover:text-foreground"
              }`}
            >
              {item}
              <span
                className={`absolute -bottom-1 left-0 h-px bg-primary transition-all duration-300 ${
                  currentPage === `/${item.toLowerCase()}`
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />
            </a>
          ))}
        </div>

        {/* CTA */}
        <a href="/contact">
          <button className="px-6 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:brightness-110 transition-all duration-300 shadow-[0_0_30px_-8px_hsl(72_100%_50%/0.3)]">
            Get Started
          </button>
        </a>
      </div>
    </nav>
  );
};
