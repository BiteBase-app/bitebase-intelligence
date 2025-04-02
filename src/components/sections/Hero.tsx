
import { Button } from "@/components/ui/button";
import { GradientHeading } from "@/components/ui/gradient-heading";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute top-40 -left-40 h-80 w-80 rounded-full bg-secondary/10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center">
        <div className="mx-auto max-w-3xl space-y-8">
          <div className="space-y-4">
            <div className="inline-block rounded-full bg-accent px-3 py-1 text-sm font-medium text-accent-foreground">
              Introducing BiteBase
            </div>
            <GradientHeading as="h1" className="tracking-tight leading-tight">
              Restaurant Location Intelligence for Smart Expansion
            </GradientHeading>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Make data-driven decisions about your next restaurant location with comprehensive 
              market analysis, demographic insights, and competitive intelligence.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="px-8 py-6 text-base font-medium">
              <Link to="/onboarding">Get Started</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="px-8 py-6 text-base font-medium">
              <Link to="#features">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
