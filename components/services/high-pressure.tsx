import Section from "@/components/section";
import SectionCatchPhrase from "@/components/section-catch-phrase";
import SectionDescription from "@/components/section-description";
import SectionTitle from "@/components/section-title";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const MACHINES = [
  {
    name: "FALCH - 3 000 bar",
    description: "Pompe UHP pour les opérations de très haute pression.",
    image:
      "https://images.unsplash.com/photo-1621961458348-f013d219b50c?auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "2 Robots de décapage UHP",
    description:
      "Pour les opérations nécessitant une automatisation du décapage.",
    image:
      "https://images.unsplash.com/photo-1621961458348-f013d219b50c?auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "FALCH - 300 bar eau chaude",
    description: "Pompe HP pour les opérations de nettoyage et de préparation",
    image:
      "https://images.unsplash.com/photo-1621961458348-f013d219b50c?auto=format&fit=crop&w=1000&q=80",
  },
];

const HighPressureSection = () => {
  return (
    <Section className="text-center">
      <SectionTitle>DÉCAPAGE HAUTE & ULTRA-HAUTE PRESSION</SectionTitle>
      <SectionCatchPhrase>
        La puissance de l&apos;UHP pour les opérations les plus exigeantes
      </SectionCatchPhrase>
      <SectionDescription>
        SIPA utilise l&apos;hydrodécapage haute et ultra-haute pression pour
        retirer les revêtements dégradés et préparer les surfaces avant leur
        remise en protection. Cette technologie permet notamment
        d&apos;intervenir sur de grandes surfaces et sur des ouvrages
        industriels soumis à des contraintes importantes.
      </SectionDescription>

      <Image
        src="https://images.unsplash.com/photo-1621961458348-f013d219b50c?auto=format&fit=crop&w=1000&q=80"
        className="rounded"
        alt={""}
        width={2000}
        height={1500}
      />

      <div className="flex gap-3 mt-6 flex-col md:flex-row">
        {MACHINES.map((machine, index) => (
          <Card key={index}>
            <Image
              src={machine.image}
              className="rounded object-cover"
              alt={""}
              width={500}
              height={300}
            />
            <CardHeader>
              <CardTitle>{machine.name}</CardTitle>
              <CardDescription>{machine.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default HighPressureSection;
