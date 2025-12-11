import { Facebook, Instagram, Twitter, Youtube, CreditCard, Truck, Shield, Headphones } from "lucide-react";

const features = [
  { icon: Truck, title: "Free Shipping", desc: "On orders over $50" },
  { icon: Shield, title: "Secure Payment", desc: "100% secure checkout" },
  { icon: Headphones, title: "24/7 Support", desc: "Dedicated support" },
  { icon: CreditCard, title: "Easy Returns", desc: "30-day returns" },
];

const footerLinks = {
  Shop: ["New Arrivals", "Best Sellers", "Sale", "Collections", "Gift Cards"],
  Help: ["FAQs", "Shipping", "Returns", "Size Guide", "Track Order"],
  Company: ["About Us", "Careers", "Press", "Blog", "Contact"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

const ShopFooter = () => {
  return (
    <footer id="about" className="bg-foreground text-background">
      {/* Features Bar */}
      <div className="border-b border-background/10">
        <div className="container-shop py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="flex items-center gap-4">
                <div className="w-12 h-12 bg-background/10 rounded-full flex items-center justify-center">
                  <feature.icon className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-medium">{feature.title}</p>
                  <p className="text-sm text-background/60">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-shop py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-lg">S</span>
              </div>
              <span className="font-heading font-bold text-xl">ShopHub</span>
            </div>
            <p className="text-background/70 text-sm mb-6">
              Your one-stop destination for all your shopping needs. Quality products, great prices, and exceptional service.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-heading font-semibold mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-background/70 hover:text-background transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container-shop py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/60 text-sm">
              © 2024 ShopHub. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              <img src="https://img.icons8.com/color/48/visa.png" alt="Visa" className="h-8" />
              <img src="https://img.icons8.com/color/48/mastercard.png" alt="Mastercard" className="h-8" />
              <img src="https://img.icons8.com/color/48/paypal.png" alt="PayPal" className="h-8" />
              <img src="https://img.icons8.com/color/48/amex.png" alt="Amex" className="h-8" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ShopFooter;
