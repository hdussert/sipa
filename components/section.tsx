import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

type SectionProps = PropsWithChildren<{
  className?: string;
}>;

const Section = ({ children, className }: SectionProps) => {
  return (
    <div
      className={cn(
        "w-full my-6 py-12 md:my-12 md:py-16 px-4 md:px-0 bg-white shadow-xs",
        className,
      )}
    >
      <div className="mx-auto max-w-full md:max-w-3xl">{children}</div>
    </div>
  );
};

export default Section;
