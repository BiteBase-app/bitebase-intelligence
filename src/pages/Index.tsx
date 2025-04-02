
import { Layout } from "@/components/Layout";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { FeatureList } from "@/components/sections/FeatureList";
import { DashboardPreview } from "@/components/sections/DashboardPreview";
import { Testimonials } from "@/components/sections/Testimonials";
import { CallToAction } from "@/components/sections/CallToAction";
import { Pricing } from "@/components/sections/Pricing";
import { TierSelector } from "@/components/TierSelector";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { FaqSection } from "@/components/sections/FaqSection";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Features />
      <BenefitsSection />
      <DashboardPreview />
      <FeatureList />
      <Pricing />
      <Testimonials />
      <FaqSection />
      <div className="container mx-auto px-4 py-12">
        <TierSelector />
      </div>
      <CallToAction />
    </Layout>
  );
};

export default Index;
