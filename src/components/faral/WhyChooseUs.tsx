import { Home, Leaf, Shield, Heart, Award, Clock } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Home,
      title: "100% Homemade",
      description: "Prepared in a loving home kitchen, not a factory. Every batch has a personal touch.",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Leaf,
      title: "Fresh Ingredients Only",
      description: "We source the finest quality ingredients — pure ghee, fresh flour, and premium dry fruits.",
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      icon: Shield,
      title: "No Preservatives",
      description: "Zero chemicals, zero preservatives. Just pure, natural goodness that's safe for everyone.",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      icon: Heart,
      title: "Traditional Recipes",
      description: "Authentic Maharashtrian recipes passed through generations, preserving our cultural heritage.",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: Award,
      title: "Hygienic Kitchen",
      description: "Maintained with utmost cleanliness and care. Your health is our priority.",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      icon: Clock,
      title: "Made to Order",
      description: "Each order is freshly prepared after confirmation, ensuring maximum freshness and taste.",
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
  ];

  return (
    <section className="section-padding bg-gradient-warm">
      <div className="container-diwali">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Why Choose Us
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            आमचं वेगळेपण
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            What makes our faral special? It's the love, tradition, and purity in every bite.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card-festive p-8 text-center group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className={`w-8 h-8 ${feature.color}`} />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Trust Banner */}
        <div className="mt-16 p-8 bg-primary/5 rounded-3xl border border-primary/20 text-center">
          <p className="text-lg text-foreground font-medium mb-2">
            🪔 Trusted by 500+ happy customers since 2020
          </p>
          <p className="text-muted-foreground">
            Join our Diwali family and taste the difference of authentic homemade faral
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
