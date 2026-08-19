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
      "Préparation des surfaces métalliques par projection d'abrasif avant l'application d'un système de protection.",
  },
  {
    icon: Droplet,
    title: "Hydrodécapage & UHP",
    description:
      "Décapage à haute et très haute pression pour retirer les revêtements dégradés et préparer les surfaces.",
  },
  {
    icon: PaintBucket,
    title: "Peinture industrielle",
    description:
      "Application de revêtements adaptés aux contraintes mécaniques, chimiques et environnementales des ouvrages.",
  },
  {
    icon: ShieldCheck,
    title: "Protection anticorrosion",
    description:
      "Mise en œuvre de systèmes de protection destinés à limiter la corrosion et à prolonger la durée de vie des structures.",
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
        <CardTitle className="font-bold font-sans">{title}</CardTitle>
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
        Des solutions adaptées à chaque étape de vos travaux
      </SectionCatchPhrase>
      <SectionDescription>
        Sablage industriel, hydrodécapage, UHP, peinture industrielle et
        traitement anticorrosion : SIPA intervient de la préparation des
        surfaces jusqu&apos;à leur protection.
      </SectionDescription>
      <div className="gap-4 grid sm:grid-cols-2">
        {METIERS.map((metier, index) => (
          <ExpertiseCard key={index} {...metier} />
        ))}
      </div>
    </Section>
  );
};

export default ExpertiseSection;
