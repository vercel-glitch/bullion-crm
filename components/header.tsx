"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  currentPage?: "home" | "solutions" | "demo" | "contact";
}

export default function Header({ currentPage = "home" }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getLinkClass = (page: string) => {
    const baseClass = "hover:text-yellow-500 transition-colors";
    if (currentPage === page) {
      return `text-foreground ${baseClass}`;
    }
    return `text-muted-foreground ${baseClass}`;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/">
              <img
                src="/images/verifiedcrm-logo.png"
                alt="VerifiedCRM"
                className="h-8"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className={getLinkClass("home")}>
              Home
            </Link>
            <Link href="/solutions" className={getLinkClass("solutions")}>
              Solutions
            </Link>
            <Link href="/demo" className={getLinkClass("demo")}>
              Demo
            </Link>
            <Link href="/contact" className={getLinkClass("contact")}>
              Contact
            </Link>
            <Link href="/login">
              <Button
                variant="outline"
                className="bg-yellow-500 cursor-pointer text-white font-semibold"
                size="lg"
              >
                Go To App
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-yellow-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-inset transition-colors"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t">
              <Link
                href="/"
                className={`block px-3 py-2 rounded-md text-base font-medium ${getLinkClass(
                  "home"
                )}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/solutions"
                className={`block px-3 py-2 rounded-md text-base font-medium ${getLinkClass(
                  "solutions"
                )}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Solutions
              </Link>
              <Link
                href="/demo"
                className={`block px-3 py-2 rounded-md text-base font-medium ${getLinkClass(
                  "demo"
                )}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Demo
              </Link>
              <Link
                href="/contact"
                className={`block px-3 py-2 rounded-md text-base font-medium ${getLinkClass(
                  "contact"
                )}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>

              <div className="pt-2">
                <Link href="/login">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Login
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
