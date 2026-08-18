import Entreprise from "@/components/entreprise";
import Hero from "@/components/hero";
import Metiers from "@/components/metiers";
import Secteurs from "@/components/secteurs";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Hero />
      <Entreprise />
      <Metiers />
      <Secteurs />
      {/* TODO: Presentation */}
      {/* TODO: Domaine */}
      {/* TODO: Métier */}
      {/* TODO: Équipements */}
      {/* TODO: Engagements */}
      {/* TODO: Certifications */}
      {/* TODO: Implantations */}
      {/* TODO: Contact / Informations */}
      {/* TODO: Clients */}
    </div>
  );
}
