import { ArrowRight, Calendar, Download, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10"></div>
      <div className="absolute top-10 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Ready to Scale <span className="gradient-text-secondary">Without Salary Increases?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join 200+ growing businesses that have eliminated the scaling bottleneck. 
            Limited Q1 implementation spots available.
          </p>
        </div>

        {/* Urgency indicator */}
        <div className="max-w-2xl mx-auto mb-12 fade-in-up delay-200">
          <div className="glass-card p-6 border-secondary/30">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-secondary" />
                <span className="font-semibold">Q1 Implementation Spots</span>
              </div>
              <span className="text-2xl font-bold gradient-text-secondary">3/10 Remaining</span>
            </div>
            <div className="w-full bg-muted rounded-full h-3">
              <div className="bg-gradient-to-r from-secondary to-secondary-glow h-3 rounded-full transition-all duration-1000" style={{width: '70%'}}></div>
            </div>
            <p className="text-sm text-muted-foreground mt-2 text-center">
              We only take 10 new clients per quarter to ensure exceptional results
            </p>
          </div>
        </div>

        {/* CTA Options */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Primary CTA */}
          <div className="glass-card p-8 border-secondary/30 text-center fade-in-up delay-300">
            <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary-glow rounded-xl flex items-center justify-center mx-auto mb-6 glow-secondary">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Strategy Call</h3>
            <p className="text-muted-foreground mb-6">
              Get a custom scaling plan designed specifically for your business. 
              30-minute deep dive into your growth opportunities.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 justify-center">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span className="text-sm">Custom ROI analysis</span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span className="text-sm">Implementation roadmap</span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span className="text-sm">No obligation consultation</span>
              </div>
            </div>
            <a 
              href="https://calendly.com/softwelve/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-hero w-full inline-flex items-center justify-center gap-2"
            >
              Book Strategy Call
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          {/* Secondary CTA */}
          <div className="glass-card p-8 border-primary/30 text-center fade-in-up delay-400">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-xl flex items-center justify-center mx-auto mb-6 glow">
              <Download className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Free Scaling Analysis</h3>
            <p className="text-muted-foreground mb-6">
              Download our comprehensive guide showing exactly how AI can transform your business operations.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 justify-center">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm">Cost-benefit calculator</span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm">Implementation checklist</span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm">Case study examples</span>
              </div>
            </div>
            <Button 
              className="btn-primary w-full"
              onClick={() => window.open('https://calendly.com/softwelve/30min', '_blank')}
            >
              Get Free Analysis
              <Download className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>

        {/* Guarantee */}
        <div className="text-center mt-12 fade-in-up delay-500">
          <div className="glass-card p-6 max-w-2xl mx-auto border-accent/30">
            <h4 className="text-xl font-bold mb-2">90-Day ROI Guarantee</h4>
            <p className="text-muted-foreground">
              If you don't see measurable ROI within 90 days, we'll refund your investment and let you keep the system.
            </p>
          </div>
        </div>

        {/* Social proof */}
        <div className="grid md:grid-cols-3 gap-6 mt-16 text-center">
          <div className="fade-in-up delay-100">
            <div className="text-3xl font-bold gradient-text mb-2">200+</div>
            <div className="text-muted-foreground">Businesses Scaled</div>
          </div>
          <div className="fade-in-up delay-200">
            <div className="text-3xl font-bold gradient-text mb-2">$50M+</div>
            <div className="text-muted-foreground">Revenue Generated</div>
          </div>
          <div className="fade-in-up delay-300">
            <div className="text-3xl font-bold gradient-text mb-2">98%</div>
            <div className="text-muted-foreground">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;