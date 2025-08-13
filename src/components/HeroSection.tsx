import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import heroImage from '@/assets/hero-dashboard.jpg';

const HeroSection = () => {
  const [typingComplete, setTypingComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setTypingComplete(true), 3500);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-xl floating"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-secondary/20 rounded-full blur-xl floating" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-primary/30 rounded-full blur-lg floating" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-8 fade-in-up">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="typing">Scale Revenue 300%</span>
              {typingComplete && (
                <span className="block gradient-text-secondary fade-in-up delay-100">
                  Without Adding a Single Salary
                </span>
              )}
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground fade-in-up delay-200">
              AI Automation + Custom Software = Unlimited Growth Potential
            </p>
            
            <p className="text-lg text-muted-foreground fade-in-up delay-300">
              Replace expensive employees with AI that works 24/7, scales infinitely, and costs a fraction of traditional hiring.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 fade-in-up delay-400">
            <a 
              href="https://calendly.com/softwelve/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-hero inline-flex items-center justify-center gap-2"
            >
              Get Your Custom Scaling Plan
              <ArrowRight className="w-5 h-5" />
            </a>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="glass-card border-primary/30 text-primary hover:bg-primary/10"
              onClick={() => scrollToSection('demo')}
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
          </div>

          <div className="flex items-center gap-8 text-sm text-muted-foreground fade-in-up delay-500">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
              90-day implementation
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
              ROI guarantee
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
              Limited Q1 spots
            </div>
          </div>
        </div>

        {/* Right Content - Hero Image */}
        <div className="relative fade-in-up delay-300">
          <div className="relative">
            <img 
              src={heroImage} 
              alt="AI Dashboard showing automated business operations"
              className="w-full h-auto rounded-2xl glow"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent rounded-2xl"></div>
            
            {/* Floating stats */}
            <div className="absolute -top-4 -right-4 glass-card p-4 floating">
              <div className="text-2xl font-bold gradient-text">+300%</div>
              <div className="text-sm text-muted-foreground">Revenue Growth</div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 glass-card p-4 floating" style={{animationDelay: '1s'}}>
              <div className="text-2xl font-bold gradient-text-secondary">-80%</div>
              <div className="text-sm text-muted-foreground">Manual Tasks</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;