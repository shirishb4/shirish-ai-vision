import { Mail, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white border-t border-accent/20">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-2">Shirish Bhambure</h3>
            <p className="text-secondary">
              AI Automation Consultant & Project Leadership Expert
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-secondary hover:text-accent transition-colors duration-300">
                  About
                </a>
              </li>
              <li>
                <a href="#ai-expertise" className="text-secondary hover:text-accent transition-colors duration-300">
                  AI Expertise
                </a>
              </li>
              <li>
                <a href="#experience" className="text-secondary hover:text-accent transition-colors duration-300">
                  Experience
                </a>
              </li>
              <li>
                <a href="#contact" className="text-secondary hover:text-accent transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="mailto:shirish_b5@yahoo.com"
                className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center hover:bg-accent/30 transition-colors duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-accent" />
              </a>
              <a
                href="https://www.linkedin.com/in/shirishbhambure"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center hover:bg-accent/30 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-accent" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-accent/20 text-center text-secondary text-sm">
          <p>© {new Date().getFullYear()} Shirish Bhambure. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
