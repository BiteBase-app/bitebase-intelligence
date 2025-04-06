
import { CardHeader, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { CheckCircle, Store, Info, MapPin, LineChart } from "lucide-react";

interface SummaryStepProps {
  businessType: string;
  formData: {
    restaurantName: string;
    conceptDescription: string;
    targetAudience: string;
    streetAddress: string;
    city: string;
    state: string;
    zipCode: string;
    locationRadius: number;
    competitiveAnalysis: boolean;
    marketSizing: boolean;
    demographicAnalysis: boolean;
    locationIntelligence: boolean;
  };
}

const SummaryStep = ({ businessType, formData }: SummaryStepProps) => {
  return (
    <>
      <CardHeader>
        <div className="flex items-center space-x-2">
          <CheckCircle className="h-5 w-5 text-primary" />
          <CardTitle>Setup Summary</CardTitle>
        </div>
        <CardDescription>
          Review your restaurant profile information
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Restaurant Type */}
          <div className="p-4 rounded-lg border border-border bg-muted/20 shadow-sm">
            <div className="flex items-center space-x-2 mb-2">
              <Store className="h-5 w-5 text-primary" />
              <h3 className="font-medium">Restaurant Type</h3>
            </div>
            <p className="text-sm ml-7">
              {businessType === "new" ? "New Restaurant" : "Existing Restaurant"}
            </p>
          </div>
          
          {/* Basic Information */}
          <div className="p-4 rounded-lg border border-border bg-muted/20 shadow-sm">
            <div className="flex items-center space-x-2 mb-2">
              <Info className="h-5 w-5 text-primary" />
              <h3 className="font-medium">Basic Information</h3>
            </div>
            <div className="text-sm space-y-1 ml-7">
              <p><span className="text-muted-foreground">Name:</span> {formData.restaurantName}</p>
              <p><span className="text-muted-foreground">Concept:</span> {formData.conceptDescription || "Not provided"}</p>
              <p><span className="text-muted-foreground">Target Audience:</span> {formData.targetAudience || "Not provided"}</p>
            </div>
          </div>
          
          {/* Location */}
          <div className="p-4 rounded-lg border border-border bg-muted/20 shadow-sm">
            <div className="flex items-center space-x-2 mb-2">
              <MapPin className="h-5 w-5 text-primary" />
              <h3 className="font-medium">Location</h3>
            </div>
            <div className="text-sm ml-7">
              <p>{formData.streetAddress}</p>
              <p>{formData.city}, {formData.state} {formData.zipCode}</p>
              <p className="text-muted-foreground mt-1">Analysis Radius: {formData.locationRadius} km</p>
            </div>
          </div>
          
          {/* Research Goals */}
          <div className="p-4 rounded-lg border border-border bg-muted/20 shadow-sm">
            <div className="flex items-center space-x-2 mb-2">
              <LineChart className="h-5 w-5 text-primary" />
              <h3 className="font-medium">Research Goals</h3>
            </div>
            <ul className="ml-7 text-sm space-y-1">
              {formData.competitiveAnalysis && <li className="flex items-center text-muted-foreground"><div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>Competitive Analysis</li>}
              {formData.marketSizing && <li className="flex items-center text-muted-foreground"><div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>Market Sizing & Trends</li>}
              {formData.demographicAnalysis && <li className="flex items-center text-muted-foreground"><div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>Demographic Analysis</li>}
              {formData.locationIntelligence && <li className="flex items-center text-muted-foreground"><div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>Location Intelligence</li>}
              {!formData.competitiveAnalysis && !formData.marketSizing && !formData.demographicAnalysis && !formData.locationIntelligence && 
                <li className="text-muted-foreground">No research goals selected</li>
              }
            </ul>
          </div>
        </div>
        
        <div className="bg-primary/10 p-4 rounded-lg border border-primary/20 mt-4">
          <div className="flex items-center space-x-2 mb-1">
            <CheckCircle className="h-4 w-4 text-primary" />
            <p className="text-sm font-medium">Ready to launch your restaurant intelligence!</p>
          </div>
          <p className="text-xs text-muted-foreground ml-6">
            Click "Complete Setup" below to finalize your profile and start receiving personalized market insights for your restaurant.
          </p>
        </div>
      </CardContent>
    </>
  );
};

export default SummaryStep;
