import Section from "@/components/section";
import SectionCatchPhrase from "@/components/section-catch-phrase";
import SectionDescription from "@/components/section-description";
import SectionTitle from "@/components/section-title";

type Data = {
  label: string;
  number: string;
};

const DATAS: Data[] = [
  {
    label: "Chantiers réalisés",
    number: "200+",
  },

  {
    label: "Années d'expériences",
    number: "8+",
  },
  {
    label: "Collaborateurs",
    number: "70",
  },
  {
    label: "Implantations",
    number: "3",
  },
];

type DataProps = Data;

const Data = ({ number, label }: DataProps) => {
  return (
    <div className="text-center md:px-8 grid grid-rows-2">
      <h4 className="text-5xl md:text-6xl font-black mb-2">{number}</h4>
      <p className="text-muted-foreground tracking-wide uppercase font-semibold">
        {label}
      </p>
    </div>
  );
};

const DataSection = () => {
  return (
    <Section>
      <SectionTitle>SIPA EN QUELQUES CHIFFRES</SectionTitle>
      <SectionCatchPhrase>Acteur majeur de la protection</SectionCatchPhrase>
      <SectionDescription></SectionDescription>
      <div className="grid grid-cols-2 md:grid-cols-4">
        {DATAS.map((data, index) => (
          <Data key={index} number={data.number} label={data.label} />
        ))}
      </div>
    </Section>
  );
};

export default DataSection;
