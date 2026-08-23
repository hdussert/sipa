import Section from "@/components/section";
import SectionCatchPhrase from "@/components/section-catch-phrase";
import SectionDescription from "@/components/section-description";
import SectionTitle from "@/components/section-title";
import { Badge } from "@/components/ui/badge";

const ApplicationsSection = () => {
  return (
    <Section>
      <SectionTitle>NOS APPLICATIONS</SectionTitle>
      <SectionCatchPhrase>
        Des interventions sur des ouvrages industriels variés
      </SectionCatchPhrase>

      <SectionDescription>
        SIPA adapte ses procédés de préparation et de protection aux
        caractéristiques de chaque ouvrage et aux conditions de son
        environnement.
      </SectionDescription>

      <div className="flex gap-2 flex-wrap justify-center">
        <Badge variant="primary">RÉSERVOIRS</Badge>
        <Badge variant="primary">BACS DE STOCKAGE</Badge>
        <Badge variant="primary">TUYAUTERIES</Badge>
        <Badge variant="primary">STRUCTURES MÉTALLIQUES</Badge>
        <Badge variant="primary">INSTALLATIONS INDUSTRIELLES</Badge>
        <Badge variant="primary">OUVRAGES PORTUAIRES</Badge>
        <Badge variant="primary">NAVIRES</Badge>
        <Badge variant="primary">ÉQUIPEMENTS ÉNERGÉTIQUES</Badge>
      </div>
    </Section>
  );
};

export default ApplicationsSection;
