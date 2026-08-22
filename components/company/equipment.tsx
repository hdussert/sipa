import Section from "@/components/section";
import SectionCatchPhrase from "@/components/section-catch-phrase";
import SectionDescription from "@/components/section-description";
import SectionTitle from "@/components/section-title";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const EquipmentSection = () => {
  return (
    <Section>
      <SectionTitle>NOS MOYENS</SectionTitle>
      <SectionCatchPhrase>
        Des équipements adaptés aux chantiers industriels
      </SectionCatchPhrase>
      <SectionDescription>
        SIPA dispose d&apos;un parc d&apos;équipements dédié à la préparation
        des surfaces, au décapage haute et ultra-haute pression, à
        l&apos;application de revêtements et aux opérations de chantier.
      </SectionDescription>

      <div className="flex flex-col gap-3">
        <Card>
          <CardHeader>
            <CardTitle>Préparation de surfaces</CardTitle>
            <CardDescription>
              <ul>
                <li>6 sableuses 200 L ELCOMETER</li>
                <li>8 burineurs pneumatiques à aiguilles</li>
                <li>2 systèmes de ventilation / aspiration VENTURY</li>
              </ul>
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Décapage haute et ultra-haute pression</CardTitle>
            <CardDescription>
              <ul>
                <li>1 pompe UHP 3 000 bars FALCH Trail Jet 125</li>
                <li>2 robots de décapage UHP</li>
                <li>1 pompe HP 300 bars eau chaude FALCH</li>
                <li>1 laveur haute pression 275 bars</li>
              </ul>
            </CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Application de peinture</CardTitle>
            <CardDescription>
              <ul>
                <li>1 pompe Airless GRACO pneumatique 70:1</li>
                <li>1 pompe Airless WAGNER 75:1</li>
                <li>1 pompe Airless autonome 210 bars</li>
              </ul>
            </CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Air comprimé & chantier</CardTitle>
            <CardDescription>
              <ul>
                <li>
                  3 compresseurs thermiques ATLAS - 9 000, 15 000 et 28 000
                  L/min
                </li>
                <li>1 compresseur KAESER 25 000 L/min</li>
              </ul>
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </Section>
  );
};

export default EquipmentSection;
