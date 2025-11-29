import { Bot, Cog, Lightbulb, Workflow } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const AIExpertise = () => {
  const expertise = [
    {
      icon: Bot,
      title: "AI Agents",
      description: "Designing and implementing intelligent agent systems that automate complex business workflows and decision-making processes.",
    },
    {
      icon: Cog,
      title: "Automation Consulting",
      description: "Identifying automation opportunities and architecting solutions that enhance operational efficiency and reduce manual intervention.",
    },
    {
      icon: Workflow,
      title: "AI-Powered Workflows",
      description: "Creating intelligent project workflows that leverage AI for predictive analytics, resource optimization, and risk management.",
    },
    {
      icon: Lightbulb,
      title: "Knowledge Transfer",
      description: "Simplifying complex AI concepts and empowering teams to adopt and maintain AI-driven systems with confidence.",
    },
  ];

  return (
    <section id="ai-expertise" className="section-padding bg-primary text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            AI Agent Expertise
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6" />
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            Leading the shift toward intelligent automation with practical AI Agent implementations 
            that deliver measurable business value
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {expertise.map((item, index) => (
            <Card 
              key={index}
              className="bg-white/5 backdrop-blur-sm border-accent/20 hover:border-accent/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(186,100%,33%,0.2)] group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors duration-300">
                  <item.icon className="w-7 h-7 text-accent" />
                </div>
                <CardTitle className="text-2xl font-bold text-white">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-secondary text-base leading-relaxed">
                  {item.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key Capabilities */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap justify-center gap-3">
            {["AI Architecture", "Automation Strategy", "Change Management", "Team Enablement", "Enterprise Integration"].map((tag, index) => (
              <span 
                key={index}
                className="px-6 py-3 bg-accent/20 backdrop-blur-sm rounded-full text-accent font-medium border border-accent/30 hover:bg-accent/30 transition-colors duration-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIExpertise;
