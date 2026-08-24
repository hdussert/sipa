import ProjectSection from "@/components/projets/project";

export default function Projets() {
  return (
    <div className="flex flex-col">
      <div
        className="h-128 bg-primary border-b-8 border-primary"
        style={{
          backgroundImage: 'url("/hero.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <ProjectSection company={"SARA"} name={"Rénovation des réservoirs"} />
    </div>
  );
}
