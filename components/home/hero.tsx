import Section from "@/components/section";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div
      className="w-full h-screen relative mb-32"
      style={{
        backgroundImage: 'url("/hero.jpg")',
        backgroundSize: "cover",
      }}
    >
      {/* <Image fill src={"/hero.jpg"} alt="hero-image" objectFit="cover" /> */}
      <div className="relative backdrop-brightness-75 text-center flex flex-col items-center justify-center text-secondary h-screen">
        <Section className="mb-0">
          <h2 className="text-4xl md:text-6xl font-bold font-heading mt-2">
            Préparation de surfaces et protection anticorrosion
          </h2>
          <p className="mt-6">
            Des solutions industrielles adaptées aux environnements les plus
            exigeants.
          </p>
          <div className="mt-8 flex gap-2 justify-center">
            <Button variant="outline">Découvrir</Button>
            <Button>Contact</Button>
          </div>
        </Section>
      </div>
    </div>
  );
};

export default HeroSection;
