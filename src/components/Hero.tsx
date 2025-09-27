// Hero.jsx
import { ChevronDown, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import rajProfile from "@/assets/raj-profile-new.webp";

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-cyan/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-neon-purple/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Hello, I'm <span className="gradient-text">Raj Kumar</span>
              </h1>
              <h2 className="text-xl lg:text-2xl text-muted-foreground font-medium">
                Computer Science Undergraduate | Full-Stack Developer | Web
                Designer
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Passionate about building creative projects with MERN stack,
                exploring AI, and solving real-world problems.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={scrollToContact}
                className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold glow-neon"
              >
                <Mail className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                Let's Talk
              </Button>
              <a href="/Raj-Resume.pdf" download="Raj-Kumar-Resume">
                <Button
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg font-semibold transition-smooth"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </Button>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6 pt-4">
              <a
                href="https://github.com/Rajgupta764"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-smooth hover:scale-110 transform"
              >
                <i className="devicon-github-original text-2xl"></i>
              </a>
              <a
                href="https://linkedin.com/in/raj-kumar-cse"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-smooth hover:scale-110 transform"
              >
                <i className="devicon-linkedin-plain text-2xl"></i>
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="gradient-border p-1 rounded-full float">
                <div className="w-80 h-80 rounded-full overflow-hidden bg-card">
                  <img
                    src={rajProfile}
                    alt="Raj Kumar - Computer Science Student & Full-Stack Developer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-neon-cyan rounded-full pulse-glow"></div>
              <div className="absolute -bottom-8 -left-8 w-12 h-12 bg-neon-purple/30 rounded-full blur-sm animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToAbout}
            className="text-muted-foreground hover:text-primary transition-smooth"
          >
            <ChevronDown className="w-8 h-8" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
