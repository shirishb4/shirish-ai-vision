import { useState } from "react";
import { Mail, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Welcome aboard! 🎉",
        description: "You've successfully subscribed to our newsletter.",
      });
      setEmail("");
    }
  };

  return (
    <section className="section-padding bg-muted/50">
      <div className="container-shop">
        <div className="bg-gradient-to-br from-primary to-accent rounded-3xl p-8 md:p-16 text-center animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-primary-foreground/20 rounded-full flex items-center justify-center">
              <Gift className="w-8 h-8 text-primary-foreground" />
            </div>
          </div>
          
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Get 15% Off Your First Order
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
            Subscribe to our newsletter and stay updated with the latest trends, exclusive offers, and new arrivals.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <div className="relative flex-1">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-12 h-12 rounded-full bg-primary-foreground border-0"
                required
              />
            </div>
            <Button 
              type="submit" 
              size="lg" 
              className="rounded-full bg-foreground text-background hover:bg-foreground/90 h-12 px-8"
            >
              Subscribe
            </Button>
          </form>

          <p className="text-primary-foreground/60 text-sm mt-4">
            No spam, unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
