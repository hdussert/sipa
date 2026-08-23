import Section from "@/components/section";
import SectionCatchPhrase from "@/components/section-catch-phrase";
import SectionDescription from "@/components/section-description";
import SectionTitle from "@/components/section-title";
import { ArrowDown, ArrowRight } from "lucide-react";
import Image from "next/image";

const AntiCorrosionSection = () => {
  return (
    <Section>
      <SectionTitle>PROTECTION ANTICORROSION</SectionTitle>
      <SectionCatchPhrase>
        Prolonger la durée de vie des structures métalliques
      </SectionCatchPhrase>

      <SectionDescription>
        La protection anticorrosion permet de limiter la dégradation des
        structures métalliques exposées à l&apos;humidité, au milieu marin, aux
        hydrocarbures ou aux environnements industriels. SIPA intervient sur la
        préparation des supports et la mise en œuvre des systèmes de protection
        adaptés aux conditions d&apos;exploitation de chaque ouvrage.
      </SectionDescription>
      <div className="flex flex-col md:flex-row gap-3 items-center justify-center">
        <div>
          <Image
            src="https://images.unsplash.com/photo-1621961458348-f013d219b50c?auto=format&fit=crop&w=1000&q=80"
            className="rounded"
            alt={""}
            width={500}
            height={500}
          />
        </div>
        <ArrowRight className="hidden md:inline" />
        <ArrowDown className="md:hidden" />
        <div>
          <Image
            src="https://images.unsplash.com/photo-1621961458348-f013d219b50c?auto=format&fit=crop&w=1000&q=80"
            className="rounded"
            alt={""}
            width={500}
            height={500}
          />
        </div>
      </div>
    </Section>
  );
};

export default AntiCorrosionSection;
