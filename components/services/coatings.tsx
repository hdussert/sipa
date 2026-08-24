import Section from "@/components/section";
import SectionCatchPhrase from "@/components/section-catch-phrase";
import SectionDescription from "@/components/section-description";
import SectionTitle from "@/components/section-title";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const CoatingSection = () => {
  return (
    <Section>
      <SectionTitle>APPLICATION DE REVÊTEMENTS</SectionTitle>
      <SectionCatchPhrase>
        Des revêtements adaptés aux contraintes de chaque ouvrage
      </SectionCatchPhrase>

      <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-6">
        <div className="flex-1">
          <Image
            src="https://images.unsplash.com/photo-1621961458348-f013d219b50c?auto=format&fit=crop&w=1000&q=80"
            className="rounded"
            alt={""}
            width={500}
            height={500}
          />
        </div>
        <SectionDescription className="flex-2 md:mb-0">
          Après la préparation du support, SIPA applique les systèmes de
          peinture et de protection adaptés aux caractéristiques de
          l&apos;ouvrage et à son environnement d&apos;exploitation.
        </SectionDescription>
      </div>

      <div className="flex flex-col md:flex-row gap-6 md:justify-center md:items-center mb-6">
        <div className="flex-1">
          <Image
            src="https://images.unsplash.com/photo-1621961458348-f013d219b50c?auto=format&fit=crop&w=1000&q=80"
            className="rounded"
            alt={""}
            width={500}
            height={500}
          />
        </div>

        <div className="flex-2">
          <SectionTitle>Equipements</SectionTitle>
          <SectionDescription className="md:mb-0">
            <ul>
              <li>GRACO 70:1 Pompe Airless pneumatique</li>
              <li>WAGNER 75:1 Pompe Airless</li>
              <li>AIRLESS 210 bar Équipement autonome</li>
            </ul>
          </SectionDescription>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-6">
        <div className="flex-1">
          <Image
            src="https://images.unsplash.com/photo-1621961458348-f013d219b50c?auto=format&fit=crop&w=1000&q=80"
            className="rounded"
            alt={""}
            width={500}
            height={500}
          />
        </div>
        <div className="flex-2">
          <SectionTitle>Controles</SectionTitle>
          <SectionDescription className="md:mb-3">
            Les paramètres d&apos;application et les conditions de chantier sont
            contrôlés afin de respecter les exigences du système de revêtement
            utilisé.
          </SectionDescription>
          <div className="flex gap-2 flex-wrap">
            <Badge variant="primary">Contrôle des épaisseurs</Badge>
            <Badge variant="primary">Contrôle de l&apos;adhérence</Badge>
            <Badge variant="primary">Contrôle visuel de l&apos;aspect</Badge>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default CoatingSection;
