import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-900 via-blue-900/20 to-green-900/20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              Ready to Scale Without
            </span>
            <br />
            <span className="text-foreground">Salary Increases?</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join 200+ businesses that have transformed their operations with AI automation and custom software
          </p>

          {/* Urgency Section */}
          <div className="bg-card/50 backdrop-blur-lg border border-border rounded-2xl p-6 sm:p-8 mb-8">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-orange-400">
              Limited Q1 Implementation Spots
            </h3>
            <p className="text-muted-foreground mb-4">
              We only take 10 new clients per quarter to ensure exceptional results
            </p>
            <div className="flex justify-center items-center space-x-2 mb-4">
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
              <div className="w-4 h-4 bg-red-500 rounded-full"></div>
              <div className="w-4 h-4 bg-red-500 rounded-full"></div>
              <div className="w-4 h-4 bg-red-500 rounded-full"></div>
              <div className="w-4 h-4 bg-red-500 rounded-full"></div>
              <div className="w-4 h-4 bg-red-500 rounded-full"></div>
              <div className="w-4 h-4 bg-red-500 rounded-full"></div>
            </div>
            <p className="text-sm text-muted-foreground">
              <span className="text-green-400 font-semibold">3 spots available</span> for Q1 2025
            </p>
          </div>

          {/* Main CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
              onClick={() => window.open('https://calendly.com/softwelve/30min', '_blank')}
            >
              Schedule Free Strategy Call
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-blue-500 text-blue-500 hover:bg-blue-500/10 px-8 py-4 text-lg font-semibold w-full sm:w-auto"
            >
              Download Case Studies
            </Button>
          </div>

          {/* Guarantee */}
          <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
            <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center">
              <span className="text-green-400">✓</span>
            </div>
            <span>ROI within 90 days or money back guarantee</span>
          </div>

          {/* Trust signals */}
          <div className="mt-12 pt-8 border-t border-border">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-400">200+</div>
                <div className="text-sm text-muted-foreground">Businesses Transformed</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-400">300%</div>
                <div className="text-sm text-muted-foreground">Average Revenue Increase</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-400">90</div>
                <div className="text-sm text-muted-foreground">Day Implementation</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-400">24/7</div>
                <div className="text-sm text-muted-foreground">AI Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;