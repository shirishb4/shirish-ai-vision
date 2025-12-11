import { Heart, ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 299.99,
    originalPrice: 399.99,
    rating: 4.8,
    reviews: 128,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "Elegant Summer Dress",
    price: 89.99,
    originalPrice: null,
    rating: 4.6,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=400&fit=crop",
    badge: "New",
  },
  {
    id: 3,
    name: "Classic Leather Watch",
    price: 199.99,
    originalPrice: 249.99,
    rating: 4.9,
    reviews: 256,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    badge: "Sale",
  },
  {
    id: 4,
    name: "Designer Sunglasses",
    price: 159.99,
    originalPrice: null,
    rating: 4.7,
    reviews: 74,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
    badge: null,
  },
  {
    id: 5,
    name: "Minimalist Backpack",
    price: 79.99,
    originalPrice: 99.99,
    rating: 4.5,
    reviews: 142,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
    badge: "Sale",
  },
  {
    id: 6,
    name: "Sport Running Shoes",
    price: 129.99,
    originalPrice: null,
    rating: 4.8,
    reviews: 198,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    badge: "Trending",
  },
  {
    id: 7,
    name: "Casual Sneakers",
    price: 89.99,
    originalPrice: 119.99,
    rating: 4.4,
    reviews: 67,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop",
    badge: null,
  },
  {
    id: 8,
    name: "Smart Fitness Band",
    price: 49.99,
    originalPrice: 69.99,
    rating: 4.3,
    reviews: 312,
    image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400&h=400&fit=crop",
    badge: "Hot Deal",
  },
];

const FeaturedProducts = () => {
  return (
    <section id="products" className="section-padding bg-muted/30">
      <div className="container-shop">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Products
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl">
              Handpicked items from our latest collection that you'll absolutely love
            </p>
          </div>
          <Button variant="outline" className="rounded-full self-start md:self-auto">
            View All Products
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group card-product overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Badge */}
                {product.badge && (
                  <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-medium ${
                    product.badge === "Sale" || product.badge === "Hot Deal"
                      ? "bg-destructive text-destructive-foreground"
                      : product.badge === "New"
                      ? "bg-accent text-accent-foreground"
                      : "bg-primary text-primary-foreground"
                  }`}>
                    {product.badge}
                  </span>
                )}

                {/* Quick Actions */}
                <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button size="icon" variant="secondary" className="rounded-full w-9 h-9">
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>

                {/* Add to Cart */}
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button className="w-full rounded-full gap-2" size="sm">
                    <ShoppingCart className="w-4 h-4" /> Add to Cart
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-medium text-foreground line-clamp-1 mb-2">
                  {product.name}
                </h3>
                
                {/* Rating */}
                <div className="flex items-center gap-1 mb-2">
                  <Star className="w-4 h-4 fill-accent text-accent" />
                  <span className="text-sm text-foreground font-medium">{product.rating}</span>
                  <span className="text-sm text-muted-foreground">({product.reviews})</span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-2">
                  <span className="font-heading font-bold text-lg text-primary">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
