import ButtonLink from "@/components/button-link";
import Section from "@/components/section";
import SectionCatchPhrase from "@/components/section-catch-phrase";
import SectionDescription from "@/components/section-description";
import SectionTitle from "@/components/section-title";
import Image from "next/image";

type Sector = {
  image: string;
  title: string;
  description: string;
  link: string;
};

const SECTEURS: Sector[] = [
  {
    image:
      "https://images.unsplash.com/photo-1621961458348-f013d219b50c?auto=format&fit=crop&w=1000&q=80",
    title: "Industrie",
    description:
      "Travaux de préparation et de protection des équipements et structures industriels.",
    link: "",
  },

  {
    image:
      "https://images.unsplash.com/photo-1621961458348-f013d219b50c?auto=format&fit=crop&w=1000&q=80",
    title: "Pétrole & hydrocarbures",
    description:
      "Interventions sur réservoirs, bacs, tuyauteries et installations liées au stockage et à la distribution.",
    link: "",
  },

  {
    image:
      "https://images.unsplash.com/photo-1621961458348-f013d219b50c?auto=format&fit=crop&w=1000&q=80",
    title: "Maritime & naval",
    description:
      "Préparation, traitement et protection des structures et équipements navals.",
    link: "",
  },

  {
    image:
      "https://images.unsplash.com/photo-1621961458348-f013d219b50c?auto=format&fit=crop&w=1000&q=80",
    title: "Infrastructures",
    description:
      "Traitement des structures métalliques, ouvrages et équipements exposés aux conditions climatiques ou corrosives.",
    link: "",
  },
];

type SectorCardProps = Sector;
const SectorCard = ({ image, title, description, link }: SectorCardProps) => {
  return (
    <div className="flex flex-col md:flex-row md:odd:flex-row-reverse gap-8 items-center md:odd:text-right">
      <Image
        src={image}
        alt={title + "image"}
        width={512}
        height={512}
        sizes="512"
        className="rounded shadow-sm border"
      />
      <div>
        <div>
          <h3 className="font-bold font-heading text-lg">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  );
};

const SectorsSection = () => {
  return (
    <Section>
      <SectionTitle>Nos secteurs</SectionTitle>
      <SectionCatchPhrase>
        Une expertise adaptée aux environnements les plus exigeants
      </SectionCatchPhrase>
      <SectionDescription>
        Industrie, énergie, pétrole, maritime : SIPA intervient au cœur des
        secteurs où la performance et la fiabilité sont essentielles.
      </SectionDescription>
      <div className="flex flex-col gap-12">
        {SECTEURS.map((secteur, index) => (
          <SectorCard key={index} {...secteur} />
        ))}
        <ButtonLink href="/secteur">Découvrir tous nos secteurs</ButtonLink>
      </div>
    </Section>
  );
};

export default SectorsSection;
