
import { TierRestriction } from "@/components/TierRestriction";
import { TierSelector } from "@/components/TierSelector";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Users, TrendingUp, Building, Map } from "lucide-react";

export function LocationFeatures() {
  return (
    <div className="space-y-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Feature available to all tiers */}
        <TierRestriction requiredTier="free">
          <FeatureCard
            title="Basic Location Analysis"
            description="See your restaurant's location on a map with basic demographic data."
            icon={MapPin}
          />
        </TierRestriction>
        
        {/* Feature requiring Growth tier */}
        <TierRestriction requiredTier="growth">
          <FeatureCard
            title="Competitor Tracking"
            description="Track up to 5 nearby competitors and their performance metrics."
            icon={Building}
          />
        </TierRestriction>
        
        {/* Feature requiring Pro tier */}
        <TierRestriction requiredTier="pro">
          <FeatureCard
            title="Advanced Demographic Analysis"
            description="Deep dive into local demographics including income, age, and consumer preferences."
            icon={Users}
          />
        </TierRestriction>
        
        {/* Feature requiring Enterprise tier */}
        <TierRestriction requiredTier="enterprise">
          <FeatureCard
            title="Market Expansion Analysis"
            description="AI-powered suggestions for new location opportunities based on market analysis."
            icon={TrendingUp}
          />
        </TierRestriction>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Pro tier feature */}
        <TierRestriction requiredTier="pro">
          <FeatureCard
            title="Foot Traffic Analysis"
            description="Analyze pedestrian and vehicle traffic patterns around your location."
            icon={Map}
          />
        </TierRestriction>
        
        {/* Pro tier feature */}
        <TierRestriction requiredTier="pro">
          <FeatureCard
            title="Seasonal Trends"
            description="Identify seasonal patterns affecting your location's performance."
            icon={TrendingUp}
          />
        </TierRestriction>
        
        {/* Enterprise tier feature */}
        <TierRestriction requiredTier="enterprise">
          <FeatureCard
            title="Multi-Location Comparison"
            description="Compare performance across multiple locations to optimize your business."
            icon={Building}
          />
        </TierRestriction>
      </div>
      
      {/* Tier selector for demonstration */}
      <TierSelector />
    </div>
  );
}

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
}

function FeatureCard({ title, description, icon: Icon }: FeatureCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-4 pb-2">
        <Icon className="h-8 w-8 text-bite-600" />
        <div>
          <CardTitle className="text-xl">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-foreground/80">{description}</CardDescription>
      </CardContent>
    </Card>
  );
}

export default LocationFeatures;
