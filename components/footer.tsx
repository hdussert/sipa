import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const LINKS = [
  {
    link: "/",
    name: "Accueil",
  },
  {
    link: "/entreprise",
    name: "L'Entreprise",
  },
  {
    link: "/services",
    name: "Nos services",
  },

  {
    link: "/projets",
    name: "Réalisations",
  },
];

const Footer = () => {
  return (
    <footer className="py-16 border-t text-sm">
      <div className="flex justify-around">
        <div className="flex flex-col gap-1">
          {LINKS.map((link, index) => (
            <Link className="block" key={index} href={link.link}>
              {link.name}
            </Link>
          ))}
          <Separator className="my-2" />
          <Link className="block" href="/mentions-legales">
            Mentions légales
          </Link>
        </div>
        <div>
          <p className="font-bold">Contact</p>
          <br />
          <p>05 90 86 47 51</p>
          <p>etude971@sipa.gp</p>
          <Separator className="my-2" />
          <p>
            20 C lot Moudong Sud
            <br /> 97122 Baie-Mahault
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
