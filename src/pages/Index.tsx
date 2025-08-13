import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import SolutionSection from '@/components/SolutionSection';
import ROICalculator from '@/components/ROICalculator';
import ProcessSection from '@/components/ProcessSection';
import CTASection from '@/components/CTASection';
import FooterSection from '@/components/FooterSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <ROICalculator />
        <ProcessSection />
        <CTASection />
      </main>
      <FooterSection />
    </div>
  );
};

export default Index;
