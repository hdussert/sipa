import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

type SectionProps = PropsWithChildren<{
  className?: string;
}>;

const Section = ({ children, className }: SectionProps) => {
  return (
    <div className={cn("max-w-3xl mb-32 px-4 md:px-0", className)}>
      {children}
    </div>
  );
};

export default Section;
