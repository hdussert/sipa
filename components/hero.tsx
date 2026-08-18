import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="max-w-3xl text-center h-screen flex flex-col justify-center">
      <h2 className="text-3xl md:text-6xl font-bold font-heading mt-2">
        Préparation de surfaces et protection anticorrosion
      </h2>
      <p className="mt-6">
        Des solutions industrielles adaptées aux environnements les plus
        exigeants.
      </p>
      <div className="mt-8 flex gap-2 justify-center">
        <Button variant="outline">En savoir plus</Button>
        <Button>Contact</Button>
      </div>
    </div>
  );
};

export default Hero;
