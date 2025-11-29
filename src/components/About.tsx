import { Award, Globe, TrendingUp, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Award,
      title: "PMP Certified",
      description: "Since 2004",
    },
    {
      icon: Globe,
      title: "Global Experience",
      description: "UK, APAC & US",
    },
    {
      icon: TrendingUp,
      title: "E2E Delivery",
      description: "Expert in full lifecycle",
    },
    {
      icon: Users,
      title: "Stakeholder Management",
      description: "Fortune 500 clients",
    },
  ];

  return (
    <section id="about" className="section-padding bg-gradient-section">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            About Shirish
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <p className="text-lg text-foreground leading-relaxed">
              With <span className="font-semibold text-accent">25+ years of IT leadership</span>, 
              Shirish Bhambure brings unparalleled expertise in guiding organizations through complex 
              digital transformations and AI adoption initiatives.
            </p>

            <p className="text-lg text-foreground leading-relaxed">
              As a <span className="font-semibold text-primary">PMP certified professional since 2004</span>, 
              he has successfully delivered end-to-end solutions for global clients across diverse industries, 
              consistently exceeding customer satisfaction benchmarks.
            </p>

            <p className="text-lg text-foreground leading-relaxed">
              Shirish specializes in <span className="font-semibold text-accent">AI Automation, 
              Solution Architecture, and Intelligent Operations Center design</span>, combining deep 
              technical knowledge with strategic business acumen.
            </p>

            <p className="text-lg text-foreground leading-relaxed">
              His approach is characterized by precision, analytical thinking, and a visionary mindset 
              that helps organizations not just implement technology, but transform their operations 
              for sustainable competitive advantage.
            </p>
          </div>

          {/* Right - Highlights Grid */}
          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="card-elegant p-6 text-center group hover:border-accent/50 border-2 border-transparent"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-2xl mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                  <item.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-bold text-lg text-primary mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
