import ButtonLink from "@/components/button-link";
import Section from "@/components/section";
import SectionCatchPhrase from "@/components/section-catch-phrase";
import SectionDescription from "@/components/section-description";
import SectionTitle from "@/components/section-title";
import Image from "next/image";

type Sector = {
  image: string;
  name: string;
  title: string;
  description: string;
};

const SECTEURS: Sector[] = [
  {
    name: "Pétrole & hydrocarbures",
    image:
      "https://images.unsplash.com/photo-1621961458348-f013d219b50c?auto=format&fit=crop&w=1000&q=80",
    title: "Réservoirs et installations pétrolières",
    description:
      "Préparation et protection des réservoirs, tuyauteries et équipements soumis aux contraintes des hydrocarbures.",
  },

  {
    name: "Énergie",
    image:
      "https://images.unsplash.com/photo-1621961458348-f013d219b50c?auto=format&fit=crop&w=1000&q=80",
    title: "Installations énergétiques",
    description:
      "Travaux de préparation et de protection sur les équipements et structures des installations de production d'énergie.",
  },

  {
    name: "Maritime & naval",
    image:
      "https://images.unsplash.com/photo-1621961458348-f013d219b50c?auto=format&fit=crop&w=1000&q=80",
    title: "Ouvrages exposés au milieu marin",
    description:
      "Traitement de structures et équipements soumis à l'humidité, au sel et à la corrosion marine.",
  },

  {
    name: "Industrie & infrastructures",
    image:
      "https://images.unsplash.com/photo-1621961458348-f013d219b50c?auto=format&fit=crop&w=1000&q=80",
    title: "Structures et équipements industriels",
    description:
      "Préparation et protection de charpentes, structures métalliques et équipements exposés aux agressions environnementales.",
  },
];

type SectorCardProps = Sector;
const SectorCard = ({ name, image, title, description }: SectorCardProps) => {
  return (
    <div className="md:odd:text-right md:even:text-left text-center group  my-9 md:my-12">
      <SectionTitle>{name}</SectionTitle>
      <div className="flex flex-col md:flex-row md:group-odd:flex-row-reverse gap-3 md:gap-9 items-center ">
        <Image
          src={image}
          alt={title + "image"}
          width={512}
          height={512}
          sizes="512"
          className="rounded shadow-sm border flex-2"
        />
        <div className="flex-1">
          <h3 className="font-bold font-heading text-lg mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  );
};

const SectorsSection = () => {
  return (
    <Section>
      <SectionTitle>NOS SECTEURS D&apos;INTERVENTION</SectionTitle>
      <SectionCatchPhrase>
        Des services pour l&apos;industrie, l&apos;énergie et le maritime
      </SectionCatchPhrase>
      <SectionDescription>
        Réservoirs, installations énergétiques, structures métalliques et
        ouvrages navals : SIPA intervient sur des équipements exposés à la
        corrosion et aux conditions environnementales sévères.
      </SectionDescription>
      <div className="flex flex-col">
        {SECTEURS.map((secteur, index) => (
          <SectorCard key={index} {...secteur} />
        ))}
        <ButtonLink href="/secteurs">Découvrir tous nos secteurs</ButtonLink>
      </div>
    </Section>
  );
};

export default SectorsSection;
