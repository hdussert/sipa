import Section from "@/components/section";
import SectionTitle from "@/components/section-title";
import { buttonVariants } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
    <div className="flex odd:flex-row-reverse gap-8 items-center text-center">
      <Image
        src={image}
        alt={title + "image"}
        width={512}
        height={512}
        sizes="512"
      />
      <div>
        <div>
          <h3 className="font-bold">{title}</h3>
          <p>{description}</p>
        </div>
        <Link
          href={link}
          className={buttonVariants({ variant: "link", size: "xs" })}
        >
          En savoir plus <Plus />
        </Link>
      </div>
    </div>
  );
};

const Secteurs = () => {
  return (
    <Section>
      <SectionTitle>Nos secteurs d&apos;intervention</SectionTitle>
      <div className="flex flex-col gap-8">
        {SECTEURS.map((secteur, index) => (
          <SecteurCard key={index} {...secteur} />
        ))}
      </div>
    </Section>
  );
};

export default Secteurs;
