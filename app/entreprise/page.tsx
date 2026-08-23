import ExpertiseSection from "@/components/company/expertise";
import WhoAreWeSection from "@/components/company/who-are-we";
import CTASection from "@/components/home/cta";
import Section from "@/components/section";
import SectionCatchPhrase from "@/components/section-catch-phrase";
import SectionDescription from "@/components/section-description";
import SectionTitle from "@/components/section-title";

export default function Company() {
  return (
    <div className="flex flex-col">
      <div
        className="h-128 bg-primary border-b-8 border-primary"
        style={{
          backgroundImage: 'url("/hero.jpg")',
          backgroundSize: "cover",
        }}
      />
      <WhoAreWeSection />
      <ExpertiseSection />
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
