import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitch,
  Twitter,
  Github,
} from "lucide-react";


export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        {/* Subtitle */}
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* LEFT SIDE — CONTACT INFO */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6 justify-center">
              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:hello@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    nusrah.naeem111@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+11234567890"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +92 332 3293719
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <span className="text-muted-foreground hover:text-primary transition-colors cursor-default">
                    Karachi, Sindh, Pakistan
                  </span>
                </div>
              </div>
            </div>

            {/* Social Icons */}
           
          </div>

          {/* RIGHT SIDE — SOCIAL LINKS CARD */}
          <div className="bg-card p-8 rounded-lg shadow-xs text-center">
            <h3 className="text-2xl font-semibold mb-4">Let's Connect</h3>
            <p className="text-gray-600 mb-6">
              I'm active on social media. Let's build something amazing together!
            </p>

            <div className="flex justify-center gap-5">
              {<a
                href="https://www.linkedin.com/in/nusrah-naeem/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-background shadow-md hover:bg-primary hover:text-white transition duration-300"
              >
                <Linkedin size={28} />
              </a> }
              {/* <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-background shadow-md hover:bg-primary hover:text-white transition duration-300"
              >
                <Twitter size={28} />
              </a> */}
              {/* <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-background shadow-md hover:bg-primary hover:text-white transition duration-300"
              >
                <Instagram size={28} />
              </a> */}
              <a
                href="https://github.com/NusrahNaeem"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-background shadow-md hover:bg-primary hover:text-white transition duration-300"
              >
                <Github size={28} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};



