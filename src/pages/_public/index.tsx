import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_public/")({
  component: LandingPage,
});

function LandingPage() {
  return (
    <main>
      <h1>LedgeX</h1>
    </main>
  );
}
