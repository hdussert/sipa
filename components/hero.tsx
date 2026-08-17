import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="max-w-3xl text-center">
      <h1 className="text-6xl  font-heading text-primary font-bold">SIPA</h1>
      <h2 className="font-bold font-mono mt-2">
        Préparation de surfaces et protection anticorrosion
      </h2>
      <p className="mt-2">
        Des solutions industrielles adaptées aux environnements les plus
        exigeants.
      </p>
      <div className="mt-4 flex gap-2 justify-center">
        <Button variant="outline">En savoir plus</Button>
        <Button>Contact</Button>
      </div>
    </div>
  );
};

export default Hero;
