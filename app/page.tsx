import CompanySection from "@/components/home/company";
import ExpertiseSection from "@/components/home/expertise";
import HeroSection from "@/components/home/hero";
import ProjectsSection from "@/components/home/projects";
import SectorsSection from "@/components/home/sectors";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <HeroSection />
      <CompanySection />
      <ExpertiseSection />
      <SectorsSection />
      <ProjectsSection />
      {/* TODO: Presentation */}
      {/* TODO: Domaine */}
      {/* TODO: Métier */}
      {/* TODO: Équipements */}
      {/* TODO: Engagements */}
      {/* TODO: Certifications */}
      {/* TODO: Implantations */}
      {/* TODO: Contact / Informations */}
      {/* TODO: Clients */}
    </div>
  );
}
