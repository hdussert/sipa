import ButtonLink from "@/components/button-link";
import Section from "@/components/section";
import SectionCatchPhrase from "@/components/section-catch-phrase";
import SectionDescription from "@/components/section-description";
import SectionTitle from "@/components/section-title";

const CompanySection = () => {
  return (
    <Section>
      <SectionTitle>Qui sommes nous ?</SectionTitle>
      <SectionCatchPhrase>
        Des surfaces préparées pour une protection durable
      </SectionCatchPhrase>
      <SectionDescription>
        De la préparation du support à l&apos;application du revêtement, SIPA
        intervient sur des ouvrages industriels soumis à des conditions
        d&apos;exploitation exigeantes.
      </SectionDescription>
      <ButtonLink href="/entreprise">Découvrir SIPA</ButtonLink>
    </Section>
  );
};

export default CompanySection;
