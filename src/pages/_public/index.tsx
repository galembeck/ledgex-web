import { createFileRoute } from "@tanstack/react-router";
import { IntroSection } from "./~components/-intro-section";

export const Route = createFileRoute("/_public/")({
  component: LandingPage,
});

function LandingPage() {
  return (
    <main>
      <IntroSection />
    </main>
  );
}
