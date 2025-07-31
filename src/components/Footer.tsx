import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">K</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Kiwoko Health</h3>
                <p className="text-sm opacity-90">Training Institute</p>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              Leading the way in health education and training excellence across Uganda and East Africa.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-sm hover:text-accent transition-colors">
                  Our Courses
                </Link>
              </li>
              <li>
                <Link to="/staff" className="text-sm hover:text-accent transition-colors">
                  Faculty & Staff
                </Link>
              </li>
              <li>
                <Link to="/apply" className="text-sm hover:text-accent transition-colors">
                  Apply Online
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm hover:text-accent transition-colors">
                  News & Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Programs</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-sm opacity-90">Certificate in Nursing</span>
              </li>
              <li>
                <span className="text-sm opacity-90">Certificate in Midwifery</span>
              </li>
              <li>
                <span className="text-sm opacity-90">Diploma in Nursing</span>
              </li>
              <li>
                <span className="text-sm opacity-90">Diploma in Midwifery</span>
              </li>
              <li>
                <span className="text-sm opacity-90">Certificate in Medical Laboratory Techniques</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm">Kiwoko Hospital, PO Box 149, Luweero, Uganda</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm">0392 912059</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm">principalnmts@kiwokohospital.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3 mt-4">
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm opacity-90">
            © 2024 Kiwoko Health Training Institute. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy" className="text-sm hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm hover:text-accent transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;