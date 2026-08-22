import Section from "@/components/section";
import SectionCatchPhrase from "@/components/section-catch-phrase";
import SectionDescription from "@/components/section-description";
import SectionTitle from "@/components/section-title";
import Image from "next/image";

type Referrer = {
  logo: string;
  link: string;
  name: string;
};

const REFERRERS: Referrer[] = [
  {
    logo: "/SIPA-logo.png",
    link: "/",
    name: "SIPA",
  },
  {
    logo: "/SIPA-logo.png",
    link: "/",
    name: "SIPA",
  },
  {
    logo: "/SIPA-logo.png",
    link: "/",
    name: "SIPA",
  },
  {
    logo: "/SIPA-logo.png",
    link: "/",
    name: "SIPA",
  },
  {
    logo: "/SIPA-logo.png",
    link: "/",
    name: "SIPA",
  },
  {
    logo: "/SIPA-logo.png",
    link: "/",
    name: "SIPA",
  },
  {
    logo: "/SIPA-logo.png",
    link: "/",
    name: "SIPA",
  },
  {
    logo: "/SIPA-logo.png",
    link: "/",
    name: "SIPA",
  },
];

const ReferrersSection = () => {
  return (
    <Section>
      <SectionTitle>Nos References</SectionTitle>
      <SectionCatchPhrase>
        Une expérience construite aux côtés d&apos;acteurs industriels
      </SectionCatchPhrase>
      <SectionDescription>
        Au fil des projets, SIPA accompagne des entreprises des secteurs
        pétrolier, énergétique, industriel et maritime. Ils nous font confiance
        :
      </SectionDescription>
      <div className="w-full overflow-hidden">
        <div className="flex w-max animate-marquee">
          {REFERRERS.map((referer, index) => (
            <Image
              key={index}
              alt={referer.name}
              width={200}
              height={100}
              src={referer.logo}
              className="saturate-0 mx-4"
            />
          ))}
          {REFERRERS.map((referer, index) => (
            <Image
              key={index}
              alt={referer.name}
              width={200}
              height={100}
              src={referer.logo}
              className="saturate-0 mx-4"
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default ReferrersSection;
