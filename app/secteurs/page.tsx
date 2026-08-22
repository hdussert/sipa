import Section from "@/components/section";
import SectionCatchPhrase from "@/components/section-catch-phrase";
import SectionDescription from "@/components/section-description";

export default function Sectors() {
  return (
    <div className="flex bg-black flex-col justify-center items-center">
      <Section>
        <SectionCatchPhrase className="mt-8">
          Découvrir la SIPA
        </SectionCatchPhrase>
        <SectionDescription>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique,
          labore pariatur numquam commodi asperiores, qui illum, voluptatem ex
          sunt hic possimus quo obcaecati. Quas exercitationem, nobis esse quia
          sint iste.
        </SectionDescription>
      </Section>
    </div>
  );
}
