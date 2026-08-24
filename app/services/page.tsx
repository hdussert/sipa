import ButtonCTA from "@/components/button-cta";
import CTASection from "@/components/home/cta";
import Section from "@/components/section";
import SectionCatchPhrase from "@/components/section-catch-phrase";
import SectionDescription from "@/components/section-description";
import SectionTitle from "@/components/section-title";
import AntiCorrosionSection from "@/components/services/anticorrosion";
import ApplicationsSection from "@/components/services/applications";
import CoatingSection from "@/components/services/coatings";
import SandblastingSection from "@/components/services/sandblasting";
import WaterblastingSection from "@/components/services/waterblasting";
export default function Services() {
  return (
    <div className="flex flex-col">
      <div
        className="h-128 border-b-8 border-primary"
        style={{
          backgroundImage: 'url("/hero.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
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
      <ApplicationsSection />
      <SandblastingSection />
      <WaterblastingSection />
      <CoatingSection />
      <AntiCorrosionSection />
      <CTASection />
    </div>
  );
}
