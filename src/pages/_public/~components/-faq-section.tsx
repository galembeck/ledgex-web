import { useState } from "react";
import { AnimatedSection } from "@/components/animated-section";
import { SectionHeader } from "@/components/section-header";
import { Accordion } from "@/components/ui/accordion";
import { faqs } from "@/constants/_public/faq";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      className="bg-muted/30 py-14 md:py-28 dark:bg-secondary-dark"
      id="faq"
    >
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader keyword="FAQ" title="Questions & Answers" />

        <AnimatedSection className="mx-auto max-w-3xl space-y-2">
          {faqs.map((faq, i) => (
            <Accordion
              answer={faq.answer}
              isOpen={openIndex === i}
              key={faq.question}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              question={faq.question}
            />
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
