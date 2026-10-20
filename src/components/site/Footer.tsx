import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-hairline bg-background">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-5 py-8 sm:flex-row sm:items-center lg:px-8">
        <p className="label-tech text-muted-foreground">
          © 2026 AUXIDE AI. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <Link
            to="/privacy"
            className="label-tech text-muted-foreground transition-colors duration-150 hover:text-foreground"
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms"
            className="label-tech text-muted-foreground transition-colors duration-150 hover:text-foreground"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
