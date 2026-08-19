import ButtonLink from "@/components/button-link";
import Section from "@/components/section";
import SectionCatchPhrase from "@/components/section-catch-phrase";
import SectionTitle from "@/components/section-title";

const CompanySection = () => {
  return (
    <Section>
      <SectionTitle>Qui sommes nous ?</SectionTitle>
      <SectionCatchPhrase>
        Des surfaces préparées pour une protection durable
      </SectionCatchPhrase>
      <p className="text-muted-foreground mb-4">
        De la préparation du support à l&apos;application du revêtement, SIPA
        intervient sur des ouvrages industriels soumis à des conditions
        d&apos;exploitation exigeantes.
      </p>
      <ButtonLink href="/entreprise">Découvrir SIPA</ButtonLink>
    </Section>
  );
};

export default CompanySection;
