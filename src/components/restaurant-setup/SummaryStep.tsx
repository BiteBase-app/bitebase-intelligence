
import { CardHeader, CardContent, CardDescription, CardTitle } from "@/components/ui/card";

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
        <CardTitle>Setup Summary</CardTitle>
        <CardDescription>
          Review your restaurant profile information
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-1">
          <h3 className="font-medium">Restaurant Type</h3>
          <p className="text-muted-foreground">{businessType === "new" ? "New Restaurant" : "Existing Restaurant"}</p>
        </div>
        
        <div className="space-y-1">
          <h3 className="font-medium">Basic Information</h3>
          <p><span className="text-muted-foreground">Name:</span> {formData.restaurantName}</p>
          <p><span className="text-muted-foreground">Concept:</span> {formData.conceptDescription || "Not provided"}</p>
          <p><span className="text-muted-foreground">Target Audience:</span> {formData.targetAudience || "Not provided"}</p>
        </div>
        
        <div className="space-y-1">
          <h3 className="font-medium">Location</h3>
          <p>{formData.streetAddress}</p>
          <p>{formData.city}, {formData.state} {formData.zipCode}</p>
          <p><span className="text-muted-foreground">Analysis Radius:</span> {formData.locationRadius} km</p>
        </div>
        
        <div className="space-y-1">
          <h3 className="font-medium">Research Goals</h3>
          <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
            {formData.competitiveAnalysis && <li>Competitive Analysis</li>}
            {formData.marketSizing && <li>Market Sizing & Trends</li>}
            {formData.demographicAnalysis && <li>Demographic Analysis</li>}
            {formData.locationIntelligence && <li>Location Intelligence</li>}
          </ul>
        </div>
      </CardContent>
    </>
  );
};

export default SummaryStep;
