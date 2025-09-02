import { ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";

interface PageLayoutProps {
  children: ReactNode;
  currentPage?: "home" | "solutions" | "demo" | "contact";
  footerVariant?: "default" | "amber";
}

export default function PageLayout({
  children,
  currentPage = "home",
  footerVariant = "default",
}: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Header currentPage={currentPage} />
      {children}
      <Footer backgroundColor={footerVariant} />
    </div>
  );
}
