import CommitmentsSection from "@/components/entreprise/commitments";
import ExpertiseSection from "@/components/entreprise/expertise";
import WhoAreWeSection from "@/components/entreprise/who-are-we";
import CTASection from "@/components/home/cta";

export default function Company() {
  return (
    <div className="flex flex-col">
      <div
        className="h-128 bg-primary border-b-8 border-primary"
        style={{
          backgroundImage: 'url("/hero.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <WhoAreWeSection />
      <ExpertiseSection />
      <CommitmentsSection />
      <CTASection />
    </div>
  );
}
