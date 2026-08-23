"use client";

import Section from "@/components/section";
import SectionCatchPhrase from "@/components/section-catch-phrase";
import SectionDescription from "@/components/section-description";
import SectionTitle from "@/components/section-title";
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Bubbles, ListChecks, Paintbrush, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const PROCESS_STEPS = [
  {
    name: "1. Préparer",
    description: "Diagnostic, décapage, nettoyage",
    icon: Bubbles,
    image:
      "https://images.unsplash.com/photo-1621961458348-f013d219b50c?auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "2. Appliquer",
    description:
      "Application des couches de primaire, de protection et de finition",
    icon: Paintbrush,
    image: "/hero.jpg",
  },
  {
    name: "3. Contrôler",
    description: "Contrôles de qualité et de conformité",
    icon: ListChecks,
    image: "/SIPA-logo.png",
  },
  {
    name: "4. Valider",
    description: "Votre structure est protégée",
    icon: ShieldCheck,
    image:
      "https://images.unsplash.com/photo-1621961458348-f013d219b50c?auto=format&fit=crop&w=1000&q=80",
  },
];

const ProcessSection = () => {
  const [selectedStep, setSelectedStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () =>
        setSelectedStep(
          (selectedStep) => (selectedStep + 1) % PROCESS_STEPS.length,
        ),
      5000,
    );
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <Section>
      <SectionTitle>TRAITEMENT ANTICORROSION</SectionTitle>
      <SectionCatchPhrase>
        Prolonger la durée de vie des structures métalliques
      </SectionCatchPhrase>
      <SectionDescription>
        La corrosion représente un enjeu majeur pour les structures métalliques
        exposées à l&apos;humidité, au milieu marin, aux hydrocarbures ou aux
        environnements industriels. SIPA met en œuvre des systèmes de
        préparation et de revêtement destinés à protéger durablement les
        ouvrages.
      </SectionDescription>

      <div className="flex md:flex-row flex-col gap-3 md:gap-9">
        <div className="flex flex-1 flex-col gap-3 items-center w-full min-w-xs mx-auto">
          {PROCESS_STEPS.map((step, index) => (
            <Card
              key={index}
              className={cn(
                "w-full border transition duration-300",
                selectedStep == index
                  ? "scale-105 border-primary ring-4 ring-primary-foreground"
                  : "",
              )}
            >
              <CardHeader>
                <CardTitle>{step.name}</CardTitle>
                <CardDescription>{step.description}</CardDescription>
                <CardAction>
                  <step.icon
                    size={32}
                    className="bg-primary-foreground shadow rounded-lg p-1 mx-auto text-primary"
                  />
                </CardAction>
              </CardHeader>
            </Card>
          ))}
        </div>
        <Image
          src={PROCESS_STEPS[selectedStep].image}
          className="flex-1 rounded object-cover md:w-1/2"
          alt={""}
          width={2000}
          height={1500}
        />
      </div>
    </Section>
  );
};

export default ProcessSection;
