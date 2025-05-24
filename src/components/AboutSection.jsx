import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  const handleDownload = (e) => {
    e.preventDefault();
    window.open(
      "https://drive.google.com/uc?export=download&id=1gVguldXqungNR5T4XN6tOMd5pH4aSjMZ",
      "_blank"
    );
  };

  return (
    <section id="about" className="py-16 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="space-y-6 flex-1">
            <h3 className="text-2xl font-semibold">
              Passionate Frontend Developer On Both Mobile and Web
            </h3>

            <p className="text-muted-foreground">
              With over 3 years of experience in mobile development, I specialize
              in creating responsive, accessible, and performant applications using
              modern technologies. Recently, I started exploring web development to
              expand my skill set and deliver cross-platform solutions.
            </p>

            <p className="text-muted-foreground">
              I'm passionate about creating elegant solutions to complex
              problems, and I'm constantly learning new technologies and
              techniques to stay at the forefront of the ever-evolving web and mobile
              development landscape. My goal is to build applications that not
              only meet user needs but also provide a delightful user experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href="https://drive.google.com/uc?export=download&id=1gVguldXqungNR5T4XN6tOMd5pH4aSjMZ"
                onClick={handleDownload}
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 text-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 flex-1 w-full">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Mobile & Web Development</h4>
                  <p className="text-muted-foreground">
                    Building responsive apps for both web and mobile platforms using modern frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    Designing intuitive interfaces and seamless experiences for all devices.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  <p className="text-muted-foreground">
                    Leading cross-platform projects from conception to completion with agile methodologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
