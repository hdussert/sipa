import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

type SectionCatchPhraseProps = PropsWithChildren<{
  className?: string;
}>;

const SectionCatchPhrase = ({
  children,
  className,
}: SectionCatchPhraseProps) => {
  return (
    <h1
      className={cn(
        "tracking-wide font-heading leading-none text-3xl md:text-4xl font-bold mb-6",
        className,
      )}
    >
      {children}
    </h1>
  );
};

export default SectionCatchPhrase;
