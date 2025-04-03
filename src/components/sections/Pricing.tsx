
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star } from "lucide-react";
import { useTier, TierLevel } from "@/contexts/TierContext";
import { useToast } from "@/hooks/use-toast";

interface PricingTierProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  tierLevel: TierLevel;
  popular?: boolean;
  buttonText?: string;
}

const PricingTier = ({ 
  title, 
  price, 
  description, 
  features, 
  tierLevel,
  popular, 
  buttonText = "Start Free Trial" 
}: PricingTierProps) => {
  const { currentTier, setCurrentTier } = useTier();
  const { toast } = useToast();
  
  const handleSubscribe = () => {
    // In a real app, this would handle payment processing
    setCurrentTier(tierLevel);
    toast({
      title: "Subscription Updated",
      description: `You are now subscribed to the ${title} plan.`,
      duration: 3000,
    });
  };
  
  const isCurrentTier = currentTier === tierLevel;
  
  return (
    <Card className={`${popular ? "border-bite-500 shadow-lg" : ""} flex flex-col h-full relative`}>
      {popular && (
        <div className="absolute top-0 right-0 -translate-y-1/2 bg-bite-600 text-white px-4 py-1 rounded-full text-sm font-medium">
          Most Popular
        </div>
      )}
      {isCurrentTier && (
        <div className="absolute top-0 left-0 -translate-y-1/2 bg-green-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
          <Star className="h-3 w-3" /> Current Plan
        </div>
      )}
      <CardHeader className="pb-4">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <div className="mt-4 flex items-baseline">
          <span className="text-4xl font-bold">{price}</span>
          {price !== "Free" && <span className="text-muted-foreground ml-1">/month</span>}
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="space-y-3">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start">
              <Check className="h-5 w-5 text-bite-600 mr-3 shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button 
          className={`w-full ${popular ? "bg-bite-600 hover:bg-bite-700" : ""}`}
          onClick={handleSubscribe}
          disabled={isCurrentTier}
        >
          {isCurrentTier ? "Current Plan" : buttonText}
        </Button>
      </CardFooter>
    </Card>
  );
};

export function Pricing() {
  const tiers = [
    {
      title: "Free Trial",
      price: "Free",
      description: "Try all features for 14 days",
      tierLevel: "free" as TierLevel,
      features: [
        "Full access to all features for 14 days",
        "Basic analytics dashboard",
        "Limited historical data",
        "Email support",
        "Single restaurant location"
      ],
      buttonText: "Start Free Trial"
    },
    {
      title: "Growth",
      price: "$14.99",
      description: "For new restaurants getting started",
      tierLevel: "growth" as TierLevel,
      features: [
        "Basic restaurant performance metrics",
        "Limited competitor tracking (up to 5)",
        "Basic menu performance tracking",
        "Simple campaign creation",
        "Basic customer segmentation",
        "Email support with 48-hour response",
        "3 months of historical data",
        "Single restaurant location"
      ],
      popular: true,
      buttonText: "Start Free Trial"
    },
    {
      title: "Pro",
      price: "$109",
      description: "For established restaurants",
      tierLevel: "pro" as TierLevel,
      features: [
        "Comprehensive performance metrics",
        "Track up to 15 competitors",
        "AI-powered menu recommendations",
        "Advanced campaign tools with A/B testing",
        "Detailed customer behavior analysis",
        "Priority email support (24-hour)",
        "1 year of historical data",
        "Automated weekly reports",
        "Single restaurant location"
      ],
      buttonText: "Start Free Trial"
    },
    {
      title: "Enterprise",
      price: "$599",
      description: "For restaurant groups & chains",
      tierLevel: "enterprise" as TierLevel,
      features: [
        "Custom analytics dashboard",
        "Comprehensive market analysis",
        "Predictive menu performance",
        "Automated marketing campaigns",
        "Advanced CRM integration",
        "Dedicated account manager",
        "Unlimited historical data",
        "API access & custom integrations",
        "Multiple restaurant locations"
      ],
      buttonText: "Contact Sales"
    },
    {
      title: "Franchise",
      price: "$999",
      description: "For restaurant franchises",
      tierLevel: "franchise" as TierLevel,
      features: [
        "All Enterprise features",
        "Franchise management dashboard",
        "Unlimited restaurant locations",
        "Brand consistency monitoring",
        "Cross-location performance comparison",
        "Centralized menu management",
        "Franchise-wide analytics",
        "Location-specific customization",
        "Franchise growth planning tools"
      ],
      buttonText: "Contact Sales"
    }
  ];

  return (
    <section className="py-16 bg-muted/50" id="pricing">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Choose the plan that's right for you</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            All plans start with a 14-day free trial. No credit card required.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {tiers.map((tier, i) => (
            <PricingTier key={i} {...tier} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Need a custom solution? <a href="#" className="text-bite-600 hover:underline">Contact our sales team</a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
