import Section from "@/components/section";
import SectionCatchPhrase from "@/components/section-catch-phrase";
import SectionDescription from "@/components/section-description";
import SectionTitle from "@/components/section-title";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const SandingSection = () => {
  return (
    <Section>
      <SectionTitle>PRÉPARATION DE SURFACES</SectionTitle>
      <SectionCatchPhrase>
        Une préparation précise pour une protection durable
      </SectionCatchPhrase>
      <div className="flex flex-col md:flex-row gap-6">
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
            Le sablage permet de préparer les surfaces métalliques avant
            l&apos;application d&apos;un revêtement. SIPA réalise les opérations
            de décapage et de préparation nécessaires pour éliminer les anciens
            revêtements, la corrosion et les contaminants présents sur le
            support.
          </SectionDescription>

          <SectionTitle>Equipements</SectionTitle>
          <SectionDescription>
            <ul>
              <li>Sableuses 200 litres ELCOMETER</li>
              <li>Burineurs pneumatiques à aiguilles</li>
              <li>Systèmes de ventilation et d&apos;aspiration VENTURY</li>
            </ul>
          </SectionDescription>
          <SectionTitle>Normes</SectionTitle>
          <SectionDescription>
            Préparation du support Le niveau de préparation est adapté au
            système de protection prévu et aux spécifications du chantier.
            <p>Sa 2 · Sa 2½ · Sa 3 · ISO 8501</p>
          </SectionDescription>
          <div className="flex gap-2 flex-wrap">
            <Badge variant="primary">Structures métalliques</Badge>
            <Badge variant="primary">Réservoirs</Badge>
            <Badge variant="primary">Tuyauteries</Badge>
            <Badge variant="primary">Équipements industriels</Badge>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default SandingSection;
