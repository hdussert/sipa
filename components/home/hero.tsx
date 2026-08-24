import ButtonCTA from "@/components/button-cta";
import SectionHero from "@/components/section-hero";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div
      className="w-full h-screen mb-16 shadow"
      style={{
        backgroundImage: 'url("/hero.jpg")',
        backgroundSize: "cover",
      }}
    >
      <div className="backdrop-brightness-90 text-center flex flex-col items-center justify-center text-secondary h-screen">
        <SectionHero>
          <h2 className="text-4xl md:text-6xl font-bold font-heading mt-2">
            Préparation de surfaces et protection anticorrosion
          </h2>
          <p className="mt-6 font-bold">
            SIPA accompagne les industriels aux Antilles-Guyane dans leurs
            travaux de sablage, hydrodécapage, UHP et peinture industrielle.
          </p>
          <div className="mt-8 flex flex-col md:flex-row gap-2 justify-center">
            <Button size="lg" variant="outline">
              Découvrir SIPA
            </Button>
            <ButtonCTA />
          </div>
        </SectionHero>
      </div>
    </div>
  );
};

export default HeroSection;
