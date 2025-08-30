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
              "Aspiring Front-End "" <br /> Continuously Learning and Building Interactive Web Experiences
            </h3>

            <p className="text-muted-foreground">
              I am a motivated student passionate about learning web development, focusing on React.js and the MERN stack to enhance my technical skills.
            </p>

            <p className="text-muted-foreground">
              Through my practice projects, I am gaining experience in React components, API integration, and state management to build interactive web applications.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
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
                  <h4 className="font-semibold text-lg"> Building the Foundationst</h4>
                  <p className="text-muted-foreground">
                    I am a passionate front-end developer skilled in React.js, creating responsive, user-friendly interfaces using HTML, CSS, JavaScript, and Bootstrap.
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
                  <h4 className="font-semibold text-lg">Exploring UI/UX Designn</h4>
                  <p className="text-muted-foreground">
                    I am exploring modern UI design principles using Figma and improving my ability to create visually appealing, user-friendly, and accessible web layouts.
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
                  <h4 className="font-semibold text-lg">Gaining Practical Experience</h4>
                  <p className="text-muted-foreground">
                    Through my practice projects, I am gaining experience in React components, API integration, and state management to build interactive web applications.
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