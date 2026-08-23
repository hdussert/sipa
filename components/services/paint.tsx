import Section from "@/components/section";
import SectionCatchPhrase from "@/components/section-catch-phrase";
import SectionDescription from "@/components/section-description";
import SectionTitle from "@/components/section-title";
import Image from "next/image";

const PaintSection = () => {
  return (
    <Section>
      <SectionTitle>APPLICATION DE REVÊTEMENTS</SectionTitle>
      <SectionCatchPhrase>
        Des revêtements adaptés aux contraintes de chaque ouvrage
      </SectionCatchPhrase>
      <div className="flex md:flex-row flex-col gap-6">
        <div className="flex flex-col gap-3 flex-1">
          <Image
            src="https://images.unsplash.com/photo-1621961458348-f013d219b50c?auto=format&fit=crop&w=1000&q=80"
            className="rounded"
            alt={""}
            width={500}
            height={500}
          />
          <Image
            src="https://images.unsplash.com/photo-1621961458348-f013d219b50c?auto=format&fit=crop&w=1000&q=80"
            className="rounded"
            alt={""}
            width={500}
            height={500}
          />
          <Image
            src="https://images.unsplash.com/photo-1621961458348-f013d219b50c?auto=format&fit=crop&w=1000&q=80"
            className="rounded"
            alt={""}
            width={500}
            height={500}
          />
        </div>

        <div className="flex-2">
          <SectionDescription>
            Après la préparation du support, SIPA applique les systèmes de
            peinture et de protection adaptés aux caractéristiques de
            l&apos;ouvrage et à son environnement d&apos;exploitation.
          </SectionDescription>

          <div className="flex flex-col">
            <SectionTitle>Equipement</SectionTitle>
            <SectionDescription>
              <ul>
                <li>Sableuses 200L ELCOMETER</li>
                <li>Burineurs pneumatiques à aiguilles</li>
                <li>Systèmes de ventilation / aspiration VENTURY</li>
              </ul>
            </SectionDescription>
            <SectionTitle>Controles</SectionTitle>
            <SectionDescription>
              Les paramètres d&apos;application et les conditions de chantier
              sont contrôlés afin de respecter les exigences du système de
              revêtement utilisé.
              <p>
                Contrôle des conditions climatiques · épaisseurs · adhérence ·
                aspect
              </p>
            </SectionDescription>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default PaintSection;
