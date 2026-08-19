"use client";

import ButtonLink from "@/components/button-link";
import Section from "@/components/section";
import SectionCatchPhrase from "@/components/section-catch-phrase";
import SectionDescription from "@/components/section-description";
import SectionTitle from "@/components/section-title";
import { Card, CardHeader } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

type Project = {
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
  {
    company: "SARA 3",
    title: "Renovation des bacs 40 giga tones de litres de pétrole",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique optio laborum veniam, facilis commodi ullam asperiores culpa cumque odio consequuntur quae blanditiis, impedit ea velit harum reprehenderit incidunt, aliquam natus!",
    image:
      "https://images.unsplash.com/photo-1621961458348-f013d219b50c?auto=format&fit=crop&w=1000&q=80",
  },
  {
    company: "SARA 4",
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
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent>
          {PROJECTS.map((project, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <Image
                    height={500}
                    width={500}
                    objectFit="cover"
                    src={project.image}
                    alt={project.company + " project image"}
                    className="w-full"
                  />
                  <CardHeader>
                    <h3 className="font-bold">
                      {project.company}: {project.title}
                    </h3>
                    <p>{project.description}</p>
                    <ButtonLink href={""}>Voir</ButtonLink>
                  </CardHeader>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </Section>
  );
};

export default ProjectsSection;
