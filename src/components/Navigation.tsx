import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass backdrop-blur-xl' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between rounded">
          
          
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('solution')} className="text-foreground hover:text-primary transition-colors">
              Solution
            </button>
            <button onClick={() => scrollToSection('roi')} className="text-foreground hover:text-primary transition-colors">
              ROI Calculator
            </button>
            <button onClick={() => scrollToSection('process')} className="text-foreground hover:text-primary transition-colors">
              Process
            </button>
            <a href="https://calendly.com/softwelve/30min" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Book Strategy Call
            </a>
          </div>
        </div>
      </div>
    </nav>;
};
export default Navigation;