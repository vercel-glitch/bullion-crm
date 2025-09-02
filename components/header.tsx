import { Button } from "@/components/ui/button";
import Link from "next/link";

interface HeaderProps {
  currentPage?: "home" | "solutions" | "demo" | "contact";
}

export default function Header({ currentPage = "home" }: HeaderProps) {
  const getLinkClass = (page: string) => {
    const baseClass = "hover:text-amber-500 transition-colors";
    if (currentPage === page) {
      return `text-foreground ${baseClass}`;
    }
    return `text-muted-foreground ${baseClass}`;
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
            <Link href="https://priority.verifiedcrm.com/login">
              <Button variant="outline" size="sm">
                Login
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
