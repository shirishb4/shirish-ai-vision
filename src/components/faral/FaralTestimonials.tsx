import { Quote, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const FaralTestimonials = () => {
  const testimonials = [
    {
      quote: "आईच्या हातच्या चवीसारखंच! The chakli and shankarpale took me back to my childhood Diwalis. Absolutely authentic taste!",
      author: "Sneha Kulkarni",
      location: "Pune",
      rating: 5,
    },
    {
      quote: "First time ordering homemade faral online and I'm so impressed. Fresh, hygienic packaging, and the taste was divine. Will order again!",
      author: "Rajesh Patil",
      location: "Mumbai",
      rating: 5,
    },
    {
      quote: "My NRI relatives were thrilled to receive this. They said it reminded them of home. Thank you for keeping our traditions alive!",
      author: "Meera Joshi",
      location: "Nashik",
      rating: 5,
    },
    {
      quote: "The karanji was simply outstanding — crispy outside, perfectly sweet coconut filling inside. Best I've had in years!",
      author: "Anita Deshpande",
      location: "Thane",
      rating: 5,
    },
    {
      quote: "Ordered for my office Diwali celebration. Everyone loved it! The besan ladoo were the first to finish. Highly recommended!",
      author: "Vikram Shah",
      location: "Navi Mumbai",
      rating: 5,
    },
    {
      quote: "खरंच घरच्यासारखी चव! No preservatives, pure ghee — you can taste the quality. My go-to for Diwali faral now!",
      author: "Priya Bhosale",
      location: "Kolhapur",
      rating: 5,
    },
  ];

  return (
    <section id="reviews" className="section-padding bg-gradient-festive">
      <div className="container-diwali">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            ❤️ Customer Love
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from real customers who experienced the taste of authentic homemade faral
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="card-festive border-2 border-transparent hover:border-diwali-gold/30"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="w-10 h-10 text-primary/20" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-foreground leading-relaxed mb-6">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="pt-4 border-t border-border">
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "500+", label: "Happy Customers" },
            { number: "4.9", label: "Average Rating" },
            { number: "2000+", label: "Orders Delivered" },
            { number: "100%", label: "Satisfaction Rate" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="font-heading text-4xl font-bold text-primary">{stat.number}</p>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaralTestimonials;
