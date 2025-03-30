
import { Layout } from "@/components/Layout";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { DashboardPreview } from "@/components/sections/DashboardPreview";
import { Testimonials } from "@/components/sections/Testimonials";
import { CallToAction } from "@/components/sections/CallToAction";
import { Pricing } from "@/components/sections/Pricing";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Features />
      <DashboardPreview />
      <Pricing />
      <Testimonials />
      <CallToAction />
    </Layout>
  );
};

export default Index;
