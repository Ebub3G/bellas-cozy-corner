
import { MapPin, Clock, Phone, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-warm-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Visit Us Today</h2>
          <p className="section-subtitle">
            We'd love to welcome you to our cozy café. Come experience the Bella's difference!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Location & Hours */}
          <div className="contact-info">
            <h3 className="text-xl font-serif font-bold mb-6 text-gray-800">Location & Hours</h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-coffee-medium mt-1" />
                <div>
                  <p className="font-medium text-gray-800">123 Coffee Street</p>
                  <p className="text-gray-600">Downtown District, CA 90210</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-coffee-medium mt-1" />
                <div>
                  <p className="font-medium text-gray-800">Operating Hours</p>
                  <div className="text-gray-600 text-sm space-y-1">
                    <p>Monday - Friday: 6:30 AM - 8:00 PM</p>
                    <p>Saturday: 7:00 AM - 9:00 PM</p>
                    <p>Sunday: 7:00 AM - 7:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="contact-info">
            <h3 className="text-xl font-serif font-bold mb-6 text-gray-800">Get In Touch</h3>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-coffee-medium" />
                <div>
                  <p className="font-medium text-gray-800">(555) 123-CAFE</p>
                  <p className="text-gray-600 text-sm">Call for reservations</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-coffee-medium" />
                <div>
                  <p className="font-medium text-gray-800">hello@bellascafe.com</p>
                  <p className="text-gray-600 text-sm">We'd love to hear from you</p>
                </div>
              </div>

              <div className="pt-4">
                <button className="btn-primary">
                  Get Directions
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
