const ProblemSection = () => {
  return (
    <section id="problem" className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              The Traditional Scaling Trap
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Most businesses lose 40-60% of revenue growth to increased operational costs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Traditional Business */}
          <div className="bg-card/50 backdrop-blur-lg border border-border rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all duration-300">
            <div className="text-center mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-red-400 mb-4">Traditional Business</h3>
              <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📈</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-red-500/10 rounded-lg">
                <span className="text-sm sm:text-base">More Customers</span>
                <span className="text-red-400">→</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-red-500/10 rounded-lg">
                <span className="text-sm sm:text-base">More Employees</span>
                <span className="text-red-400">→</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-red-500/10 rounded-lg">
                <span className="text-sm sm:text-base">Higher Costs</span>
                <span className="text-red-400">→</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-red-500/20 rounded-lg">
                <span className="text-sm sm:text-base font-bold">Lower Profits</span>
                <span className="text-red-400">📉</span>
              </div>
            </div>
          </div>

          {/* AI-Powered Business */}
          <div className="bg-card/50 backdrop-blur-lg border border-border rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all duration-300">
            <div className="text-center mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-green-400 mb-4">AI-Powered Business</h3>
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤖</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-green-500/10 rounded-lg">
                <span className="text-sm sm:text-base">More Customers</span>
                <span className="text-green-400">→</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-green-500/10 rounded-lg">
                <span className="text-sm sm:text-base">Same Team</span>
                <span className="text-green-400">→</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-green-500/10 rounded-lg">
                <span className="text-sm sm:text-base">Fixed Costs</span>
                <span className="text-green-400">→</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-green-500/20 rounded-lg">
                <span className="text-sm sm:text-base font-bold">Higher Profits</span>
                <span className="text-green-400">📈</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;