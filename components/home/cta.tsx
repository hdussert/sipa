import ButtonCTA from "@/components/button-cta";
import Section from "@/components/section";
import SectionCatchPhrase from "@/components/section-catch-phrase";
import SectionDescription from "@/components/section-description";
import SectionTitle from "@/components/section-title";

const CTASection = () => {
  return (
    <Section className="flex flex-col justify-center items-center text-center">
      <SectionTitle>Votre projet</SectionTitle>
      <SectionCatchPhrase>
        Un projet industriel ? Parlons-en.
      </SectionCatchPhrase>
      <SectionDescription>
        Préparation de surfaces, hydrodécapage, UHP, peinture industrielle ou
        protection anticorrosion : nos équipes sont à votre écoute.
      </SectionDescription>
      <ButtonCTA />
    </Section>
  );
};

export default CTASection;
