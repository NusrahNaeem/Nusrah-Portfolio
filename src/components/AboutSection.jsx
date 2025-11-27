import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Full-Stack Web Developer <br /> Continuously Learning and Building Modern Web Solutions
            </h3>

            <p className="text-muted-foreground">
              I am a dedicated full-stack developer skilled in PHP, MySQL, JavaScript, HTML, CSS, and Laravel. I am also expanding my expertise in React.js and the MERN stack to build scalable and modern web applications.
            </p>

            <p className="text-muted-foreground">
              Through hands-on projects, I am gaining experience in backend development, REST APIs, WordPress customization, database management, and creating responsive, user-friendly interfaces.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              {/* <a
                href="/Nusrah_Naeem_Resume.pdf"
                download="Nusrah_Naeem_Resume"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a> */}
            </div>
          </div>


      <div className="grid grid-cols-1 gap-6">
        <div className="gradient-border p-6 card-hover">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-full bg-primary/10">
              <Code className="h-6 w-6 text-primary" />
            </div>
            <div className="text-left">
              <h4 className="font-semibold text-lg">Building Robust Web Foundations</h4>
              <p className="text-muted-foreground">
                I am a full-stack web developer skilled in HTML, CSS, JavaScript, PHP, and MySQL—creating responsive, optimized, and scalable websites with clean UI and strong backend logic.
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
              <h4 className="font-semibold text-lg">Crafting User-Centered Experiences</h4>
              <p className="text-muted-foreground">
                I apply modern UI/UX principles using Figma to design clean, accessible, and visually appealing interfaces, ensuring smooth user journeys and intuitive interactions.
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
              <h4 className="font-semibold text-lg">Growing as a Full-Stack Developer</h4>
              <p className="text-muted-foreground">
                Through hands-on projects, I’m strengthening my skills in Laravel, MERN stack development, WordPress customization, SEO optimization, API integration, and problem-solving to deliver complete end-to-end web solutions.
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