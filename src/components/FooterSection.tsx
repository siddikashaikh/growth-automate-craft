import { Mail, Phone, MapPin } from 'lucide-react';

const FooterSection = () => {
  return (
    <footer className="py-16 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-bold gradient-text">AI Scale Pro</div>
            <p className="text-muted-foreground">
              Transforming businesses with AI automation and custom software solutions.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Services</h4>
            <div className="space-y-2 text-muted-foreground">
              <div>AI Automation</div>
              <div>Custom Software</div>
              <div>Process Optimization</div>
              <div>Business Scaling</div>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Company</h4>
            <div className="space-y-2 text-muted-foreground">
              <div>About Us</div>
              <div>Case Studies</div>
              <div>Testimonials</div>
              <div>Contact</div>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contact</h4>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4" />
                <span>hello@aiscalepro.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-muted-foreground">
              © 2024 AI Scale Pro. All rights reserved.
            </div>
            <div className="flex gap-6 text-muted-foreground">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
              <span>Cookies</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;