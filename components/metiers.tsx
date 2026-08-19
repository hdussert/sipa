import ButtonLink from "@/components/button-link";
import Section from "@/components/section";
import SectionTitle from "@/components/section-title";
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
    <div className="border rounded backdrop-blur-xs size-full text-center shrink-0 flex flex-col gap-6 px-2 py-8 items-center">
      <Icon size={72} className="inline" />
      <h3 className="font-bold flex items-center gap-2">{title}</h3>
      <p className="flex-1">{description}</p>
      <ButtonLink href={link}>
        En savoir plus
        <Plus />
      </ButtonLink>
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
