import { useState } from "react";
import { Phone, Mail, MessageCircle, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const FaralContact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent! 🪔",
      description: "Thank you for reaching out. We'll contact you soon!",
    });
    setFormData({ name: "", phone: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      value: "+91 98765 43210",
      link: "tel:+919876543210",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "+91 98765 43210",
      link: "https://wa.me/919876543210?text=Hi! I'm interested in ordering Diwali Faral",
    },
    {
      icon: Mail,
      title: "Email",
      value: "komal.faral@gmail.com",
      link: "mailto:komal.faral@gmail.com",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Pune, Maharashtra",
      link: "#",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-warm">
      <div className="container-diwali">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8 animate-slide-up">
            <div>
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                📞 Get in Touch
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                संपर्क करा
              </h2>
              <p className="text-lg text-muted-foreground">
                Ready to order? Have questions? We'd love to hear from you!
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="card-festive p-4 flex items-center gap-4 hover:bg-primary/5 transition-colors"
                >
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.title}</p>
                    <p className="font-medium text-foreground">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <div className="p-6 bg-green-50 border border-green-200 rounded-2xl">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-green-500 rounded-xl">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Quick Order via WhatsApp</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Fastest way to place your order or ask questions
                  </p>
                  <a
                    href="https://wa.me/919876543210?text=Hi! I'm interested in ordering Diwali Faral for 2026"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-full text-sm font-medium hover:bg-green-600 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card-festive p-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
              Pre-Book Your Faral 🪔
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Your Name
                </label>
                <Input
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-background border-border"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Phone / WhatsApp
                </label>
                <Input
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="bg-background border-border"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Your Message / Order Details
                </label>
                <Textarea
                  placeholder="Tell us what faral items you'd like to order..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={4}
                  className="bg-background border-border"
                />
              </div>
              <Button type="submit" className="w-full btn-festive">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>

            <p className="text-center text-sm text-muted-foreground mt-6">
              We typically respond within 2-4 hours during business hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaralContact;
