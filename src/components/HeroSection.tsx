import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-slate-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 pt-16">
        <div className="max-w-4xl mx-auto">
          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-green-400 bg-clip-text text-transparent">
              Scale Revenue 300%
            </span>
            <br />
            <span className="text-foreground">
              Without Adding a Single Salary
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            AI Automation + Custom Software = Unlimited Growth Potential
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
              onClick={() => window.open('https://calendly.com/softwelve/30min', '_blank')}
            >
              Get Your Custom Scaling Plan
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-blue-500 text-blue-500 hover:bg-blue-500/10 px-8 py-4 text-lg font-semibold w-full sm:w-auto"
            >
              Watch Demo
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="text-sm text-muted-foreground">
            <p>Trusted by 200+ growing businesses</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;