import { Button } from "@/components/ui/button";

const ProcessSection = () => {
  const phases = [
    {
      phase: "Phase 1",
      days: "Days 1-30",
      title: "AI Foundation",
      description: "Handle 3x customers with current team",
      features: ["AI Customer Service", "Sales Automation", "Basic Workflows"]
    },
    {
      phase: "Phase 2",
      days: "Days 31-60",
      title: "Software Integration",
      description: "Run entire operation from one system",
      features: ["Custom Dashboard", "Process Automation", "Data Integration"]
    },
    {
      phase: "Phase 3",
      days: "Days 61-90",
      title: "Advanced Optimization",
      description: "Business runs itself with AI intelligence",
      features: ["Smart Analytics", "Predictive AI", "Auto-scaling"]
    }
  ];

  return (
    <section id="process" className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              90-Day Transformation
            </span>
            <br />
            <span className="text-foreground">From Overwhelmed to Automated</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Our proven 3-phase approach transforms your business operations in just 90 days
          </p>
        </div>

        <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {phases.map((phase, index) => (
            <div
              key={index}
              className="bg-card/50 backdrop-blur-lg border border-border rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all duration-300 relative"
            >
              {/* Progress indicator */}
              <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold">
                {index + 1}
              </div>

              <div className="mb-6">
                <span className="text-sm font-semibold text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full">
                  {phase.phase}
                </span>
                <p className="text-sm text-muted-foreground mt-2">{phase.days}</p>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                {phase.title}
              </h3>

              <p className="text-muted-foreground mb-6">{phase.description}</p>

              <div className="space-y-3">
                {phase.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Case Studies */}
        <div className="bg-card/30 backdrop-blur-lg border border-border rounded-2xl p-6 sm:p-8 mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8">
            Real Business Transformations
          </h3>
          
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-muted/20 rounded-xl">
              <h4 className="font-bold text-blue-400 mb-2">Service Company</h4>
              <p className="text-2xl font-bold mb-2">50 → 200+ clients</p>
              <p className="text-sm text-muted-foreground">Same team size</p>
            </div>
            <div className="text-center p-6 bg-muted/20 rounded-xl">
              <h4 className="font-bold text-green-400 mb-2">E-commerce</h4>
              <p className="text-2xl font-bold mb-2">$50K → $180K/month</p>
              <p className="text-sm text-muted-foreground">No new hires</p>
            </div>
            <div className="text-center p-6 bg-muted/20 rounded-xl">
              <h4 className="font-bold text-purple-400 mb-2">Consulting</h4>
              <p className="text-2xl font-bold mb-2">40h → 15h/week</p>
              <p className="text-sm text-muted-foreground">3x revenue</p>
            </div>
          </div>
        </div>

        {/* Implementation Process */}
        <div className="text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-8">
            Ready to Start Your Transformation?
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
              onClick={() => window.open('https://calendly.com/softwelve/30min', '_blank')}
            >
              Schedule Strategy Call
            </Button>
            <p className="text-sm text-muted-foreground">
              ROI within 90 days or money back
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;