import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

type SectionProps = PropsWithChildren<{
  className?: string;
}>;

const SectionHero = ({ children, className }: SectionProps) => {
  return (
    <div className="w-full my-6 py-12 md:my-12 md:py-16 px-4 md:px-0">
      <div className={cn("mx-auto max-w-full md:max-w-3xl", className)}>
        {children}
      </div>
    </div>
  );
};

export default SectionHero;
