import { Link } from "react-router-dom";
import { CtaButton } from "@/components/common/CtaButton";
import { useDocumentTitle } from "@/lib/useDocumentTitle";

export function NotFoundPage() {
  useDocumentTitle("Page Not Found");

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center bg-surface px-4 text-center">
      <p className="font-mono text-sm font-semibold text-primary">404</p>
      <h1 className="mt-3 text-3xl font-bold text-text-primary md:text-4xl">Page Not Found</h1>
      <p className="mx-auto mt-4 max-w-md text-text-secondary">
        The page you're looking for doesn't exist or may have moved.
      </p>
      <CtaButton component={Link} to="/" className="mt-6">
        Back to Home
      </CtaButton>
    </div>
  );
}
