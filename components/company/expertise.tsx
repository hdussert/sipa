import Section from "@/components/section";
import SectionCatchPhrase from "@/components/section-catch-phrase";
import SectionDescription from "@/components/section-description";
import SectionTitle from "@/components/section-title";

const ExpertiseSection = () => {
  return (
    <Section>
      <SectionTitle>NOTRE EXPERTISE</SectionTitle>
      <SectionCatchPhrase>
        Des équipes qualifiées pour des environnements exigeants
      </SectionCatchPhrase>
      <SectionDescription>
        La formation et la certification de nos opérateurs ACQPA niveaux 1, 2 et
        3 et FROSIO démontrent l&apos;intérêt que nous portons à notre
        département Contrôle Qualité, conformément aux exigences et
        spécifications particulières des maîtres d&apos;ouvrage. Nous mettons à
        disposition nos compétences et nos moyens afin de placer le client et
        ses exigences au centre d&apos;un dispositif de qualité.
        <br />
        <br />
        Habituée des environnements de travaux dangereux et très réglementés,
        SIPA place la préservation du capital humain au premier plan de ses
        priorités. À cet effet, et dans le cadre de sa démarche de certification
        MASE, SIPA est en constante recherche d&apos;amélioration de ses
        procédures techniques, tout en obtenant les certifications,
        habilitations et qualifications spécifiques à chaque chantier.
      </SectionDescription>
    </Section>
  );
};

export default ExpertiseSection;
