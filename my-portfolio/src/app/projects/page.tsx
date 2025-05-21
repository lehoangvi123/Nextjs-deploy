import { ProjectCard } from "../../../components/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Number of Member",
      description: "Developed a web application for the class 20KTPM2 group in Java using object-oriented programming principles. Jan 2024 - Mar 2024.",
      link: "#",
    },
    {
      title: "Puzzle Game by Java",
      description: "Developed a Puzzle Candy Crush game as part of a team project focusing on Java programming and teamwork. Sep 2023 - Dec 2023.",
      link: "#",
    },
    {
      title: "Stock Exchange Management System",
      description: "Contributed to the development of a full-stack Employee Management System with ReactJS, Spring Boot, and MySQL. Jan 2023 - May 2023.",
      link: "#",
    },
    {
      title: "Music Player App",
      description: "Developed a music application using HTML, CSS, JavaScript, and Bootstrap for learning music online. Sep 2022 - Dec 2022.",
      link: "#",
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