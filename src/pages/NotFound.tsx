import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Header } from "@/components/site/Header";
import { Button } from "@/components/ui/button";
import { useDocumentTitle } from "@/hooks/use-document-title";

const NotFound = () => {
  const location = useLocation();
  useDocumentTitle("Page not found");

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="flex min-h-[calc(100vh-80px)] items-center justify-center px-6 pt-32 pb-20">
        <div className="max-w-xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">404</p>
          <h1 className="heading-display mt-4 text-4xl md:text-5xl">Page not found</h1>
          <p className="mt-5 text-muted-foreground md:text-lg">
            The page you are looking for has moved or does not exist.
          </p>
          <div className="mt-8">
            <Button variant="cta" size="lg" asChild>
              <Link to="/">Go to homepage</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
