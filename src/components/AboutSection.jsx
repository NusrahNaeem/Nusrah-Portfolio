import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              MERN Stack & Full-Stack Developer <br /> Building Modern, Responsive Web Applications
            </h3>

            <p className="text-muted-foreground">
              I am a passionate full-stack developer specializing in the MERN stack and React.js, with strong skills in JavaScript, HTML, and CSS. I also bring experience in PHP, MySQL, and Laravel to deliver versatile web solutions.
            </p>

            <p className="text-muted-foreground">
              Through hands-on projects, I build scalable backends, RESTful APIs, and responsive, user-friendly interfaces while continuously exploring modern web technologies and best practices.
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

          {/* Right Column: Highlights */}
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Building Scalable Web Foundations</h4>
                  <p className="text-muted-foreground">
                    I create responsive, optimized web applications using React.js, Node.js, MongoDB, HTML, CSS, and JavaScript, with clean UI and robust backend logic.
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
                  <h4 className="font-semibold text-lg">Crafting Intuitive User Experiences</h4>
                  <p className="text-muted-foreground">
                    I apply modern UI/UX principles and tools like Figma to design visually appealing, accessible interfaces that ensure smooth and intuitive user journeys.
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
                  <h4 className="font-semibold text-lg">Growing as a Modern Full-Stack Developer</h4>
                  <p className="text-muted-foreground">
                    Through real-world projects, I am strengthening my skills in the MERN stack, React.js, REST API integration, PHP/Laravel, WordPress customization, and problem-solving to deliver complete end-to-end web solutions.
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