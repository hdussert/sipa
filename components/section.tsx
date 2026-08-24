import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

type SectionProps = PropsWithChildren<{
  className?: string;
}>;

const Section = ({ children, className }: SectionProps) => {
  return (
    <div className="w-full mb-12 py-12 md:mb-24 md:py-16 px-4 md:px-0 bg-white shadow-md">
      <div className={cn("mx-auto max-w-full md:max-w-3xl", className)}>
        {children}
      </div>
    </div>
  );
};

export default Section;
