type SectionTitle = {
  children: string;
};

const SectionTitle = ({ children }: SectionTitle) => {
  return <h1 className="font-heading text-2xl font-bold mb-12">{children}</h1>;
};

export default SectionTitle;
