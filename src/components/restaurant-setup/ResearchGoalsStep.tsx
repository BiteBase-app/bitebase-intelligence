
import { CardHeader, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

interface ResearchGoalsStepProps {
  formData: {
    competitiveAnalysis: boolean;
    marketSizing: boolean;
    demographicAnalysis: boolean;
    locationIntelligence: boolean;
  };
  updateFormData: (key: string, value: any) => void;
}

const ResearchGoalsStep = ({ formData, updateFormData }: ResearchGoalsStepProps) => {
  return (
    <>
      <CardHeader>
        <CardTitle>Research Goals</CardTitle>
        <CardDescription>
          Select what market research you'd like to conduct
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <input
              type="checkbox"
              id="competitiveAnalysis"
              className="mt-1"
              checked={formData.competitiveAnalysis}
              onChange={(e) => updateFormData("competitiveAnalysis", e.target.checked)}
            />
            <div>
              <Label htmlFor="competitiveAnalysis" className="font-medium">Competitive Analysis</Label>
              <p className="text-sm text-muted-foreground">
                Analyze competition in your area and identify market gaps
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <input
              type="checkbox"
              id="marketSizing"
              className="mt-1"
              checked={formData.marketSizing}
              onChange={(e) => updateFormData("marketSizing", e.target.checked)}
            />
            <div>
              <Label htmlFor="marketSizing" className="font-medium">Market Sizing & Trends</Label>
              <p className="text-sm text-muted-foreground">
                Evaluate market size, growth potential, and industry trends
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <input
              type="checkbox"
              id="demographicAnalysis"
              className="mt-1"
              checked={formData.demographicAnalysis}
              onChange={(e) => updateFormData("demographicAnalysis", e.target.checked)}
            />
            <div>
              <Label htmlFor="demographicAnalysis" className="font-medium">Demographic Analysis</Label>
              <p className="text-sm text-muted-foreground">
                Understand customer demographics, behaviors, and preferences
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <input
              type="checkbox"
              id="locationIntelligence"
              className="mt-1"
              checked={formData.locationIntelligence}
              onChange={(e) => updateFormData("locationIntelligence", e.target.checked)}
            />
            <div>
              <Label htmlFor="locationIntelligence" className="font-medium">Location Intelligence</Label>
              <p className="text-sm text-muted-foreground">
                Analyze foot traffic, visibility, and accessibility of your location
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </>
  );
};

export default ResearchGoalsStep;
