"use client";

import ButtonLink from "@/components/button-link";
import { Project } from "@/components/home/projects";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

type ProjectsCarouselProps = {
  projects: Project[];
};

const ProjectsCarousel = ({ projects }: ProjectsCarouselProps) => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {projects.map((project, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <Image
                  height={500}
                  width={500}
                  src={project.image}
                  alt={project.company + " project image"}
                  className="w-full object-cover"
                />
                <CardHeader>
                  <CardTitle>
                    {project.company}: {project.title}
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                  <ButtonLink href={""}>Voir</ButtonLink>
                </CardHeader>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex left-12" />
      <CarouselNext className="hidden md:flex right-12" />
    </Carousel>
  );
};

export default ProjectsCarousel;
