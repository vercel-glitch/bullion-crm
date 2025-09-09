import Link from "next/link";

interface FooterProps {
  backgroundColor?: "default" | "amber";
}

export default function Footer({ backgroundColor = "default" }: FooterProps) {
  const bgClass =
    backgroundColor === "amber"
      ? "bg-yellow-500 border-t border-yellow-600"
      : "bg-background border-t";

  const textClass = backgroundColor === "amber" ? "text-white" : "";

  const subtitleClass =
    backgroundColor === "amber" ? "text-yellow-100" : "text-muted-foreground";

  const linkClass =
    backgroundColor === "amber"
      ? "text-yellow-100 hover:text-white transition-colors"
      : "text-muted-foreground hover:text-yellow-500 transition-colors";

  return (
    <footer className={`${bgClass} py-12 px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-7xl mx-auto text-center">
        <img
          src="/images/verifiedcrm-logo.png"
          alt="VerifiedCRM"
          className="h-6 mx-auto mb-4"
        />

        <p className={`mb-4 ${subtitleClass}`}>
          Empowering bullion businesses with smart CRM solutions.
        </p>
        <div className="flex justify-center space-x-6">
          <Link href="/solutions" className={linkClass}>
            Solutions
          </Link>
          <Link href="/demo" className={linkClass}>
            Demo
          </Link>
          <Link href="/contact" className={linkClass}>
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
