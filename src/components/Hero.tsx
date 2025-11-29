import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import profileImg from "@/assets/profile-placeholder.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-hero opacity-95" />
        <img
          src={heroBg}
          alt="AI Technology Background"
          className="w-full h-full object-cover opacity-30"
        />
        {/* Animated grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(186,100%,33%,0.05)_1px,transparent_1px),linear-gradient(to_bottom,hsl(186,100%,33%,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-white space-y-8 animate-fade-in-up">
            <div className="inline-block px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-full border border-accent/30">
              <span className="text-accent text-sm font-medium">AI Automation Specialist</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Shirish Bhambure
            </h1>
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-secondary">
              AI Automation Consultant & Project Leadership Expert
            </h2>
            
            <p className="text-lg md:text-xl text-secondary leading-relaxed max-w-2xl">
              Helping businesses adopt AI-driven solutions with precision, clarity, and strategic impact. 
              25+ years of global experience in IT leadership and innovation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                onClick={scrollToContact}
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-[0_0_30px_hsl(186,100%,33%,0.3)] hover:shadow-[0_0_40px_hsl(186,100%,33%,0.5)] transition-all duration-300"
              >
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                onClick={scrollToContact}
                className="border-2 border-secondary/50 hover:border-accent hover:bg-accent/10 text-white font-semibold px-8 py-6 text-lg rounded-xl backdrop-blur-sm transition-all duration-300"
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative lg:justify-self-end animate-float">
            <div className="relative w-full max-w-md mx-auto">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-accent/30 rounded-full blur-3xl" />
              
              {/* Image container */}
              <div className="relative rounded-3xl overflow-hidden border-4 border-accent/30 shadow-[0_0_50px_hsl(186,100%,33%,0.3)]">
                <img
                  src={profileImg}
                  alt="Shirish Bhambure"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-2xl animate-fade-in-up">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">25+</div>
                  <div className="text-sm text-muted-foreground font-medium">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-secondary/50 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-accent rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
