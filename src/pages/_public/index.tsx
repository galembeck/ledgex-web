import { createFileRoute } from "@tanstack/react-router";
import { FeaturesSection } from "./~components/-features-section";
import { HowItWorksSection } from "./~components/-how-it-works-section";
import { IntroSection } from "./~components/-intro-section";
import { LogoCloud } from "./~components/-logo-cloud";

export const Route = createFileRoute("/_public/")({
  component: LandingPage,
});

function LandingPage() {
  return (
    <main>
      <IntroSection />
      <LogoCloud />
      <FeaturesSection />
      <HowItWorksSection />
    </main>
  );
}
