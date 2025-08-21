
import { Gift } from "lucide-react";

const PromoBanner = () => {
  return (
    <section className="py-16 promo-banner">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center mb-4">
          <Gift className="h-8 w-8 text-coffee-dark mr-3" />
          <h2 className="text-3xl font-serif font-bold text-coffee-dark">Special Offer</h2>
        </div>
        <p className="text-xl text-coffee-dark mb-6">
          Buy any coffee and get 20% off your pastry!
        </p>
        <p className="text-coffee-medium font-medium">
          Valid Monday - Friday, 7AM - 10AM • Show this offer to your barista
        </p>
      </div>
    </section>
  );
};

export default PromoBanner;
