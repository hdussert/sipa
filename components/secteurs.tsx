import ButtonLink from "@/components/button-link";
import Section from "@/components/section";
import SectionTitle from "@/components/section-title";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

type Secteur = {
  image: string;
  title: string;
  description: string;
  link: string;
};

const SECTEURS: Secteur[] = [
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

type SecteurCardProps = Secteur;
const SecteurCard = ({ image, title, description, link }: SecteurCardProps) => {
  return (
    <div className="flex flex-col md:flex-row md:odd:flex-row-reverse gap-8 items-center md:odd:text-right">
      <Image
        src={image}
        alt={title + "image"}
        width={512}
        height={512}
        sizes="512"
        className="rounded"
      />
      <div>
        <div>
          <h3 className="font-bold">{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

const Secteurs = () => {
  return (
    <Section>
      <SectionTitle>Nos secteurs d&apos;intervention</SectionTitle>
      <div className="flex flex-col gap-12">
        {SECTEURS.map((secteur, index) => (
          <SecteurCard key={index} {...secteur} />
        ))}
        <ButtonLink href="/secteur">
          Découvrir tous nos secteurs
          <ArrowRight />
        </ButtonLink>
      </div>
    </Section>
  );
};

export default Secteurs;
