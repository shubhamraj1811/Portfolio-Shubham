const skills = [
  // Frontend skills
  { name: "HTML/CSS", Level: 95, category: "Frontend" },
  { name: "JavaScript", Level: 90, category: "Frontend" },
  { name: "React", Level: 85, category: "Frontend" },
  { name: "Tailwind CSS", Level: 80, category: "Frontend" },
  { name: "Vue.js", Level: 70, category: "Frontend" },

  // Backend skills
  { name: "Node.js", Level: 80, category: "Backend" },
  { name: "Python", Level: 75, category: "Backend" },
  { name: "Django", Level: 70, category: "Backend" },
  { name: "Express.js", Level: 65, category: "Backend" },
  { name: "MongoDB", Level: 60, category: "Backend" },

  // Tools and other skills
  { name: "Git/GitHub", Level: 85, category: "Tools" },
  { name: "Docker", Level: 70, category: "Tools" },
  { name: "AWS", Level: 65, category: "Tools" },
  { name: "Android Studio", Level: 75, category: "Tools" },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/300"
    > {/* here */}
      <div className="container mx-auto max-w-5xl">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills </span>
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, key) => (
            <div 
            key={key}
            className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              {/* Skill Info */}
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name} </h3>
              </div>
              {/* Progress Bar */}
              <div className="w-full bg-primary/20 h-2 rounded-full overflow-hidden">
                {/* Progress Fill */}
                <div 
                className="bg-secondary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                style={{ width: skill.Level + "%" }}
                />
              </div>
              {/* Skill Level */}
              <div className="text-right mt-2">
                <span className="text-sm text-muted-foreground">{skill.Level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};