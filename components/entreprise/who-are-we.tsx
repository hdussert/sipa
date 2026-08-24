import Section from "@/components/section";
import SectionCatchPhrase from "@/components/section-catch-phrase";
import SectionDescription from "@/components/section-description";
import SectionTitle from "@/components/section-title";
import Image from "next/image";

const WhoAreWeSection = () => {
  return (
    <Section>
      <SectionTitle>Qui sommes-nous ?</SectionTitle>
      <SectionCatchPhrase>Découvrez SIPA</SectionCatchPhrase>
      <SectionDescription>
        Fondée en avril 2018 en Guadeloupe, puis implantée en Martinique en juin
        2019, SIPA est une entreprise spécialisée dans le traitement de surfaces
        et l&apos;application de revêtements industriels dans la région
        Antilles-Guyane. Membre du groupe LBG (Laurent Brousseau Groupe), SIPA
        met son savoir-faire au service de projets exigeants dans des secteurs
        variés. Grâce à notre maîtrise des normes techniques et
        environnementales, nous répondons aux spécifications les plus strictes
        des maîtres d&apos;ouvrage publics et privés.
      </SectionDescription>

      <Image
        alt="Sipa-photo"
        width={2000}
        height={2000}
        src="https://images.unsplash.com/photo-1621961458348-f013d219b50c?auto=format&fit=crop&w=1000&q=80"
        className="rounded"
      />
    </Section>
  );
};

export default WhoAreWeSection;
