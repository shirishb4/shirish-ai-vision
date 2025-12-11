import { Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import faralImage from "@/assets/diwali-faral.jpg";

const FaralHero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 rangoli-pattern" />
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Decorative Elements */}
      <div className="absolute top-32 left-10 text-6xl animate-float opacity-60">🪔</div>
      <div className="absolute top-40 right-20 text-5xl animate-float opacity-50" style={{ animationDelay: "1s" }}>✨</div>
      <div className="absolute bottom-32 left-20 text-4xl animate-float opacity-40" style={{ animationDelay: "0.5s" }}>🌸</div>
      <div className="absolute bottom-40 right-10 text-5xl animate-float opacity-50" style={{ animationDelay: "1.5s" }}>🪔</div>

      <div className="container-diwali relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 rounded-full">
              <Sparkles className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium text-foreground">Diwali 2026 Special</span>
            </div>
            
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              घराच्या उत्सवाची चव
              <span className="block text-primary mt-2">Authentic Maharashtrian Faral</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Experience the warmth of traditional homemade Diwali delicacies. 
              Fresh, pure, and made with love — just like your grandmother's recipes. 
              <span className="text-primary font-medium"> Small-batch, made-to-order.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-festive group">
                Order Faral for Diwali 2026
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="btn-festive-outline">
                View Menu
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🏠</span>
                <span className="text-sm text-muted-foreground">100% Homemade</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🌿</span>
                <span className="text-sm text-muted-foreground">No Preservatives</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✨</span>
                <span className="text-sm text-muted-foreground">Fresh Ingredients</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl" />
              
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden border-4 border-diwali-gold/30 diya-glow">
                <img
                  src={faralImage}
                  alt="Traditional Maharashtrian Diwali Faral"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-2xl shadow-xl border border-border animate-float">
                <p className="text-sm text-muted-foreground">Pre-booking Open</p>
                <p className="font-heading text-xl font-bold text-primary">Diwali 2026</p>
              </div>

              {/* Rating Badge */}
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground p-4 rounded-full shadow-xl animate-float" style={{ animationDelay: "0.5s" }}>
                <div className="text-center">
                  <p className="text-2xl font-bold">4.9</p>
                  <p className="text-xs">★★★★★</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaralHero;
