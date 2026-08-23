import { buttonVariants } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const NAVBARITEMS = [
  {
    name: "Accueil",
    link: "/",
  },
  {
    name: "L'entreprise",
    link: "/entreprise",
  },
  {
    name: "Services",
    link: "/services",
  },

  {
    name: "Réalisations",
    link: "/projets",
  },
];

// TODO: Mobile menu
const Navbar = () => {
  return (
    <div className="top-0 z-20 absolute w-full flex justify-between px-4 py-2">
      <Link
        href={"/"}
        className="cursor-pointer bg-white p-2 -ml-4 rounded-r-full shadow"
      >
        <Image src="/SIPA-logo.png" alt="logo" width={120} height={50} />
      </Link>

      {/* DESKTOP */}
      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList>
          {NAVBARITEMS.map((item, index) => (
            <NavigationMenuItem key={index}>
              <NavigationMenuLink href={item.link}>
                {item.name}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      {/* MOBILE */}
      <NavigationMenu className="md:hidden">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger
              className={buttonVariants({
                variant: "secondary",
                size: "icon-lg",
              })}
            >
              <Menu />
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul>
                {NAVBARITEMS.map((item, index) => (
                  <li key={index}>
                    <NavigationMenuLink
                      render={
                        <Link href={item.link}>
                          <div className="text-muted-foreground">
                            {item.name}
                          </div>
                        </Link>
                      }
                    />
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Navbar;
