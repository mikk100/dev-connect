"use client";

import Image from "next/image";
import Link from "next/link";
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { Theme } from "./Theme";

interface NavProps {
  isAuthenticated: boolean;
  user?: {
    name?: string | null;
    image?: string | null;
  } | null;
}

interface NavItem {
  label: string;
  href: string;
  isButton?: boolean;
}

export default function Nav({ isAuthenticated, user }: NavProps) {
  const [navOpen, setNavOpen] = useState(false);

  // Define full items list
  const allNavStuff: NavItem[] = [
    { label: "Home", href: "/" },
    { label: "Explore Projects", href: "/explore" },
    { label: "Developers", href: "/developers" },
    { label: "Dashboard", href: "/dashboard" },
    { label: "Sign In", href: "/signin" },
    { label: "Submit Project", href: "/submit-project", isButton: true },
  ];

  // Filter items based on whether user is logged in or out
  const navStuff = allNavStuff.filter((item) => {
    if (isAuthenticated) {
      return item.label !== "Sign In";
    } else {
      return item.label !== "Submit Project";
    }
  });

  return (
    <nav className="flex items-center justify-between px-6 sm:px-10 py-4 bg-white border-b border-gray-200 sticky top-0 z-50 text-neutral-900">
      
      {/* Brand Logo & Name */}
      <Link href="/" className="flex items-center gap-2.5 z-50">
        <Image 
          src="/favicon.ico" 
          alt="DevConnect Logo"
          width={40}
          height={40}
          className="w-8 h-8 object-contain"
        />
        <span className="text-lg font-bold tracking-normal" style={{ color: Theme.primary }}>
          DevConnect
        </span>
      </Link>

      {/* Desktop Navigation Links & Profile */}
      <div className="hidden md:flex items-center text-sm font-medium gap-6">
        {navStuff.map((item, index) => 
          item.isButton ? (
            <Link
              key={index}
              href={item.href}
              className="px-4 py-2 rounded text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: Theme.primary }}
            >
              {item.label}
            </Link>
          ) : (
            <Link 
              key={index} 
              href={item.href}
              className="hover:opacity-70 transition-opacity"
            >
              {item.label}
            </Link>
          )
        )}

        {/* Profile Image / Avatar (Visible only when signed in) */}
        {isAuthenticated && (
          <Link href="/" className="flex items-center">
            {user?.image ? (
              <Image
                src={user.image}
                alt={user?.name || "User Profile"}
                width={36}
                height={36}
                className="w-9 h-9 rounded-lg object-cover border border-gray-300 shadow-sm"
              />
            ) : (
              <div 
                className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-sm"
                style={{ backgroundColor: Theme.primary }}
              >
                {user?.name ? user.name.charAt(0).toUpperCase() : "U"}
              </div>
            )}
          </Link>
        )}
      </div>

      {/* Mobile Right Container (Profile + Menu Toggle) */}
      <div className="flex items-center gap-3 md:hidden z-50">
        {isAuthenticated && (
          <Link href="/dashboard" className="flex items-center">
            {user?.image ? (
              <Image
                src={user.image}
                alt={user?.name || "User Profile"}
                width={32}
                height={32}
                className="w-8 h-8 rounded-full object-cover border border-gray-300"
              />
            ) : (
              <div 
                className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-xs"
                style={{ backgroundColor: Theme.primary }}
              >
                {user?.name ? user.name.charAt(0).toUpperCase() : "U"}
              </div>
            )}
          </Link>
        )}

        <button 
          onClick={() => setNavOpen(!navOpen)} 
          className="text-2xl focus:outline-none"
          aria-label="Toggle Menu"
        >
          {navOpen ? <IoMdClose className="text-black" /> : <RiMenu3Fill style={{ color: Theme.primary }} />}
        </button>
      </div>

      {/* Mobile Navbar Fullscreen Overlay */}
      {navOpen && (
        <div 
          className="fixed inset-0 h-dvh w-full flex flex-col items-center justify-center md:hidden z-40 text-neutral-900 bg-white"
        >
          <div className="flex flex-col items-center text-lg font-medium gap-6 w-full px-8 text-center">
            {navStuff.map((item, index) => (
              <Link 
                key={index} 
                href={item.href}
                onClick={() => setNavOpen(false)}
                className={
                  item.isButton 
                    ? "w-full max-w-xs py-2.5 rounded text-white font-medium shadow-sm" 
                    : "hover:opacity-70"
                }
                style={item.isButton ? { backgroundColor: Theme.primary } : {}}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
      
    </nav>
  );
}