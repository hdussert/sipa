import EquipmentSection from "@/components/company/equipment";
import ExpertiseSection from "@/components/company/expertise";
import WhoAreWeSection from "@/components/company/who-are-we";
import CTASection from "@/components/home/cta";
import Section from "@/components/section";
import SectionCatchPhrase from "@/components/section-catch-phrase";
import SectionDescription from "@/components/section-description";
import SectionTitle from "@/components/section-title";
import Image from "next/image";

export default function Company() {
  return (
    <div className="flex flex-col">
      <Image
        alt="Sipa-photo"
        width={2000}
        height={2000}
        src="https://images.unsplash.com/photo-1621961458348-f013d219b50c?auto=format&fit=crop&w=1000&q=80"
        className="border-b-24 border-primary"
      />

      <WhoAreWeSection />
      <ExpertiseSection />
      <EquipmentSection />

      <Section>
        <SectionTitle>NOS ENGAGEMENTS</SectionTitle>
        <SectionCatchPhrase>
          Qualité, sécurité et environnement au cœur de nos interventions
        </SectionCatchPhrase>
        <SectionDescription>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus,
          officiis vero in mollitia soluta vel iste dolorem magnam minus,
          asperiores odit dolore esse. Autem commodi asperiores perferendis
          provident et nemo.
        </SectionDescription>
      </Section>

      <CTASection />
    </div>
  );
}
