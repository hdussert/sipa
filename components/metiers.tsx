import Section from "@/components/section";
import SectionTitle from "@/components/section-title";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Bot,
  CircleGauge,
  Droplet,
  LucideIcon,
  PaintBucket,
  Plus,
  ShieldCheck,
  Wind,
} from "lucide-react";
import Link from "next/link";

type Metier = {
  icon: LucideIcon;
  title: string;
  description: string;
  link?: string;
};

const METIERS: Metier[] = [
  {
    icon: Wind,
    title: "Sablage industriel",
    description:
      "Préparation des surfaces métalliques avant application des systèmes de protection.",
  },
  {
    icon: Droplet,
    title: "Hydrodécapage",
    description:
      "Décapage haute pression pour la préparation et la rénovation des surfaces industrielles.",
  },
  {
    icon: CircleGauge,
    title: "Hydrodécapage UHP",
    description:
      "Technologies très haute pression destinées aux opérations de décapage les plus exigeantes.",
  },
  {
    icon: Bot,
    title: "UHP robotisé",
    description:
      "Solutions robotisées permettant d'améliorer la productivité et de réduire l'exposition des opérateurs.",
  },
  {
    icon: PaintBucket,
    title: "Peinture industrielle",
    description:
      "Application de systèmes de protection adaptés aux contraintes de chaque ouvrage.",
  },
  {
    icon: ShieldCheck,
    title: "Traitement anticorrosion",
    description:
      "Protection durable des structures et équipements métalliques contre la corrosion.",
  },
];

type MetierCardProps = Metier;

const MetierCard = ({
  icon: Icon,
  title,
  description,
  link = "",
}: MetierCardProps) => {
  return (
    <div className=" text-center border shrink-0 flex flex-col gap-6 px-4 py-4 rounded items-center">
      <Icon size={72} />
      <div>
        <h3 className="font-bold">{title}</h3>
        <p>{description}</p>
        <Link
          className={cn(
            buttonVariants({ variant: "link", size: "xs" }),
            "mt-2 px-0",
          )}
          href={link}
        >
          En savoir plus
          <Plus />
        </Link>
      </div>
    </div>
  );
};

const Metiers = () => {
  return (
    <Section>
      <SectionTitle>Nos métiers</SectionTitle>
      <div className="gap-4 grid md:grid-cols-3">
        {METIERS.map((metier, index) => (
          <MetierCard key={index} {...metier} />
        ))}
      </div>
    </Section>
  );
};

export default Metiers;
