import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

type SectionTitle = PropsWithChildren<{
  className?: string;
}>;

const SectionTitle = ({ children, className }: SectionTitle) => {
  return (
    <h1
      className={cn(
        "tracking-wider uppercase text-muted-foreground text-sm font-bold mb-4",
        className,
      )}
    >
      {children}
    </h1>
  );
};

export default SectionTitle;
