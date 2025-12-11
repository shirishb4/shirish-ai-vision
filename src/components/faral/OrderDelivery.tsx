import { Calendar, MapPin, Package, Truck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const OrderDelivery = () => {
  const deliveryInfo = [
    {
      icon: Calendar,
      title: "Pre-Booking Opens",
      description: "Pre-booking for Diwali 2026 starts from September 2026. Early birds get special discounts!",
      highlight: "Book Early, Save More",
    },
    {
      icon: MapPin,
      title: "Delivery Areas",
      description: "We deliver across Pune, Mumbai, Thane, Navi Mumbai, and Nashik. Contact us for other locations.",
      highlight: "Pan-Maharashtra Delivery",
    },
    {
      icon: Package,
      title: "Festive Packaging",
      description: "Eco-friendly, beautiful festive boxes perfect for gifting. Each box tells a story of tradition.",
      highlight: "Gift-Ready Packaging",
    },
    {
      icon: Truck,
      title: "Safe Delivery",
      description: "Carefully packed and delivered to ensure your faral reaches fresh and intact.",
      highlight: "Freshness Guaranteed",
    },
  ];

  const orderSteps = [
    { step: "1", title: "Choose", description: "Select your favorite faral items from our menu" },
    { step: "2", title: "Order", description: "Place your order via WhatsApp or our contact form" },
    { step: "3", title: "Confirm", description: "Confirm your order and make the payment" },
    { step: "4", title: "Receive", description: "Get freshly made faral delivered to your doorstep" },
  ];

  return (
    <section id="order" className="section-padding rangoli-pattern">
      <div className="container-diwali">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            📦 Order & Delivery
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            How to Order
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Simple steps to bring authentic homemade faral to your Diwali celebration
          </p>
        </div>

        {/* Order Steps */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {orderSteps.map((item, index) => (
            <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                {item.step}
              </div>
              <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Delivery Info Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {deliveryInfo.map((info, index) => (
            <Card key={index} className="card-festive" style={{ animationDelay: `${index * 100}ms` }}>
              <CardContent className="p-6 flex gap-4">
                <div className="p-3 bg-primary/10 rounded-xl h-fit">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <span className="inline-block px-2 py-1 bg-secondary/20 text-secondary-foreground rounded text-xs font-medium mb-2">
                    {info.highlight}
                  </span>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2">{info.title}</h3>
                  <p className="text-muted-foreground">{info.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pricing Info */}
        <div className="mt-12 p-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl mb-2">🎁</p>
              <h3 className="font-semibold text-foreground mb-2">Gift Boxes</h3>
              <p className="text-muted-foreground text-sm">Starting from ₹999</p>
            </div>
            <div>
              <p className="text-4xl mb-2">👨‍👩‍👧‍👦</p>
              <h3 className="font-semibold text-foreground mb-2">Family Pack</h3>
              <p className="text-muted-foreground text-sm">Starting from ₹1,999</p>
            </div>
            <div>
              <p className="text-4xl mb-2">🏢</p>
              <h3 className="font-semibold text-foreground mb-2">Corporate Orders</h3>
              <p className="text-muted-foreground text-sm">Bulk discounts available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderDelivery;
