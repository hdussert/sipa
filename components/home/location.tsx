import Section from "@/components/section";
import SectionCatchPhrase from "@/components/section-catch-phrase";
import SectionDescription from "@/components/section-description";
import SectionTitle from "@/components/section-title";

const LocationSection = () => {
  return (
    <Section>
      <SectionTitle>NOTRE IMPLANTATION</SectionTitle>
      <SectionCatchPhrase>
        Au plus près des enjeux industriels des Antilles-Guyane
      </SectionCatchPhrase>
      <SectionDescription>
        Une présence régionale permettant à SIPA d&apos;accompagner ses clients
        au plus près de leurs installations et de leurs projets.
      </SectionDescription>
    </Section>
  );
};

export default LocationSection;
