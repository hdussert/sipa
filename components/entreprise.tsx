import ButtonLink from "@/components/button-link";
import Section from "@/components/section";
import SectionTitle from "@/components/section-title";
import { ArrowRight } from "lucide-react";

const Entreprise = () => {
  return (
    <Section>
      <SectionTitle>L&apos;entreprise</SectionTitle>
      <p>
        Fondée en 2018, la SIPA (Société Industrielle de Peinture Antillaise)
        est spécialisée dans la préparation de surfaces, la protection
        anticorrosion et les travaux industriels de peinture pour les secteurs
        de l&apos;industrie lourde, de l&apos;énergie, du pétrole, du stockage,
        des infrastructures portuaires et du maritime.
      </p>
      <ButtonLink href="/entreprise">
        Découvrir SIPA
        <ArrowRight />
      </ButtonLink>
    </Section>
  );
};

export default Entreprise;
