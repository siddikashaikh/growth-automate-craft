import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Calculator, DollarSign, Users, TrendingUp } from 'lucide-react';

const ROICalculator = () => {
  const [inputs, setInputs] = useState({
    currentRevenue: 50000,
    teamSize: 5,
    manualHours: 40
  });

  const calculations = {
    annualRevenue: inputs.currentRevenue * 12,
    currentSalaryCosts: inputs.teamSize * 60000, // Average $60k per employee
    manualTaskCost: (inputs.manualHours * 25 * 52), // $25/hour for manual tasks
    aiSavings: inputs.teamSize * 45000, // 75% of salary costs saved
    revenueIncrease: inputs.currentRevenue * 12 * 2, // 200% increase
    totalSavings: 0,
    breakEvenMonths: 0,
    annualProfit: 0
  };

  calculations.totalSavings = calculations.aiSavings + calculations.manualTaskCost;
  calculations.breakEvenMonths = Math.ceil(120000 / (calculations.totalSavings / 12)); // Assuming $120k investment
  calculations.annualProfit = calculations.revenueIncrease + calculations.totalSavings - 120000;

  return (
    <section id="roi" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Your Custom <span className="gradient-text">ROI Projection</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See exactly how much you'll save and earn with AI automation in your business.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Calculator Inputs */}
          <div className="space-y-8 fade-in-up slide-in-left">
            <Card className="glass-card border-primary/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Calculator className="w-6 h-6 text-primary" />
                  Calculate Your Savings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="revenue">Monthly Revenue ($)</Label>
                  <Input
                    id="revenue"
                    type="number"
                    value={inputs.currentRevenue}
                    onChange={(e) => setInputs({...inputs, currentRevenue: parseInt(e.target.value) || 0})}
                    className="mt-2 glass text-lg"
                  />
                </div>
                
                <div>
                  <Label htmlFor="team">Team Size</Label>
                  <Input
                    id="team"
                    type="number"
                    value={inputs.teamSize}
                    onChange={(e) => setInputs({...inputs, teamSize: parseInt(e.target.value) || 0})}
                    className="mt-2 glass text-lg"
                  />
                </div>
                
                <div>
                  <Label htmlFor="hours">Manual Hours Per Week</Label>
                  <Input
                    id="hours"
                    type="number"
                    value={inputs.manualHours}
                    onChange={(e) => setInputs({...inputs, manualHours: parseInt(e.target.value) || 0})}
                    className="mt-2 glass text-lg"
                  />
                </div>

                <a 
                  href="https://calendly.com/softwelve/30min" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-hero w-full inline-flex items-center justify-center gap-2"
                >
                  Get Detailed Analysis
                  <TrendingUp className="w-5 h-5" />
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Results */}
          <div className="space-y-6 fade-in-up slide-in-right">
            <div className="grid grid-cols-2 gap-4">
              <Card className="glass-card border-secondary/30">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <DollarSign className="w-5 h-5 text-secondary" />
                    <span className="text-sm text-muted-foreground">Annual Savings</span>
                  </div>
                  <div className="text-2xl font-bold gradient-text-secondary">
                    ${calculations.totalSavings.toLocaleString()}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card border-primary/30">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    <span className="text-sm text-muted-foreground">Revenue Increase</span>
                  </div>
                  <div className="text-2xl font-bold gradient-text">
                    ${calculations.revenueIncrease.toLocaleString()}
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="glass-card border-primary/30">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">12-Month Projection</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Current Annual Revenue</span>
                    <span className="font-semibold">${calculations.annualRevenue.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Projected Revenue (3x growth)</span>
                    <span className="font-semibold text-secondary">${(calculations.annualRevenue * 3).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>AI Implementation Cost</span>
                    <span className="font-semibold">$120,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Annual Cost Savings</span>
                    <span className="font-semibold text-secondary">+${calculations.totalSavings.toLocaleString()}</span>
                  </div>
                  <hr className="border-border" />
                  <div className="flex justify-between items-center text-lg">
                    <span className="font-bold">Net Profit Increase</span>
                    <span className="font-bold text-2xl gradient-text-secondary">
                      ${Math.max(0, calculations.annualProfit).toLocaleString()}
                    </span>
                  </div>
                  <div className="text-sm text-muted-foreground text-center">
                    Break-even in {calculations.breakEvenMonths} months
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-accent/30 bg-gradient-to-r from-primary/10 to-secondary/10">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold gradient-text mb-2">
                  {Math.round((calculations.annualProfit / 120000) * 100)}%
                </div>
                <div className="text-muted-foreground">Return on Investment</div>
                <p className="text-sm text-muted-foreground mt-2">
                  Based on conservative 3x revenue growth projections
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;