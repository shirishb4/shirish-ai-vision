import { Heart, Sparkles, Shield, Clock } from "lucide-react";
import komalImage from "@/assets/komal-dolas.png";

const FaralAbout = () => {
  const values = [
    {
      icon: Heart,
      title: "Made with Love",
      description: "Every piece is crafted with the same care and affection as cooking for my own family.",
    },
    {
      icon: Sparkles,
      title: "Traditional Recipes",
      description: "Authentic recipes passed down through generations, preserving the true Maharashtrian taste.",
    },
    {
      icon: Shield,
      title: "Pure & Hygienic",
      description: "Prepared in a clean, hygienic home kitchen with premium quality ingredients.",
    },
    {
      icon: Clock,
      title: "Fresh & Made to Order",
      description: "Each batch is freshly prepared after you place your order for maximum freshness.",
    },
  ];

  return (
    <section id="about" className="section-padding bg-gradient-festive">
      <div className="container-diwali">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative animate-fade-in">
            <div className="relative">
              {/* Decorative Frame */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl" />
              
              <div className="relative rounded-3xl overflow-hidden border-4 border-diwali-gold/30">
                <img
                  src={komalImage}
                  alt="Komal - The Maker"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Experience Badge */}
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl">
                <p className="text-3xl font-bold">15+</p>
                <p className="text-sm">Years of Love</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8 animate-slide-up">
            <div>
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                About the Maker
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                नमस्कार! मी कोमल 🙏
              </h2>
              <h3 className="text-xl text-primary font-medium mb-6">
                Welcome to My Kitchen
              </h3>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Growing up in a traditional Maharashtrian household, Diwali was always about the 
                <span className="text-foreground font-medium"> aroma of freshly made faral</span> filling every corner of our home. 
                Those precious moments of making chakli with my आई, the sweet taste of shankarpale — 
                these memories shaped my love for our culinary traditions.
              </p>
              <p>
                Today, I bring that same warmth and authenticity to your Diwali celebrations. 
                Every piece of faral is prepared with 
                <span className="text-foreground font-medium"> pure ghee, fresh ingredients, and zero preservatives</span> — 
                exactly how our grandmothers made it.
              </p>
              <p className="text-foreground font-medium italic">
                "जेवण म्हणजे फक्त खाणं नाही, ते प्रेमाचं expression आहे."
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {values.map((value, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-card rounded-xl">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <value.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">{value.title}</h4>
                    <p className="text-xs text-muted-foreground mt-1">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaralAbout;
