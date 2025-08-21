
import { Heart, Users, Coffee } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Story</h2>
          <p className="section-subtitle">
            Founded with love and a passion for exceptional coffee, Bella's Café has been 
            serving our community with warmth and craftsmanship for over a decade.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-coffee-medium rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-serif font-semibold mb-3 text-gray-800">Made with Love</h3>
            <p className="text-gray-600">
              Every cup is crafted with care, using the finest beans sourced from sustainable farms around the world.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-coffee-medium rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-serif font-semibold mb-3 text-gray-800">Community First</h3>
            <p className="text-gray-600">
              We're not just a café, we're a gathering place where neighbors become friends and memories are made.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-coffee-medium rounded-full flex items-center justify-center mx-auto mb-4">
              <Coffee className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-serif font-semibold mb-3 text-gray-800">Perfect Brew</h3>
            <p className="text-gray-600">
              Our skilled baristas take pride in creating the perfect cup, whether it's a classic espresso or specialty latte.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
