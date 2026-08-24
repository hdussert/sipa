"use client";

import ProjectsCarousel from "@/components/home/projects-carousel";
import Section from "@/components/section";
import SectionCatchPhrase from "@/components/section-catch-phrase";
import SectionDescription from "@/components/section-description";
import SectionTitle from "@/components/section-title";

export type Project = {
  company: string;
  title: string;
  description: string;
  image: string;
};

const PROJECTS: Project[] = [
  {
    company: "SARA",
    title: "Renovation des bacs 40 giga tones de litres de pétrole",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique optio laborum veniam, facilis commodi ullam asperiores culpa cumque odio consequuntur quae blanditiis, impedit ea velit harum reprehenderit incidunt, aliquam natus!",
    image:
      "https://images.unsplash.com/photo-1621961458348-f013d219b50c?auto=format&fit=crop&w=1000&q=80",
  },
  {
    company: "SARA 2",
    title: "Renovation des bacs 40 giga tones de litres de pétrole",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique optio laborum veniam, facilis commodi ullam asperiores culpa cumque odio consequuntur quae blanditiis, impedit ea velit harum reprehenderit incidunt, aliquam natus!",
    image:
      "https://images.unsplash.com/photo-1621961458348-f013d219b50c?auto=format&fit=crop&w=1000&q=80",
  },
];

const ProjectsSection = () => {
  return (
    <Section>
      <SectionTitle className="text-center">Nos réalisations</SectionTitle>
      <SectionCatchPhrase className="text-center">
        Des interventions concrètes sur des ouvrages industriels
      </SectionCatchPhrase>
      <SectionDescription className="text-center">
        Découvrez quelques-uns des chantiers réalisés par SIPA en préparation de
        surfaces, hydrodécapage, traitement anticorrosion et peinture
        industrielle.
      </SectionDescription>
      <ProjectsCarousel projects={PROJECTS} />
    </Section>
  );
};

export default ProjectsSection;
