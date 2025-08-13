import { Bot, Settings, TrendingUp, Zap, Clock, Shield } from 'lucide-react';

const SolutionSection = () => {
  const solutions = [
    {
      icon: Bot,
      title: "AI Automation",
      description: "Replaces: Customer service, sales follow-up, scheduling, content creation",
      result: "80% of manual tasks automated",
      features: ["24/7 customer support", "Automated sales sequences", "Smart scheduling", "Content generation"],
      gradient: "from-primary to-primary-glow"
    },
    {
      icon: Settings,
      title: "Custom Software",
      description: "Orchestrates: All business operations from one command center",
      result: "Seamless scaling without complexity",
      features: ["Unified dashboard", "Process automation", "Real-time analytics", "API integrations"],
      gradient: "from-secondary to-secondary-glow"
    },
    {
      icon: TrendingUp,
      title: "Unlimited Growth",
      description: "Outcome: 2-3x capacity with same team size",
      result: "Revenue scales, costs stay fixed",
      features: ["Infinite scaling", "Fixed operational costs", "Predictable growth", "Maximum profitability"],
      gradient: "from-primary to-secondary"
    }
  ];

  return (
    <section id="solution" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            AI + Custom Software: The Complete <span className="gradient-text-secondary">Growth Engine</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your business into a self-scaling machine that grows revenue while keeping costs fixed.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className={`glass-card group cursor-pointer fade-in-up delay-${(index + 1) * 100}`}
            >
              <div className="relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <div className="relative p-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${solution.gradient} rounded-xl flex items-center justify-center mb-6 glow`}>
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
                  <p className="text-muted-foreground mb-4">{solution.description}</p>
                  
                  <div className="bg-accent/50 rounded-lg p-4 mb-6">
                    <div className="font-semibold text-sm uppercase tracking-wide text-primary mb-1">Result</div>
                    <div className="font-bold">{solution.result}</div>
                  </div>
                  
                  <div className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional benefits */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center glass-card p-6 fade-in-up delay-100">
            <Zap className="w-8 h-8 text-primary mx-auto mb-4" />
            <h4 className="font-semibold mb-2">Lightning Fast</h4>
            <p className="text-sm text-muted-foreground">Instant responses, real-time processing</p>
          </div>
          <div className="text-center glass-card p-6 fade-in-up delay-200">
            <Clock className="w-8 h-8 text-primary mx-auto mb-4" />
            <h4 className="font-semibold mb-2">24/7 Operation</h4>
            <p className="text-sm text-muted-foreground">Never sleeps, never takes breaks</p>
          </div>
          <div className="text-center glass-card p-6 fade-in-up delay-300">
            <Shield className="w-8 h-8 text-primary mx-auto mb-4" />
            <h4 className="font-semibold mb-2">Enterprise Grade</h4>
            <p className="text-sm text-muted-foreground">Bank-level security and reliability</p>
          </div>
          <div className="text-center glass-card p-6 fade-in-up delay-400">
            <TrendingUp className="w-8 h-8 text-primary mx-auto mb-4" />
            <h4 className="font-semibold mb-2">Continuous Learning</h4>
            <p className="text-sm text-muted-foreground">Gets smarter with every interaction</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;