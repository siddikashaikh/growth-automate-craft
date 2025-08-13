const SolutionSection = () => {
  const solutions = [
    {
      icon: "🤖",
      title: "AI Automation",
      subtitle: "Replaces: Customer service, sales follow-up, scheduling, content creation",
      result: "80% of manual tasks automated",
      savings: "$190K+ in salary savings annually"
    },
    {
      icon: "⚡",
      title: "Custom Software",
      subtitle: "Orchestrates: All business operations from one command center",
      result: "Seamless scaling without complexity",
      savings: "3x capacity with same team"
    },
    {
      icon: "📈",
      title: "Unlimited Growth",
      subtitle: "Outcome: 2-3x capacity with same team size",
      result: "Revenue scales, costs stay fixed",
      savings: "300% revenue increase potential"
    }
  ];

  return (
    <section id="solution" className="py-16 sm:py-20 lg:py-24 bg-slate-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              AI + Custom Software
            </span>
            <br />
            <span className="text-foreground">The Complete Growth Engine</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-card/50 backdrop-blur-lg border border-border rounded-2xl p-6 sm:p-8 hover:shadow-xl hover:scale-105 transition-all duration-300 group"
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">{solution.icon}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                  {solution.title}
                </h3>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-muted/20 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-2">{solution.subtitle}</p>
                </div>
                <div className="p-4 bg-blue-500/10 rounded-lg">
                  <p className="text-sm font-semibold text-blue-400">{solution.result}</p>
                </div>
                <div className="p-4 bg-green-500/10 rounded-lg">
                  <p className="text-sm font-bold text-green-400">{solution.savings}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Section */}
        <div className="bg-card/30 backdrop-blur-lg border border-border rounded-2xl p-6 sm:p-8">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8">
            What AI Replaces vs. What You Save
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Traditional Team */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-red-400 mb-4">Traditional Team</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-red-500/10 rounded-lg">
                  <span className="text-sm sm:text-base">Customer Service Rep</span>
                  <span className="text-red-400 font-semibold">$45K+/year</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-red-500/10 rounded-lg">
                  <span className="text-sm sm:text-base">Sales Rep</span>
                  <span className="text-red-400 font-semibold">$55K+/year</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-red-500/10 rounded-lg">
                  <span className="text-sm sm:text-base">Admin Assistant</span>
                  <span className="text-red-400 font-semibold">$40K+/year</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-red-500/10 rounded-lg">
                  <span className="text-sm sm:text-base">Marketing Coordinator</span>
                  <span className="text-red-400 font-semibold">$50K+/year</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-red-500/20 rounded-lg border border-red-500/30">
                  <span className="font-bold">Total Annual Cost</span>
                  <span className="text-red-400 font-bold text-lg">$190K+</span>
                </div>
              </div>
            </div>

            {/* AI Automation */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-green-400 mb-4">AI Automation</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-green-500/10 rounded-lg">
                  <span className="text-sm sm:text-base">24/7 Customer AI</span>
                  <span className="text-green-400 font-semibold">Unlimited</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-green-500/10 rounded-lg">
                  <span className="text-sm sm:text-base">Sales Automation</span>
                  <span className="text-green-400 font-semibold">Never-ending</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-green-500/10 rounded-lg">
                  <span className="text-sm sm:text-base">Process Automation</span>
                  <span className="text-green-400 font-semibold">Zero manual</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-green-500/10 rounded-lg">
                  <span className="text-sm sm:text-base">Content AI</span>
                  <span className="text-green-400 font-semibold">Unlimited</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-green-500/20 rounded-lg border border-green-500/30">
                  <span className="font-bold">One-time Investment</span>
                  <span className="text-green-400 font-bold text-lg">Unlimited ROI</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;