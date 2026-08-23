import ButtonCTA from "@/components/button-cta";
import CTASection from "@/components/home/cta";
import Section from "@/components/section";
import SectionCatchPhrase from "@/components/section-catch-phrase";
import SectionDescription from "@/components/section-description";
import SectionTitle from "@/components/section-title";
import HighPressureSection from "@/components/services/high-pressure";
import PaintSection from "@/components/services/paint";
import ProcessSection from "@/components/services/process";
import SandingSection from "@/components/services/sanding";
import Image from "next/image";
export default function Services() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Image
        alt="Sipa-photo"
        width={2000}
        height={2000}
        src="https://images.unsplash.com/photo-1621961458348-f013d219b50c?auto=format&fit=crop&w=1000&q=80"
        className="border-b-24 border-primary"
      />
      <Section>
        <SectionTitle>NOS SERVICES</SectionTitle>
        <SectionCatchPhrase>
          Préparer, décaper et protéger les surfaces industrielles
        </SectionCatchPhrase>
        <SectionDescription>
          SIPA intervient dans la préparation des surfaces, le décapage haute et
          ultra-haute pression et l&apos;application de revêtements industriels,
          avec des moyens adaptés aux contraintes de chaque chantier.
        </SectionDescription>
        <ButtonCTA />
      </Section>

      <ProcessSection />
      <SandingSection />
      <HighPressureSection />
      <PaintSection />

      <CTASection />
    </div>
  );
}
