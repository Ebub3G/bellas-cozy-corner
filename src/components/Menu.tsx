const Menu = () => {
  const coffeeItems = [
    {
      name: "Bella's Signature Blend",
      description: "Our house special with notes of chocolate and caramel",
      price: "$4.50",
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=300&h=200&fit=crop&crop=center"
    },
    {
      name: "Vanilla Cinnamon Latte",
      description: "Smooth espresso with steamed milk, vanilla, and a hint of cinnamon",
      price: "$5.25",
      image: "/lovable-uploads/3c6c5949-e3b1-4d4d-a4d5-edb28101b444.png"
    },
    {
      name: "Cold Brew Delight",
      description: "Slow-steeped for 12 hours, served over ice with your choice of milk",
      price: "$4.75",
      image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=300&h=200&fit=crop&crop=center"
    }
  ];

  const pastries = [
    {
      name: "Fresh Croissants",
      description: "Buttery, flaky pastries baked fresh every morning",
      price: "$3.50",
      image: "/lovable-uploads/cd3a64ee-a8ec-4d01-919a-9ea70a0a05fa.png"
    },
    {
      name: "Blueberry Muffins",
      description: "Made with locally sourced blueberries and a crumb topping",
      price: "$3.25",
      image: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=300&h=200&fit=crop&crop=center"
    },
    {
      name: "Chocolate Chip Cookies",
      description: "Warm, gooey cookies perfect with your favorite coffee",
      price: "$2.75",
      image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=300&h=200&fit=crop&crop=center"
    }
  ];

  return (
    <section id="menu" className="py-20 bg-warm-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Menu Highlights</h2>
          <p className="section-subtitle">
            Discover our carefully curated selection of premium coffees and freshly baked pastries.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Coffee Section */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-center mb-8 text-coffee-dark">Signature Coffees</h3>
            <div className="space-y-6">
              {coffeeItems.map((item, index) => (
                <div key={index} className="menu-item">
                  <div className="flex gap-4">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="menu-title">{item.name}</h4>
                        <span className="menu-price">{item.price}</span>
                      </div>
                      <p className="menu-description">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pastries Section */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-center mb-8 text-coffee-dark">Fresh Pastries</h3>
            <div className="space-y-6">
              {pastries.map((item, index) => (
                <div key={index} className="menu-item">
                  <div className="flex gap-4">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="menu-title">{item.name}</h4>
                        <span className="menu-price">{item.price}</span>
                      </div>
                      <p className="menu-description">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
