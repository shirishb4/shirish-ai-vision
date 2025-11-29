import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      category: "AI & Automation",
      skills: ["AI Agent Systems", "Automation Architecture", "Machine Learning Operations", "Intelligent Process Automation"],
    },
    {
      category: "Project Management",
      skills: ["PMP Certified", "Agile/Scrum", "CMMi", "Stakeholder Management", "Risk Management", "Resource Planning"],
    },
    {
      category: "Technical Leadership",
      skills: ["Solution Architecture", "E2E Delivery", "SDLC", "DevOps", "Cloud Technologies", "System Integration"],
    },
    {
      category: "Business Acumen",
      skills: ["Strategic Planning", "Change Management", "Vendor Management", "Quality Assurance", "Process Optimization"],
    },
  ];

  return (
    <section id="skills" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="card-elegant p-8 border-2 border-transparent hover:border-accent/30 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-8 bg-accent rounded-full" />
                <h3 className="text-2xl font-bold text-primary">
                  {category.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <Badge
                    key={i}
                    variant="secondary"
                    className="px-4 py-2 text-sm font-medium bg-muted hover:bg-accent/10 hover:text-accent border border-transparent hover:border-accent/30 transition-all duration-300"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Core Competencies Banner */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6 text-lg">Core Competencies</p>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              "Global Team Leadership",
              "Client Relationship Management",
              "Digital Transformation",
              "AI Strategy",
              "Offshore/Onsite Coordination",
              "Quality Excellence",
            ].map((competency, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-primary/5 border-2 border-primary/10 rounded-xl hover:bg-accent/10 hover:border-accent/30 transition-all duration-300"
              >
                <span className="font-semibold text-primary">{competency}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
