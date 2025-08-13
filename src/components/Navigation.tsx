import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              AI Scale Pro
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#problem" className="text-foreground hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Problem
              </a>
              <a href="#solution" className="text-foreground hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Solution
              </a>
              <a href="#process" className="text-foreground hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Process
              </a>
              <Button 
                className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600"
                onClick={() => window.open('https://calendly.com/softwelve/30min', '_blank')}
              >
                Book Strategy Call
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background/95 backdrop-blur-lg rounded-lg mt-2">
              <a href="#problem" className="text-foreground hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium">
                Problem
              </a>
              <a href="#solution" className="text-foreground hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium">
                Solution
              </a>
              <a href="#process" className="text-foreground hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium">
                Process
              </a>
              <Button 
                className="w-full mt-2 bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600"
                onClick={() => window.open('https://calendly.com/softwelve/30min', '_blank')}
              >
                Book Strategy Call
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;