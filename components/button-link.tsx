import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { PropsWithChildren } from "react";

type ButtonLinkProps = PropsWithChildren<{
  href: string;
}>;

const ButtonLink = ({ href, children }: ButtonLinkProps) => {
  return (
    <Link
      className={cn(buttonVariants({ variant: "link", size: "xs" }), "p-0")}
      href={href}
    >
      {children}
    </Link>
  );
};

export default ButtonLink;
