import { buttonVariants } from "@/components/ui/button";

const ButtonCTA = () => {
  return (
    <a
      href="mailto:etude971@sipa.gp"
      className={buttonVariants({ size: "lg" })}
    >
      Demander un devis
    </a>
  );
};

export default ButtonCTA;
