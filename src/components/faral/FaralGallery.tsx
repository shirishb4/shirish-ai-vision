const FaralGallery = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1605197161470-5c32f39fc50f?w=600&h=400&fit=crop",
      alt: "Fresh Shankarpale",
      caption: "Golden Shankarpale",
    },
    {
      src: "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?w=600&h=400&fit=crop",
      alt: "Crispy Chakli",
      caption: "Spiral Chakli",
    },
    {
      src: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?w=600&h=400&fit=crop",
      alt: "Besan Ladoo",
      caption: "Besan Ladoo",
    },
    {
      src: "https://images.unsplash.com/photo-1604908177521-8e98e3c4a3d8?w=600&h=400&fit=crop",
      alt: "Traditional Sweets",
      caption: "Traditional Setup",
    },
    {
      src: "https://images.unsplash.com/photo-1605282339756-12445d5a1c08?w=600&h=400&fit=crop",
      alt: "Rava Ladoo",
      caption: "Rava Ladoo",
    },
    {
      src: "https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?w=600&h=400&fit=crop",
      alt: "Festive Preparation",
      caption: "Made with Love",
    },
  ];

  return (
    <section id="gallery" className="section-padding bg-background">
      <div className="container-diwali">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            📸 Gallery
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            A Peek into Our Kitchen
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Glimpses of our homemade delicacies and the love that goes into making them
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl ${
                index === 0 || index === 5 ? "md:col-span-1 md:row-span-1" : ""
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-primary-foreground font-heading font-semibold">{image.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Diwali Ambiance */}
        <div className="mt-12 p-8 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-3xl text-center">
          <p className="text-4xl mb-4">🪔 ✨ 🎆 ✨ 🪔</p>
          <p className="font-heading text-xl text-foreground font-medium">
            "शुभ दीपावली! May your Diwali be as sweet as our faral"
          </p>
        </div>
      </div>
    </section>
  );
};

export default FaralGallery;
