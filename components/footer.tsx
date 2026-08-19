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
    link: "/metiers",
    name: "Nos services",
  },
  {
    link: "/secteurs",
    name: "Nos secteurs",
  },
  {
    link: "/realisations",
    name: "Réalisations",
  },
  {
    link: "/contact",
    name: "Contact",
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
          <p>
            Adresse:
            <br /> 20 C lot Moudong Sud
            <br /> ZAC de Moudong Sud
            <br /> 97122 Baie-Mahault
          </p>
          <Separator className="my-2" />
          <div>
            <p>Tel: 05 90 00 00 00</p>
            <p>email: sipa@gmail.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
