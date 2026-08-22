import CompanySection from "@/components/home/company";
import CTASection from "@/components/home/cta";
import DataSection from "@/components/home/data";
import HeroSection from "@/components/home/hero";
import LocationSection from "@/components/home/location";
import ProjectsSection from "@/components/home/projects";
import ReferrersSection from "@/components/home/referrers";
import SectorsSection from "@/components/home/sectors";
import ServicesSection from "@/components/home/services";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans">
      <HeroSection />
      <CompanySection />
      <DataSection />
      <ServicesSection />
      <SectorsSection />
      <ProjectsSection />
      <ReferrersSection />
      <LocationSection />
      <CTASection />
    </div>
  );
}
