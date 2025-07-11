import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Event Software Page",
    description: "A full project software for web and mobile.",
image: "/Protfolio_React/projects/project1.png",
    tags: ["React", "TailwindCSS", "TypeScript", "Flutter", "Next.js", "Vite", "JavaScript", "SQL"],
    demoUrl: "https://www.figma.com/design/QGywtGN9Eao5brhG3YBGAc/Eventure_UI?node-id=36-440&t=obC3lxxaN8XVuLf9-1",
    githubUrl: "https://github.com/Youshida90/Eventure_app",
  },
  {
    id: 2,
    title: "Crypto Analytics Dashboard",
    description:
      "Interactive dashboard for visualizing cryptocurrency data with real-time updates.",
    image: "/Protfolio_React/projects/project2.png",
    tags: ["Flutter", "Supabase", "Dart", "Figma"],
    demoUrl: "https://www.figma.com/design/sdbwJrBREpqqUToZTo0Lg6/Free-Crypto-App-UI-Kit--Community-?node-id=810-4800&t=wwii0414m5CmnFSF-1",
    githubUrl: "https://github.com/Youshida90/Blockto",
  },
  {
    id: 3,
    title: "Personal Protfolio",
    description:
      "A personal portfolio website showcasing my skills, projects, and experience.",
    image: "/Protfolio_React/projects/project3.png",
    tags: ["React", "Node.js", "Stripe", "TailwindCSS", "TypeScript"],
    demoUrl: "https://www.youtube.com/watch?v=ifOJ0R5UQOc&ab_channel=PedroTech",
    githubUrl: "https://github.com/AbdelrhmanalSharif/Protfolio_React",
  },
  {
    id: 4,
    title: "E-commerce App",
    description:
      "A fully functional e-commerce application with product listings, cart, and checkout.",
    image: "/Protfolio_React/projects/project4.png",
    tags: ["React", "Javascript", "TailwindCSS"],
    demoUrl: "https://www.youtube.com/watch?v=ifOJ0R5UQOc&ab_channel=PedroTech",
    githubUrl: "https://github.com/AbdelrhmanalSharif/Expense-Tracker-Website",
  }
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
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/AbdelrhmanalSharif"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
