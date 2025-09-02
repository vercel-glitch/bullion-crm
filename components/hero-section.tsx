import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ReactNode } from "react";

interface HeroSectionProps {
  title: ReactNode;
  subtitle: string;
  primaryButton?: {
    text: string;
    href: string;
    variant?: "primary" | "secondary";
  };
  secondaryButton?: {
    text: string;
    href: string;
  };
}

export default function HeroSection({ 
  title, 
  subtitle, 
  primaryButton, 
  secondaryButton 
}: HeroSectionProps) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
          {title}
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
          {subtitle}
        </p>
        {(primaryButton || secondaryButton) && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {primaryButton && (
              <Link href={primaryButton.href}>
                <Button
                  size="lg"
                  className={
                    primaryButton.variant === "secondary"
                      ? "bg-white text-amber-600 hover:bg-amber-50"
                      : "bg-amber-500 hover:bg-amber-600 text-white"
                  }
                >
                  {primaryButton.text}
                </Button>
              </Link>
            )}
            {secondaryButton && (
              <Link href={secondaryButton.href}>
                <Button variant="outline" size="lg">
                  {secondaryButton.text}
                </Button>
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
