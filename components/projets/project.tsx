import Section from "@/components/section";
import SectionCatchPhrase from "@/components/section-catch-phrase";
import SectionDescription from "@/components/section-description";
import SectionTitle from "@/components/section-title";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const IMAGES = [
  "/hero.jpg",
  "/hero.jpg",
  "/hero.jpg",
  "/hero.jpg",
  "/hero.jpg",
  "/hero.jpg",
  "/hero.jpg",
  "/hero.jpg",
  "/hero.jpg",
];

type ProjetSectionProps = {
  company: string;
  name: string;
};

const ProjectSection = ({ company, name }: ProjetSectionProps) => {
  return (
    <Section>
      <SectionTitle>{company}</SectionTitle>
      <SectionCatchPhrase>{name}</SectionCatchPhrase>
      <SectionDescription>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, vero,
        eum odio voluptate tempore placeat suscipit laboriosam maiores aperiam,
        ad hic nesciunt veritatis obcaecati dolores maxime corrupti molestias
        consequatur magni. Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Illum doloribus distinctio optio nihil ab voluptate ratione
        exercitationem magni similique blanditiis, sequi nobis tempore est eius
        ut placeat aspernatur assumenda animi! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Alias, blanditiis deserunt cumque
        similique labore, ut quae tempora quam officiis, quod nemo ea at vitae
        consequatur ad deleniti. Deserunt, nobis tenetur? Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Similique deserunt a dolorem rerum
        ipsa totam, sequi, distinctio ad nihil consequuntur voluptates fugiat
        officiis ipsum rem odit dolores exercitationem aliquam vel! Lorem ipsum
        dolor sit, amet consectetur adipisicing elit. Beatae deserunt rem
        veniam? Rem id quidem corrupti magnam ducimus quos? Esse illum harum
        cumque mollitia, quibusdam tenetur eos similique animi vero?
      </SectionDescription>

      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent>
          {IMAGES.map((image, index) => (
            <CarouselItem key={index} className="basis-1/3">
              <Image
                height={500}
                width={500}
                src={image}
                alt={"project image " + index}
                className="w-full object-cover rounded"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex " />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </Section>
  );
};

export default ProjectSection;
