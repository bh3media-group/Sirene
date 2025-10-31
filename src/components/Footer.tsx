import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4 text-accent">SIRENE</h3>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Luxury fragrances and premium beauty products for the discerning individual.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-primary smooth-transition"
                  aria-label="Social media"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* About */}
          <div>
            <h4 className="font-semibold mb-4 text-accent">About Us</h4>
            <ul className="space-y-2 text-sm">
              {['Our Story', 'Sustainability', 'Careers', 'Press'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-primary-foreground/80 hover:text-accent smooth-transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4 text-accent">Customer Care</h4>
            <ul className="space-y-2 text-sm">
              {['Contact Us', 'Shipping & Returns', 'FAQ', 'Size Guide'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-primary-foreground/80 hover:text-accent smooth-transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-accent">Get in Touch</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-accent" />
                <span className="text-primary-foreground/80">123 Luxury Avenue, Paris, France</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0 text-accent" />
                <span className="text-primary-foreground/80">+33 1 23 45 67 89</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0 text-accent" />
                <span className="text-primary-foreground/80">contact@sirene.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            © 2025 SIRENE. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm">
            <a href="#" className="text-primary-foreground/60 hover:text-accent smooth-transition">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-accent smooth-transition">
              Terms of Service
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-accent smooth-transition">
              Cookie Settings
            </a>
          </div>
        </div>
      </div>

      {/* Payment Icons Bar */}
      <div className="bg-primary-foreground/5 py-3">
        <div className="container mx-auto px-4 flex justify-center items-center gap-6">
          <span className="text-xs text-primary-foreground/60">We Accept:</span>
          <div className="flex gap-3 opacity-60">
            {['Visa', 'Mastercard', 'Amex', 'PayPal'].map((payment) => (
              <div key={payment} className="bg-primary-foreground/10 px-3 py-1 rounded text-xs">
                {payment}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
