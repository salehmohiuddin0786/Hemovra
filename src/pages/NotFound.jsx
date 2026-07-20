import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button.jsx";
import { Helmet } from "react-helmet-async";

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page not found — Hemovra</title>
      </Helmet>
      <section className="min-h-[70vh] grid place-items-center px-4">
        <div className="text-center">
          <p className="text-8xl font-bold text-gradient">404</p>
          <h1 className="mt-2 text-2xl font-semibold">Page not found</h1>
          <p className="mt-2 text-muted-foreground">
            The page you're looking for doesn't exist.
          </p>
          <Button as={Link} to="/" className="mt-6">
            Back to home
          </Button>
        </div>
      </section>
    </>
  );
}
