import { PropsWithChildren } from "react";

type SectionProps = PropsWithChildren;

const Section = ({ children }: SectionProps) => {
  return <div className="max-w-3xl mb-32">{children}</div>;
};

export default Section;
