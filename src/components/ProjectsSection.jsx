// Projects Array
const projects = [
  // Project 1
  {
    id: 1,
    title: "Project One",
    description: "A brief description of Project One.",
    image: "/projects/p1.jpeg",
    tags: ["React", "Node.js"],
    demoURL: "#",
    GitHub: "#",
  },
  // Project 2
  {
    id: 2,
    title: "Project Two",
    description: "A brief description of Project Two.",
    image: "/projects/p2.jpeg",
    tags: ["Vue", "Firebase"],
    demoURL: "#",
    GitHub: "#",
  },
  // Project 3
  {
    id: 3,
    title: "Project Three",
    description: "A brief description of Project Three.",
    image: "/projects/p3.jpeg",
    tags: ["Angular", "Express"],
    demoURL: "#",
    GitHub: "#",
  },
  // Project 4
  {
    id: 4,
    title: "Project Four",
    description: "A brief description of Project Four.",
    image: "/projects/p4.jpeg",
    tags: ["React Native", "MongoDB"],
    demoURL: "#",
    GitHub: "#",
  },
  // Project 5
  {
    id: 5,
    title: "Project Five",
    description: "A brief description of Project Five.",
    image: "/projects/p5.jpeg",
    tags: ["Django", "PostgreSQL"],
    demoURL: "#",
    GitHub: "#",
  },
  // Project 6
  {
    id: 6,
    title: "Project Six",
    description: "A brief description of Project Six.",
    image: "/projects/p6.jpeg",
    tags: ["Flutter", "Firebase"],
    demoURL: "#",
    GitHub: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each Project was curated with atmost interest and accuracy. Click on each project to learn more! abc def fgh ijk lmnopqrs stuv wxy z
        </p>
      </div>
    </section>
  );
};
