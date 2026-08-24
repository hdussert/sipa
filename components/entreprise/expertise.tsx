import Section from "@/components/section";
import SectionCatchPhrase from "@/components/section-catch-phrase";
import SectionDescription from "@/components/section-description";
import SectionTitle from "@/components/section-title";
import Image from "next/image";
const ExpertiseSection = () => {
  return (
    <Section className="flex flex-col md:flex-row gap-3 md:gap-12">
      <div className="flex-2 shrink-0">
        <SectionTitle>NOTRE EXPERTISE</SectionTitle>
        <SectionCatchPhrase>
          Des équipes qualifiées pour des environnements exigeants
        </SectionCatchPhrase>
        <SectionDescription>
          La formation et la certification de nos opérateurs ACQPA niveaux 1, 2
          et 3 et FROSIO démontrent l&apos;intérêt que nous portons à notre
          département Contrôle Qualité, conformément aux exigences et
          spécifications particulières des maîtres d&apos;ouvrage. Nous mettons
          à disposition nos compétences et nos moyens afin de placer le client
          et ses exigences au centre d&apos;un dispositif de qualité.
          <br />
          <br />
          Habituée des environnements de travaux dangereux et très réglementés,
          SIPA place la préservation du capital humain au premier plan de ses
          priorités. À cet effet, et dans le cadre de sa démarche de
          certification MASE, SIPA est en constante recherche
          d&apos;amélioration de ses procédures techniques, tout en obtenant les
          certifications, habilitations et qualifications spécifiques à chaque
          chantier.
        </SectionDescription>
      </div>
      <div className="flex-1 flex flex-col gap-3 justify-center">
        <Image
          alt="Sipa-photo"
          width={400}
          height={400}
          src="https://images.unsplash.com/photo-1621961458348-f013d219b50c?auto=format&fit=crop&w=1000&q=80"
          className="rounded"
        />
        <Image
          alt="Sipa-photo"
          width={400}
          height={400}
          src="https://images.unsplash.com/photo-1621961458348-f013d219b50c?auto=format&fit=crop&w=1000&q=80"
          className="rounded md:ml-12"
        />
        <Image
          alt="Sipa-photo"
          width={400}
          height={400}
          src="https://images.unsplash.com/photo-1621961458348-f013d219b50c?auto=format&fit=crop&w=1000&q=80"
          className="rounded"
        />
      </div>
    </Section>
  );
};

export default ExpertiseSection;
