import { ArrowBigRight, ArrowRight, ExternalLink, Github } from "lucide-react";

// ----- Projects Array -----
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

// ----- ProjectsSection Component -----
export const ProjectsSection = () => {
   return (
      <section id="projects" className="py-24 px-4 relative">
         <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
               {" "}
               Featured <span className="text-primary"> Projects </span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
               Here are some of my recent projects. Each Project was curated
               with atmost interest and accuracy. Click on each project to learn
               more about it and see the code on GitHub.
            </p>

            {/* ----- Projects Grid ----- */}
            <div className="grid grid-cols-1 md:gird-cols-2 lg:grid-cols-3 gap-8">
               {projects.map((project, key) => (
                  <div
                     key={key}
                     className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                  >

                     {/* ----- Project Image ----- */}
                     <div className="h-48 overflow-hidden ">
                        <img
                           src={project.image}
                           alt={project.title}
                           className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                     </div>

                     {/* ----- Project Tags ----- */}
                     <div className="p-6">
                        <div className="flex flex-wrap gap-2 mb-4 justify-center">
                           {project.tags.map((tag) => (
                              // center it and make it look like a badge
                              <span
                                 className="px-2 py-1 text-xs font-medium border rounded-full bg-primary text-primary-foreground hover:bg-primary/70 transition-colors duration-300 cursor-pointer"
                              >
                                 {tag}
                              </span>
                           ))}
                        </div>

                        {/* ----- Project Title ----- */}
                        <h3 className="text-xl text-primary font-bold mb-1">
                           {project.title}
                        </h3>

                        {/* ----- Project Description ----- */}
                        <p className="text-muted-foreground text-sm mb-4">
                           {project.description}
                        </p>

                        {/* ----- github link and demo link ----- */}
                        <div className="flex justify-between items-center">
                           <div className="flex space-x-4 justify-center w-full">
                              <a
                                 href={project.demoURL}
                                 target="_blank" // open in new tab
                                 className="text-foreground/80 hover:text-secondary transition-colors duration-300"
                              >
                                 <ExternalLink size={25} />
                              </a>
                              <a
                                 href={project.GitHub}
                                 target="_blank" // open in new tab
                                 className="text-foreground/80 hover:text-secondary transition-colors duration-300"
                              >
                                 <Github size={25} />
                              </a>
                           </div>
                        </div>
                     </div>

                     {/* ------------------------ */}
                  </div>
               ))}
            </div>

            {/* ----- GitHub Link ----- */}
            <div className="text-center mt-12">
               <a
                  className="cosmic-button w-fit flex items-center gap-2 mx-auto gap-2"
                  // className = "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/80 h-10 px-4 py-2"
                  // my github = shubhamraj1811
                  href="https://github.com/shubhamraj1811"
                  target="_blank"
               >
                  {/* View on GitHub <ArrowBigRight /> */}
                  View on GitHub <ArrowRight size={20} />
               </a>
            </div>

         </div>
      </section>
   );
};

