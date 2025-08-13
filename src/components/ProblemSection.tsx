import { TrendingDown, Users, DollarSign, AlertTriangle } from 'lucide-react';
import traditionalVsAi from '@/assets/traditional-vs-ai.jpg';

const ProblemSection = () => {
  return (
    <section id="problem" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            The Traditional <span className="gradient-text">Scaling Trap</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Most businesses lose 40-60% of revenue growth to increased operational costs. 
            More customers shouldn't mean more complexity.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left side - Traditional approach */}
          <div className="space-y-8 slide-in-left">
            <div className="glass-card p-8 border-destructive/30">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-destructive/20 rounded-lg flex items-center justify-center">
                  <TrendingDown className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="text-2xl font-bold text-destructive">Traditional Scaling</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-destructive/5 rounded-lg">
                  <Users className="w-5 h-5 text-destructive" />
                  <span>More customers → Hire more staff</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-destructive/5 rounded-lg">
                  <DollarSign className="w-5 h-5 text-destructive" />
                  <span>Higher revenue → Higher costs</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-destructive/5 rounded-lg">
                  <AlertTriangle className="w-5 h-5 text-destructive" />
                  <span>Complexity increases exponentially</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-destructive/10 rounded-lg">
                <div className="text-2xl font-bold text-destructive mb-2">$190K+ annually</div>
                <div className="text-sm text-muted-foreground">Per additional team member (salary + benefits + overhead)</div>
              </div>
            </div>
          </div>

          {/* Right side - AI approach */}
          <div className="space-y-8 slide-in-right">
            <div className="glass-card p-8 border-secondary/30">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                  <TrendingDown className="w-6 h-6 text-secondary rotate-180" />
                </div>
                <h3 className="text-2xl font-bold text-secondary">AI-Powered Scaling</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-secondary/5 rounded-lg">
                  <Users className="w-5 h-5 text-secondary" />
                  <span>More customers → Same team size</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-secondary/5 rounded-lg">
                  <DollarSign className="w-5 h-5 text-secondary" />
                  <span>Higher revenue → Fixed costs</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-secondary/5 rounded-lg">
                  <AlertTriangle className="w-5 h-5 text-secondary" />
                  <span>Complexity handled by AI</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-secondary/10 rounded-lg">
                <div className="text-2xl font-bold text-secondary mb-2">Unlimited capacity</div>
                <div className="text-sm text-muted-foreground">One-time investment, infinite scaling potential</div>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison image */}
        <div className="relative fade-in-up delay-200">
          <img 
            src={traditionalVsAi} 
            alt="Traditional business chaos vs AI-powered calm efficiency"
            className="w-full h-auto rounded-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent rounded-2xl"></div>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center glass-card p-6 fade-in-up delay-100">
            <div className="text-4xl font-bold gradient-text mb-2">60%</div>
            <div className="text-muted-foreground">Revenue lost to operational costs</div>
          </div>
          <div className="text-center glass-card p-6 fade-in-up delay-200">
            <div className="text-4xl font-bold gradient-text mb-2">80%</div>
            <div className="text-muted-foreground">Tasks can be automated</div>
          </div>
          <div className="text-center glass-card p-6 fade-in-up delay-300">
            <div className="text-4xl font-bold gradient-text mb-2">3x</div>
            <div className="text-muted-foreground">Capacity increase possible</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;