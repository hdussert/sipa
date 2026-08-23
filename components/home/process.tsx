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
import { Bubbles, Paintbrush, Search, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const PROCESS_STEPS = [
  {
    name: "1. Diagnostic",
    description: "Analyse du support et des contraintes du chantier",
    icon: Search,
    image:
      "https://images.unsplash.com/photo-1621961458348-f013d219b50c?auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "2. Préparation",
    description: "Sablage, hydrodécapage et préparation du support",
    icon: Bubbles,
    image:
      "https://images.unsplash.com/photo-1621961458348-f013d219b50c?auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "3. Application",
    description: "Application du système de protection adapté",
    icon: Paintbrush,
    image: "/hero.jpg",
  },
  {
    name: "4. Contrôle",
    description: "Contrôle de la qualité et de la conformité",
    icon: ShieldCheck,
    image: "/SIPA-logo.png",
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
      <SectionTitle>NOTRE MÉTHODE</SectionTitle>
      <SectionCatchPhrase>
        Une intervention maîtrisée de la préparation au contrôle
      </SectionCatchPhrase>
      <SectionDescription>
        Chaque chantier fait l&apos;objet d&apos;une préparation adaptée à
        l&apos;état du support, aux contraintes de l&apos;ouvrage et au système
        de protection prévu. De l&apos;analyse initiale au contrôle final, SIPA
        maîtrise les étapes essentielles de l&apos;intervention.
      </SectionDescription>

      <SectionTitle>Les 4 étapes</SectionTitle>
      <div className="flex md:flex-row flex-col gap-3 md:gap-9 mt-3 md:mt-6">
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
