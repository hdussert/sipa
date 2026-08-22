import Section from "@/components/section";
import SectionCatchPhrase from "@/components/section-catch-phrase";
import SectionDescription from "@/components/section-description";
import SectionTitle from "@/components/section-title";
import Image from "next/image";

export default function Company() {
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
        <SectionTitle className="mt-8">Découvrir la SIPA</SectionTitle>
        <SectionCatchPhrase>Découvrir la SIPA</SectionCatchPhrase>
        <SectionDescription>
          Fondée en avril 2018 en Guadeloupe, puis implantée en Martinique en
          juin 2019, SIPA est une entreprise spécialisée dans le traitement de
          surfaces et l&apos;application de revêtements industriels dans la
          région Antilles Guyane. Membre du groupe LBG (Laurent Brousseau
          Groupe), SIPA met son savoir-faire au service de projets exigeants
          dans des secteurs variés. Grâce à notre maîtrise des normes techniques
          et environnementales, nous répondons aux spécifications les plus
          strictes des maîtres d&apos;ouvrage publics et privés.
        </SectionDescription>

        <Image
          alt="Sipa-photo"
          width={2000}
          height={2000}
          src="https://images.unsplash.com/photo-1621961458348-f013d219b50c?auto=format&fit=crop&w=1000&q=80"
          className="rounded"
        />
      </Section>
      <Section>
        <SectionTitle className="mt-8">Notre engagement</SectionTitle>
        <SectionCatchPhrase>Découvrir la SIPA</SectionCatchPhrase>
        <SectionDescription>
          La société SIPA a été créée le 18 Avril 2018 en Guadeloupe et
          s&apos;est implanté le 06 Juin 2019 en Martinique. Elle est
          spécialisée dans le traitement de surfaces et l&apos;application de
          revêtements industriels aux Antilles Guyane. Membre du groupe LBG
          (Laurent Brousseau Groupe), reconnu pour ses travaux dans la caraïbes,
          SIPA répond à toutes les exigences et spécifications particulières des
          maîtres d&apos;ouvrage dans de nombreux domaines.
        </SectionDescription>
      </Section>
    </div>
  );
}
