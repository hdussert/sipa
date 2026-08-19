import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Image from "next/image";

// TODO: Mobile menu
const Navbar = () => {
  return (
    <div className="top-0 z-20 absolute w-full flex justify-between px-4 py-2 ">
      <Image
        src="/SIPA-logo.png"
        alt="logo"
        width={155}
        height={92}
        className="bg-white p-2 -mt-2 -ml-4 rounded-br-2xl"
      />
      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink>L&apos;entreprise</NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink>Services</NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink>Secteurs</NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink>Réalisations</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Navbar;
