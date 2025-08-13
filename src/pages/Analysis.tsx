import { ArrowLeft, CheckCircle, TrendingUp, Users, Clock, DollarSign, Target, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Analysis = () => {
  const analysisItems = [
    {
      icon: TrendingUp,
      title: "Revenue Growth Potential",
      description: "Identify untapped revenue streams and optimization opportunities",
      benefits: [
        "Market expansion analysis",
        "Pricing optimization strategies", 
        "Customer lifetime value enhancement",
        "Conversion rate improvement tactics"
      ]
    },
    {
      icon: Users,
      title: "Team Efficiency Assessment",
      description: "Analyze current workforce productivity and automation opportunities",
      benefits: [
        "Task automation identification",
        "Workflow optimization mapping",
        "Skill gap analysis",
        "Resource allocation optimization"
      ]
    },
    {
      icon: Clock,
      title: "Time & Process Audit",
      description: "Deep dive into operational bottlenecks and time-wasting activities",
      benefits: [
        "Process bottleneck identification",
        "Time allocation analysis",
        "Automation priority matrix",
        "Efficiency improvement roadmap"
      ]
    },
    {
      icon: DollarSign,
      title: "Cost Structure Analysis",
      description: "Comprehensive review of expenses and cost-saving opportunities",
      benefits: [
        "Hidden cost identification",
        "Vendor optimization analysis",
        "Operational expense review",
        "ROI projection modeling"
      ]
    },
    {
      icon: Target,
      title: "Competitive Positioning",
      description: "Market analysis and competitive advantage identification",
      benefits: [
        "Competitive landscape mapping",
        "Unique value proposition analysis",
        "Market positioning strategy",
        "Differentiation opportunities"
      ]
    },
    {
      icon: Zap,
      title: "AI Implementation Roadmap",
      description: "Custom AI integration plan tailored to your business needs",
      benefits: [
        "AI opportunity assessment",
        "Implementation timeline",
        "Technology stack recommendations",
        "Integration complexity analysis"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass backdrop-blur-xl">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link 
              to="/" 
              className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
            <a 
              href="https://calendly.com/softwelve/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book Strategy Call
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10"></div>
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 fade-in-up">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Free <span className="gradient-text">Business Scaling Analysis</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get a comprehensive analysis of your business growth potential with AI automation and custom software solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Analysis Items */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {analysisItems.map((item, index) => (
              <Card key={index} className="glass-card border-primary/30 fade-in-up" style={{animationDelay: `${index * 100}ms`}}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-glow rounded-xl flex items-center justify-center glow">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{item.title}</h3>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">{item.description}</p>
                  <div className="space-y-3">
                    {item.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="glass-card p-12 max-w-4xl mx-auto border-secondary/30">
              <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                Ready for Your <span className="gradient-text-secondary">Custom Analysis?</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Book a free 30-minute strategy call to get your personalized business scaling analysis and implementation roadmap.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text mb-2">30 Min</div>
                  <div className="text-muted-foreground">Strategy Call</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text mb-2">100%</div>
                  <div className="text-muted-foreground">Free Analysis</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text mb-2">Custom</div>
                  <div className="text-muted-foreground">Action Plan</div>
                </div>
              </div>
              <a 
                href="https://calendly.com/softwelve/30min" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-hero inline-flex items-center gap-2"
              >
                Get Your Free Analysis
                <TrendingUp className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Analysis;