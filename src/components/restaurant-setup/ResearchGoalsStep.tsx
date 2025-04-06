
import { CardHeader, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { LineChart, Users, BarChart2, MapPin } from "lucide-react";

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
        <div className="flex items-center space-x-2">
          <LineChart className="h-5 w-5 text-primary" />
          <CardTitle>Research Goals</CardTitle>
        </div>
        <CardDescription>
          Select what market research you'd like to conduct
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col p-4 rounded-lg border border-border bg-muted/20 shadow-sm">
              <div className="flex items-center space-x-2 mb-2">
                <Checkbox 
                  id="competitiveAnalysis" 
                  checked={formData.competitiveAnalysis}
                  onCheckedChange={(checked) => updateFormData("competitiveAnalysis", Boolean(checked))}
                />
                <div className="flex items-center">
                  <BarChart2 className="h-4 w-4 text-primary mr-1" />
                  <Label htmlFor="competitiveAnalysis" className="font-medium">Competitive Analysis</Label>
                </div>
              </div>
              <p className="text-sm text-muted-foreground ml-6">
                Analyze competition in your area and identify market gaps
              </p>
            </div>
            
            <div className="flex flex-col p-4 rounded-lg border border-border bg-muted/20 shadow-sm">
              <div className="flex items-center space-x-2 mb-2">
                <Checkbox 
                  id="marketSizing" 
                  checked={formData.marketSizing}
                  onCheckedChange={(checked) => updateFormData("marketSizing", Boolean(checked))}
                />
                <div className="flex items-center">
                  <LineChart className="h-4 w-4 text-primary mr-1" />
                  <Label htmlFor="marketSizing" className="font-medium">Market Sizing & Trends</Label>
                </div>
              </div>
              <p className="text-sm text-muted-foreground ml-6">
                Evaluate market size, growth potential, and industry trends
              </p>
            </div>
            
            <div className="flex flex-col p-4 rounded-lg border border-border bg-muted/20 shadow-sm">
              <div className="flex items-center space-x-2 mb-2">
                <Checkbox 
                  id="demographicAnalysis" 
                  checked={formData.demographicAnalysis}
                  onCheckedChange={(checked) => updateFormData("demographicAnalysis", Boolean(checked))}
                />
                <div className="flex items-center">
                  <Users className="h-4 w-4 text-primary mr-1" />
                  <Label htmlFor="demographicAnalysis" className="font-medium">Demographic Analysis</Label>
                </div>
              </div>
              <p className="text-sm text-muted-foreground ml-6">
                Understand customer demographics, behaviors, and preferences
              </p>
            </div>
            
            <div className="flex flex-col p-4 rounded-lg border border-border bg-muted/20 shadow-sm">
              <div className="flex items-center space-x-2 mb-2">
                <Checkbox 
                  id="locationIntelligence" 
                  checked={formData.locationIntelligence}
                  onCheckedChange={(checked) => updateFormData("locationIntelligence", Boolean(checked))}
                />
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 text-primary mr-1" />
                  <Label htmlFor="locationIntelligence" className="font-medium">Location Intelligence</Label>
                </div>
              </div>
              <p className="text-sm text-muted-foreground ml-6">
                Analyze foot traffic, visibility, and accessibility of your location
              </p>
            </div>
          </div>
          
          <div className="bg-primary/10 p-4 rounded-lg border border-primary/20 mt-4">
            <p className="text-sm font-medium">Why research matters:</p>
            <p className="text-xs text-muted-foreground mt-1">
              Comprehensive market research can increase your restaurant's chance of success by up to 70% and help you avoid common pitfalls in this competitive industry.
            </p>
          </div>
        </div>
      </CardContent>
    </>
  );
};

export default ResearchGoalsStep;
