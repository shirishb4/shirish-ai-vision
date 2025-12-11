import { Star, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const FaralMenu = () => {
  const menuItems = [
    {
      name: "शंकरपाळे",
      englishName: "Shankarpale",
      description: "Soft & sweet, melt-in-the-mouth diamond-shaped delights made with pure ghee",
      price: 450,
      unit: "500g",
      image: "https://images.unsplash.com/photo-1605197161470-5c32f39fc50f?w=400&h=300&fit=crop",
      badge: "Bestseller",
      rating: 4.9,
    },
    {
      name: "चकली",
      englishName: "Chakli",
      description: "Crisp spiral perfection with the authentic taste of rice flour & cumin",
      price: 500,
      unit: "500g",
      image: "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?w=400&h=300&fit=crop",
      badge: "Popular",
      rating: 4.8,
    },
    {
      name: "करंजी",
      englishName: "Karanji",
      description: "Flaky coconut-filled crescents with a hint of cardamom sweetness",
      price: 550,
      unit: "500g",
      image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?w=400&h=300&fit=crop",
      badge: "Premium",
      rating: 4.9,
    },
    {
      name: "बेसन लाडू",
      englishName: "Besan Ladoo",
      description: "Aromatic gram flour ladoos roasted in pure desi ghee with dry fruits",
      price: 600,
      unit: "500g",
      image: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?w=400&h=300&fit=crop",
      badge: null,
      rating: 4.7,
    },
    {
      name: "चिवडा",
      englishName: "Chivda",
      description: "Light, crunchy, aromatic mix of poha, nuts, and spices",
      price: 400,
      unit: "500g",
      image: "https://images.unsplash.com/photo-1626776877312-f6d5f2c93c78?w=400&h=300&fit=crop",
      badge: "Light",
      rating: 4.6,
    },
    {
      name: "अनारसे",
      englishName: "Anarse",
      description: "Traditional rice flour sweet discs with poppy seeds coating",
      price: 650,
      unit: "500g",
      image: "https://images.unsplash.com/photo-1604908177521-8e98e3c4a3d8?w=400&h=300&fit=crop",
      badge: "Traditional",
      rating: 4.8,
    },
    {
      name: "भाजणी चकली",
      englishName: "Bhajani Chakli",
      description: "Multi-grain spiral chakli with authentic roasted flour blend",
      price: 520,
      unit: "500g",
      image: "https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?w=400&h=300&fit=crop",
      badge: "Healthy",
      rating: 4.7,
    },
    {
      name: "रवा लाडू",
      englishName: "Rava Ladoo",
      description: "Semolina ladoos with ghee, coconut, and crunchy cashews",
      price: 550,
      unit: "500g",
      image: "https://images.unsplash.com/photo-1605282339756-12445d5a1c08?w=400&h=300&fit=crop",
      badge: null,
      rating: 4.8,
    },
  ];

  return (
    <section id="menu" className="section-padding rangoli-pattern">
      <div className="container-diwali">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            🪔 फराळ Menu
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Traditional Diwali Delicacies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each item is freshly prepared with pure ingredients and traditional recipes
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {menuItems.map((item, index) => (
            <Card
              key={index}
              className="card-product group overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-square bg-muted">
                <img
                  src={item.image}
                  alt={item.englishName}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {item.badge && (
                  <span className="absolute top-3 left-3 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                    {item.badge}
                  </span>
                )}
              </div>

              <CardContent className="p-4 space-y-3">
                {/* Name */}
                <div>
                  <h3 className="font-heading text-xl font-bold text-foreground">{item.name}</h3>
                  <p className="text-sm text-primary font-medium">{item.englishName}</p>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground line-clamp-2">{item.description}</p>

                {/* Rating */}
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-secondary text-secondary" />
                  <span className="text-sm font-medium text-foreground">{item.rating}</span>
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-2">
                  <div>
                    <p className="font-bold text-lg text-primary">₹{item.price}</p>
                    <p className="text-xs text-muted-foreground">per {item.unit}</p>
                  </div>
                  <Button size="sm" className="bg-primary hover:bg-primary/90 rounded-full">
                    <ShoppingBag className="w-4 h-4 mr-1" />
                    Add
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Custom Order CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Looking for something special?</p>
          <Button variant="outline" className="btn-festive-outline">
            Request Custom Order
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FaralMenu;
