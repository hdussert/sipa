import CTASection from "@/components/home/cta";
import Section from "@/components/section";
import SectionCatchPhrase from "@/components/section-catch-phrase";
import SectionDescription from "@/components/section-description";
import SectionTitle from "@/components/section-title";
import Image from "next/image";
export default function Services() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Image
        alt="Sipa-photo"
        width={2000}
        height={2000}
        src="https://images.unsplash.com/photo-1621961458348-f013d219b50c?auto=format&fit=crop&w=1000&q=80"
        className="border-b-24 border-primary"
      />
      <Section>
        <SectionTitle>NOS SERVICES</SectionTitle>
        <SectionCatchPhrase>
          Préparer, décaper et protéger les surfaces industrielles
        </SectionCatchPhrase>
        <SectionDescription>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique,
          labore pariatur numquam commodi asperiores, qui illum, voluptatem ex
          sunt hic possimus quo obcaecati. Quas exercitationem, nobis esse quia
          sint iste.
        </SectionDescription>
      </Section>

      <Section>
        <SectionTitle>NOS SOLUTIONS</SectionTitle>
        <SectionCatchPhrase>
          Des techniques adaptées à chaque ouvrage
        </SectionCatchPhrase>
        <SectionDescription>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique,
          labore pariatur numquam commodi asperiores, qui illum, voluptatem ex
          sunt hic possimus quo obcaecati. Quas exercitationem, nobis esse quia
          sint iste.
        </SectionDescription>
      </Section>

      <Section>
        <SectionTitle>NOTRE APPROCHE</SectionTitle>
        <SectionCatchPhrase>
          De la préparation du support au contrôle final
        </SectionCatchPhrase>
        <SectionDescription>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique,
          labore pariatur numquam commodi asperiores, qui illum, voluptatem ex
          sunt hic possimus quo obcaecati. Quas exercitationem, nobis esse quia
          sint iste.
        </SectionDescription>
      </Section>

      <CTASection />
    </div>
  );
}
