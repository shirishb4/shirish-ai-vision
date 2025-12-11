import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const PromoSection = () => {
  return (
    <section id="sale" className="section-padding bg-background">
      <div className="container-shop">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Promo Card 1 */}
          <div className="relative overflow-hidden rounded-3xl bg-secondary p-8 md:p-12 min-h-[400px] flex flex-col justify-end animate-fade-in">
            <div className="absolute top-0 right-0 w-2/3 h-full">
              <img
                src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=500&h=600&fit=crop"
                alt="Summer collection"
                className="w-full h-full object-cover opacity-60"
              />
            </div>
            <div className="relative z-10 max-w-sm">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Up to 50% Off
              </span>
              <h3 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Summer Collection Sale
              </h3>
              <p className="text-muted-foreground mb-6">
                Don't miss out on our biggest summer sale. Limited time only!
              </p>
              <Button className="rounded-full gap-2">
                Shop Sale <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Promo Card 2 */}
          <div className="relative overflow-hidden rounded-3xl bg-primary p-8 md:p-12 min-h-[400px] flex flex-col justify-end animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="absolute top-0 right-0 w-2/3 h-full">
              <img
                src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=500&h=600&fit=crop"
                alt="New arrivals"
                className="w-full h-full object-cover opacity-40"
              />
            </div>
            <div className="relative z-10 max-w-sm">
              <span className="inline-block px-3 py-1 bg-primary-foreground/20 text-primary-foreground rounded-full text-sm font-medium mb-4">
                New Arrivals
              </span>
              <h3 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Fresh Styles Just Dropped
              </h3>
              <p className="text-primary-foreground/80 mb-6">
                Be the first to explore our newest additions to the collection.
              </p>
              <Button variant="secondary" className="rounded-full gap-2">
                Explore Now <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
