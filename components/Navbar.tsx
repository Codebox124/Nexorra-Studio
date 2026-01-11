"use client"

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation"
const Navbar = () => {
  const pathname = usePathname();
  const [currentPage, setCurrentPage] = useState(pathname);
  useEffect(() => {
    if (pathname === "/") {
      setCurrentPage(`/home`)
    } else {
      setCurrentPage(pathname)
    }
    console.log(pathname)
  }, [pathname])

  return <>
    <DesktopNavBar currentPage={currentPage} />
    <MobileMenu currentPage={currentPage} />
  </>;
};

export default Navbar;

interface menuProps {
  currentPage: any;
}

const MobileMenu = ({ currentPage }: menuProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems = ['Home', 'About', 'Services', 'Work', 'Contact'];
  return <div className={`z-20 relative md:hidden fixed flex flex-col gap-3 left-0  text-white p-4 ${isMobileMenuOpen ? "bg-black/50  backdrop-blur-[10px] inset-0" : ""} right-0`}>
    <button
      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      className="p-2"
    >
      {/* Logo */}
        
      {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
    </button>
    <Image
          src="/logo.png"
          alt="Nexorra Studio Logo"
          width={200}
          height={200}
          className="block md:hidden -top-15 right-0  object-cover absolute transition-transform duration-1000"
          priority
        />
    {
      isMobileMenuOpen && <div className="flex w-full h-full justify-center items-center flex-col gap-4">
        {navItems.map((item:any) => (
          <a
            key={item}
            href={`${item === "Home" ? "/" : `/${item.toLowerCase()}`}`}
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-white/80 relative hover:text-white transition-colors py-2 text-lg"
          >
            {item}
            <span className={`absolute -bottom-1 left-0 ${currentPage === `/${item.toLowerCase()}` ? "w-full" : "w-0"} h-0.5 bg-[#9804bc] group-hover:w-full transition-all duration-300`} />
          </a>

        ))}
        <a href="/contact">

          <button className="mt-4 px-6 py-3 bg-white text-black rounded-full font-semibold">
            Get Started
          </button>
        </a>
      </div>
    }
  </div>
}


const DesktopNavBar = ({ currentPage }: menuProps) => {
  const [isScrolled, setIsScrolled] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'About', 'Services', 'Work', 'Contact'];
  return <nav className={`fixed hidden md:block overflow-hidden max-w-[1230px] mx-auto z-20 rounded-full left-10 right-10 top-5 transition-bg duration-300 ease-in-out  ${isScrolled ? "bg-white/30 backdrop-blur-[10px]" : "bg-transparent"}`}>
    <div className="max-w-7xl mx-auto px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Image
          src="/logo.png"
          alt="Nexorra Studio Logo"
          width={200}
          height={200}
          className="hidden md:block object-cover absolute transition-transform duration-1000"
          priority
        />
        {/* Desktop Navigation */}
        <div className="hidden w-[70%] justify-between md:flex ml-auto items-center gap-8">
          <div className="flex items-center w-[60%] justify-between gap-3">
            {navItems.map((item) => (
              <a
                key={item}
                href={`${item === "Home" ? "/" : `/${item.toLowerCase()}`}`}
                className="text-white/80 hover:text-white transition-colors relative group"
              >
                {item}
                <span className={`absolute -bottom-1 left-0 ${currentPage === `/${item.toLowerCase()}` ? "w-full" : "w-0"} h-0.5 bg-[#9804bc] group-hover:w-full transition-all duration-300`} />
              </a>
            ))}
          </div>
          {/* CTA Button */}
         <a href="/contact">
          <button className="hidden md:block px-6 py-2.5 bg-white text-black rounded-full font-semibold hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all">
            Get Started
          </button>
         </a>
        </div>



        {/* Mobile Menu Button */}
        {/*<button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>*/}
      </div>
      {/*
                isMobileMenuOpen && <div className="flex fixed inset-0 z-20">

                </div>
            */}
      {/* Mobile Menu */}
      {/*isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-lg border-b border-white/10 py-6 px-6">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white/80 hover:text-white transition-colors py-2 text-lg"
                >
                  {item}
                </a>
              ))}
              <button className="mt-4 px-6 py-3 bg-white text-black rounded-full font-semibold">
                Get Started
              </button>
            </div>
          </div>
        )*/}
    </div>
  </nav>
}