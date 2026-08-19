import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

type SectionDescriptionProps = PropsWithChildren<{
  className?: string;
}>;

const SectionDescription = ({
  children,
  className,
}: SectionDescriptionProps) => {
  return (
    <h1 className={cn("text-muted-foreground mb-12", className)}>{children}</h1>
  );
};

export default SectionDescription;
