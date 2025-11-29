import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Shirish has the remarkable ability to simplify complex technical concepts and deliver outcomes with precision. His strategic thinking and attention to detail are exceptional.",
      author: "Senior Director, Fortune 500 Technology Company",
      role: "Global Delivery Leader",
    },
    {
      quote: "Working with Shirish was transformative for our organization. His expertise in AI automation and project leadership helped us achieve results we thought were years away.",
      author: "VP of Operations, Leading Financial Services Firm",
      role: "Digital Transformation Initiative",
    },
    {
      quote: "Shirish's calm demeanor and analytical approach bring clarity to even the most challenging situations. He's a trusted advisor who consistently exceeds expectations.",
      author: "CTO, International Consulting Organization",
      role: "Strategic Technology Partner",
    },
  ];

  return (
    <section id="testimonials" className="section-padding bg-gradient-section">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Client Testimonials
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Trusted by leaders across industries for delivering exceptional results
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="card-elegant border-2 border-transparent hover:border-accent/30 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <Quote className="w-12 h-12 text-accent/30 group-hover:text-accent/50 transition-colors duration-300" />
                </div>

                <blockquote className="text-foreground leading-relaxed mb-6 text-lg">
                  "{testimonial.quote}"
                </blockquote>

                <div className="pt-6 border-t border-border">
                  <p className="font-bold text-primary mb-1">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
