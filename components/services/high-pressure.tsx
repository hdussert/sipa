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
        <Card>
          <Image
            src="https://images.unsplash.com/photo-1621961458348-f013d219b50c?auto=format&fit=crop&w=1000&q=80"
            className="rounded"
            alt={""}
            width={300}
            height={300}
          />
          <CardHeader>
            <CardTitle>Pompes Ultra Haute Pression</CardTitle>
            <CardDescription>Pompe FALCH 3000 barres</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <Image
            src="https://images.unsplash.com/photo-1621961458348-f013d219b50c?auto=format&fit=crop&w=1000&q=80"
            className="rounded"
            alt={""}
            width={300}
            height={300}
          />
          <CardHeader>
            <CardTitle>Robots de décapage</CardTitle>
            <CardDescription>
              Idéal pour les travaux aux besoins spécifiques
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <Image
            src="https://images.unsplash.com/photo-1621961458348-f013d219b50c?auto=format&fit=crop&w=1000&q=80"
            className="rounded"
            alt={""}
            width={300}
            height={300}
          />
          <CardHeader>
            <CardTitle>Pompes HP</CardTitle>
            <CardDescription>Pompe 300 barres</CardDescription>
          </CardHeader>
        </Card>
      </div>
    </Section>
  );
};

export default HighPressureSection;
