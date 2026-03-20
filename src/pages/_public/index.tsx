import { createFileRoute } from "@tanstack/react-router";
import { CallToActionSection } from "./~components/-call-to-action-section";
import { FAQSection } from "./~components/-faq-section";
import { FeaturesSection } from "./~components/-features-section";
import { HowItWorksSection } from "./~components/-how-it-works-section";
import { IntroSection } from "./~components/-intro-section";
import { LogoCloud } from "./~components/-logo-cloud";
import { PricingSection } from "./~components/-pricing-section";
import { StatsSection } from "./~components/-stats-section";
import { TestimonialsSection } from "./~components/-testimonials-section";

export const Route = createFileRoute("/_public/")({
  component: LandingPage,
  head: () => ({
    meta: [{ title: "LedgeX | Financial Intelligence Powered by AI" }],
  }),
});

function LandingPage() {
  return (
    <main>
      <IntroSection />
      <LogoCloud />
      <FeaturesSection />
      <HowItWorksSection />
      <StatsSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <CallToActionSection />
    </main>
  );
}
