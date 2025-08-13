import { CheckCircle, Clock, Cog, Rocket, Target } from 'lucide-react';

const ProcessSection = () => {
  const phases = [
    {
      phase: "Phase 1",
      days: "Days 1-30",
      title: "AI Foundation",
      description: "Handle 3x customers with current team",
      icon: Target,
      tasks: [
        "Business process analysis",
        "AI automation deployment",
        "Customer service AI setup",
        "Sales sequence automation"
      ],
      color: "primary"
    },
    {
      phase: "Phase 2", 
      days: "Days 31-60",
      title: "Software Integration",
      description: "Run entire operation from one system",
      icon: Cog,
      tasks: [
        "Custom dashboard development",
        "System integrations",
        "Process automation",
        "Real-time analytics setup"
      ],
      color: "secondary"
    },
    {
      phase: "Phase 3",
      days: "Days 61-90", 
      title: "Advanced Optimization",
      description: "Business runs itself with AI intelligence",
      icon: Rocket,
      tasks: [
        "Advanced AI training",
        "Predictive analytics",
        "Automated scaling protocols",
        "Performance optimization"
      ],
      color: "primary"
    }
  ];

  return (
    <section id="process" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            90-Day <span className="gradient-text-secondary">Transformation Timeline</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From overwhelmed to automated in three strategic phases. Watch your business transform while you maintain full control.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-secondary to-primary opacity-30 hidden lg:block"></div>

          <div className="space-y-16 lg:space-y-24">
            {phases.map((phase, index) => (
              <div 
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } fade-in-up delay-${(index + 1) * 200}`}
              >
                {/* Content */}
                <div className="flex-1 space-y-6">
                  <div className="glass-card p-8 group hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br from-${phase.color} to-${phase.color}-glow rounded-xl flex items-center justify-center glow`}>
                        <phase.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                          {phase.phase}
                        </div>
                        <div className="text-sm text-primary font-medium">{phase.days}</div>
                      </div>
                    </div>
                    
                    <h3 className="text-3xl font-bold mb-4">{phase.title}</h3>
                    <p className="text-xl text-muted-foreground mb-6">{phase.description}</p>
                    
                    <div className="space-y-3">
                      {phase.tasks.map((task, taskIndex) => (
                        <div key={taskIndex} className="flex items-center gap-3">
                          <CheckCircle className={`w-5 h-5 text-${phase.color}`} />
                          <span className="text-muted-foreground">{task}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Timeline marker */}
                <div className="relative hidden lg:block">
                  <div className={`w-20 h-20 bg-gradient-to-br from-${phase.color} to-${phase.color}-glow rounded-full flex items-center justify-center glow-${phase.color === 'primary' ? '' : 'secondary'} z-10 relative`}>
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute inset-0 w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full animate-ping opacity-20"></div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="flex-1 hidden lg:block"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Results summary */}
        <div className="mt-20 text-center fade-in-up delay-500">
          <div className="glass-card p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6">After 90 Days</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold gradient-text mb-2">3x</div>
                <div className="text-muted-foreground">Customer Capacity</div>
              </div>
              <div>
                <div className="text-4xl font-bold gradient-text-secondary mb-2">80%</div>
                <div className="text-muted-foreground">Time Saved</div>
              </div>
              <div>
                <div className="text-4xl font-bold gradient-text mb-2">∞</div>
                <div className="text-muted-foreground">Scaling Potential</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;