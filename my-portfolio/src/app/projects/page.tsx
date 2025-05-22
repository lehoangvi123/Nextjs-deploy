import { ProjectCard } from "../../../components/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Candy Crush Saga by Java",
      description: "Built a web app for the 20KTPM2 group using Java and OOP principles. Jan 2024 - Mar 2024.",
      link: "https://github.com/tttduong/Candy-Crush-Lab5",
    }, 
    {
      title: "Puzzle Game by Java",
      description: "Created a Puzzle Candy Crush game with a team, focusing on Java and collaboration. Sep 2023 - Dec 2023.",
      link: "https://github.com/lehoangvi123/2048-game",
    },
    {
      title: "MERN stack employee management",
      description: "Developed a full-stack Employee Management System using ReactJS, Spring Boot, and MySQL. Jan 2023 - May 2023.",
      link: "https://github.com/Quanchip/wad-employee-management-app",
    }, 
    {
      title: "Music Player App",
      description: "Designed a music learning app with HTML, CSS, JavaScript, and Bootstrap. Sep 2022 - Dec 2022.",
      link: "https://github.com/lehoangvi123/Music-Player",
    },
  ];

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description} 
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
}