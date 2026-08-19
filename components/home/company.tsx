import ButtonLink from "@/components/button-link";
import Section from "@/components/section";
import SectionCatchPhrase from "@/components/section-catch-phrase";
import SectionTitle from "@/components/section-title";

const CompanySection = () => {
  return (
    <Section>
      <SectionTitle>L&apos;entreprise</SectionTitle>
      <SectionCatchPhrase>
        Protéger aujourd’hui.
        <br />
        Préserver pour demain.
      </SectionCatchPhrase>
      <p className="text-muted-foreground mb-4">
        SIPA intervient dans la préparation des surfaces, le traitement
        anticorrosion et la peinture industrielle pour accompagner ses clients
        dans la protection et la maintenance de leurs installations. Notre
        savoir-faire repose sur des équipes qualifiées, des moyens techniques
        performants et une connaissance des environnements industriels les plus
        exigeants.
      </p>
      <ButtonLink href="/entreprise">Découvrir SIPA</ButtonLink>
    </Section>
  );
};

export default CompanySection;
