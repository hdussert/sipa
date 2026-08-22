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
  type CarouselApi,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useEffect, useState } from "react";

type ProjectsCarouselProps = {
  projects: Project[];
};
const ProjectsCarousel = ({ projects }: ProjectsCarouselProps) => {
  const [api, setApi] = useState<CarouselApi>();

  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <>
      <Carousel
        setApi={setApi}
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
                    objectFit="cover"
                    src={project.image}
                    alt={project.company + " project image"}
                    className="w-full"
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
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
      <div className="py-2 text-center text-xs text-muted-foreground">
        {current} sur {count}
      </div>
    </>
  );
};

export default ProjectsCarousel;
