import ButtonLink from "@/components/button-link";
import Section from "@/components/section";
import SectionCatchPhrase from "@/components/section-catch-phrase";
import SectionDescription from "@/components/section-description";
import SectionTitle from "@/components/section-title";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Bot,
  CircleGauge,
  Droplet,
  LucideIcon,
  PaintBucket,
  ShieldCheck,
  Wind,
} from "lucide-react";
import Image from "next/image";

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

type ExpertiseCardProps = Metier;

const ExpertiseCard = ({
  icon: Icon,
  title,
  description,
  link = "",
}: ExpertiseCardProps) => {
  return (
    <Card className="text-center">
      <Image
        src="https://images.unsplash.com/photo-1621961458348-f013d219b50c?auto=format&fit=crop&w=1000&q=80"
        alt={title + "image"}
        width={512}
        height={512}
        sizes="512"
      />

      <CardHeader className="-mt-14">
        <Icon
          size={64}
          className="inline bg-primary/15 backdrop-brightness-200 rounded-xl p-3 mx-auto text-primary mb-4"
        />
        <CardTitle className="font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter className="justify-center">
        <ButtonLink href={link}>En savoir plus</ButtonLink>
      </CardFooter>
    </Card>
  );
};

const ExpertiseSection = () => {
  return (
    <Section>
      <SectionTitle className="text-center">Nos services</SectionTitle>
      <SectionCatchPhrase className="text-center">
        Des solutions techniques adaptées
      </SectionCatchPhrase>
      <SectionDescription>
        De la préparation des surfaces au traitement anticorrosion, nous
        maîtrisons chaque étape de vos projets.
      </SectionDescription>
      <div className="gap-4 grid md:grid-cols-3">
        {METIERS.map((metier, index) => (
          <ExpertiseCard key={index} {...metier} />
        ))}
      </div>
    </Section>
  );
};

export default ExpertiseSection;
