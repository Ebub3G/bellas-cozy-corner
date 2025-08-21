
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Bella's Café is my daily escape. The coffee is exceptional and the atmosphere is so welcoming. It truly feels like a home away from home.",
      author: "Sarah M.",
      rating: 5
    },
    {
      quote: "The best coffee in town! I love how they remember my order and always have a smile. The croissants are absolutely divine too.",
      author: "Michael R.",
      rating: 5
    },
    {
      quote: "This place has the perfect ambiance for work or catching up with friends. Great WiFi, amazing coffee, and the friendliest staff.",
      author: "Emma L.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle">
            Don't just take our word for it - hear from our amazing community of coffee lovers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="testimonial-quote">
                "{testimonial.quote}"
              </blockquote>
              <cite className="testimonial-author">
                — {testimonial.author}
              </cite>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
