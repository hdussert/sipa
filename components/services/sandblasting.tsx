import Section from "@/components/section";
import SectionCatchPhrase from "@/components/section-catch-phrase";
import SectionDescription from "@/components/section-description";
import SectionTitle from "@/components/section-title";
import Image from "next/image";

const SandblastingSection = () => {
  return (
    <Section>
      <SectionTitle>PRÉPARATION DE SURFACES</SectionTitle>
      <SectionCatchPhrase>
        Une préparation précise pour une protection durable
      </SectionCatchPhrase>
      <SectionDescription>
        Le sablage permet de préparer les surfaces métalliques avant
        l&apos;application d&apos;un revêtement. SIPA réalise les opérations de
        décapage et de préparation nécessaires pour éliminer les anciens
        revêtements, la corrosion et les contaminants présents sur le support.
      </SectionDescription>
      <div className="flex flex-col md:flex-row gap-6 md:justify-center md:items-center mb-6">
        <div className="flex-2">
          <Image
            src="https://images.unsplash.com/photo-1621961458348-f013d219b50c?auto=format&fit=crop&w=1000&q=80"
            className="rounded"
            alt={""}
            width={500}
            height={500}
          />
        </div>

        <div className="flex-1">
          <SectionTitle>Equipements</SectionTitle>
          <SectionDescription>
            <ul>
              <li>Sableuses 200 litres</li>
              <li>Burineurs pneumatiques à aiguilles</li>
              <li>Systèmes de ventilation et d&apos;aspiration</li>
            </ul>
          </SectionDescription>
          <SectionTitle>Normes</SectionTitle>
          <SectionDescription className="md:mb-3">
            Le niveau de préparation est défini en fonction de l&apos;état du
            support, du système de revêtement prévu et des spécifications du
            chantier (ex: Sa 2, Sa 2½, Sa 3, ISO 8501).
          </SectionDescription>
        </div>
      </div>
    </Section>
  );
};

export default SandblastingSection;
