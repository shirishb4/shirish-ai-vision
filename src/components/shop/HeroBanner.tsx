import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroBanner = () => {
  return (
    <section className="bg-gradient-hero min-h-[600px] md:min-h-[700px] relative overflow-hidden">
      <div className="container-shop py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Content */}
          <div className="space-y-6 animate-slide-up">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
              New Collection 2024
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Discover Your{" "}
              <span className="text-primary">Perfect Style</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-lg">
              Explore our curated collection of premium products. Find everything you need to express your unique style.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="rounded-full px-8 gap-2 bg-primary hover:bg-primary/90">
                Shop Now <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8">
                View Collection
              </Button>
            </div>
            
            {/* Stats */}
            <div className="flex gap-8 pt-8">
              <div>
                <p className="font-heading text-3xl font-bold text-foreground">200+</p>
                <p className="text-muted-foreground text-sm">Brands</p>
              </div>
              <div>
                <p className="font-heading text-3xl font-bold text-foreground">5K+</p>
                <p className="text-muted-foreground text-sm">Products</p>
              </div>
              <div>
                <p className="font-heading text-3xl font-bold text-foreground">30K+</p>
                <p className="text-muted-foreground text-sm">Customers</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=700&fit=crop"
                alt="Fashion collection showcase"
                className="w-full max-w-md mx-auto rounded-3xl shadow-2xl object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute top-10 right-10 w-20 h-20 bg-primary/20 rounded-full blur-2xl" />
            <div className="absolute bottom-20 left-0 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
            
            {/* Floating badge */}
            <div className="absolute bottom-10 left-0 bg-card p-4 rounded-2xl shadow-lg animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <p className="text-sm text-muted-foreground">Starting from</p>
              <p className="font-heading text-2xl font-bold text-primary">$29.99</p>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/30 -skew-x-12 transform origin-top-right -z-10" />
    </section>
  );
};

export default HeroBanner;
