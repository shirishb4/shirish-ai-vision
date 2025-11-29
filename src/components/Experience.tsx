import { Building2, CheckCircle2 } from "lucide-react";

const Experience = () => {
  const companies = [
    {
      name: "Tech Mahindra",
      role: "Senior Project Manager",
      achievements: [
        "Led E2E delivery for Fortune 500 clients",
        "Achieved 95%+ customer satisfaction scores",
        "Zero Non-Conformances in Quality Audits",
      ],
    },
    {
      name: "ATOS",
      role: "Project Delivery Lead",
      achievements: [
        "Managed complex offshore-onsite coordination",
        "Implemented CMMi and Agile methodologies",
        "Received Best Team Award for exceptional delivery",
      ],
    },
    {
      name: "Blue Star Infotech",
      role: "Solution Architect",
      achievements: [
        "Designed enterprise-scale solution architectures",
        "Pioneered intelligent operations center frameworks",
        "Led stakeholder engagement across APAC region",
      ],
    },
    {
      name: "Mastek",
      role: "Technical Lead",
      achievements: [
        "Drove SDLC excellence across multiple projects",
        "Mentored and developed high-performing teams",
        "Established best practices for project governance",
      ],
    },
    {
      name: "Trigyn Technologies",
      role: "Senior Consultant",
      achievements: [
        "Delivered mission-critical systems for US clients",
        "Managed complex stakeholder relationships",
        "Optimized delivery processes for efficiency",
      ],
    },
  ];

  return (
    <section id="experience" className="section-padding bg-gradient-section">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Professional Journey
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A proven track record of delivering excellence across leading global organizations
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-accent/30 hidden sm:block" />

            {companies.map((company, index) => (
              <div
                key={index}
                className={`relative mb-12 ${
                  index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2 md:ml-auto"
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background transform -translate-x-2 md:-translate-x-1/2 hidden sm:block shadow-[0_0_20px_hsl(186,100%,33%,0.5)]" />

                <div className={`card-elegant p-8 ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-primary mb-1">
                        {company.name}
                      </h3>
                      <p className="text-accent font-medium">{company.role}</p>
                    </div>
                  </div>

                  <div className="space-y-3 mt-6">
                    {company.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-foreground leading-relaxed">
                          {achievement}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
