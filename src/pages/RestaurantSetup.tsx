
import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRightIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import MapAnalysisStep from "@/components/MapAnalysisStep";
import BusinessTypeStep from "@/components/restaurant-setup/BusinessTypeStep";
import BasicInfoStep from "@/components/restaurant-setup/BasicInfoStep";
import LocationStep from "@/components/restaurant-setup/LocationStep";
import ResearchGoalsStep from "@/components/restaurant-setup/ResearchGoalsStep";
import SummaryStep from "@/components/restaurant-setup/SummaryStep";
import SetupProgressSteps from "@/components/restaurant-setup/SetupProgressSteps";
import { validateBusinessType, validateBasicInfo, validateLocation, validateResearchGoals } from "@/utils/setupValidation";

const steps = [
  { id: "business-type", name: "Business Type" },
  { id: "basic-info", name: "Basic Info" },
  { id: "location", name: "Location" },
  { id: "map-analysis", name: "Map Analysis" },
  { id: "research-goals", name: "Research Goals" },
  { id: "summary", name: "Summary" },
];

const RestaurantSetup = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [businessType, setBusinessType] = useState<string>("");
  const [formData, setFormData] = useState({
    restaurantName: "",
    conceptDescription: "",
    targetAudience: "",
    streetAddress: "",
    city: "",
    state: "",
    zipCode: "",
    locationRadius: 1,
    researchGoals: [] as string[],
    competitiveAnalysis: false,
    marketSizing: false,
    demographicAnalysis: false,
    locationIntelligence: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateFormData = (key: string, value: any) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleNext = async () => {
    // Validate current step
    if (currentStep === 0 && !validateBusinessType(businessType, toast)) {
      return;
    }

    if (currentStep === 1 && !validateBasicInfo(formData, toast)) {
      return;
    }

    if (currentStep === 2 && !validateLocation(formData, toast)) {
      return;
    }

    if (currentStep === 4 && !validateResearchGoals(formData, toast)) {
      return;
    }

    if (currentStep === steps.length - 1) {
      // Submit data to database
      setIsSubmitting(true);
      try {
        // In production, this would be an API call to save the restaurant profile
        // Replace with your Supabase integration
        const response = await fetch('/api/restaurant-profiles', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            businessType,
            ...formData
          }),
        });
        
        if (!response.ok) {
          throw new Error('Failed to create restaurant profile');
        }
        
        toast({
          title: "Restaurant setup complete!",
          description: "Your restaurant profile has been created successfully.",
        });
        navigate("/dashboard");
      } catch (error) {
        console.error("Error saving restaurant profile:", error);
        toast({
          title: "Error",
          description: "There was a problem creating your restaurant profile. Please try again.",
          variant: "destructive",
        });
      } finally {
        setIsSubmitting(false);
      }
      return;
    }

    setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(0, prev - 1));
  };

  // Render the appropriate step content based on currentStep
  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return <BusinessTypeStep businessType={businessType} setBusinessType={setBusinessType} />;
      case 1:
        return <BasicInfoStep formData={formData} updateFormData={updateFormData} />;
      case 2:
        return <LocationStep formData={formData} updateFormData={updateFormData} />;
      case 3:
        return (
          <>
            <CardHeader>
              <CardTitle>Location Analysis</CardTitle>
              <CardDescription>
                Analyze your restaurant location to understand market potential
              </CardDescription>
            </CardHeader>
            <CardContent>
              <MapAnalysisStep formData={formData} updateFormData={updateFormData} />
            </CardContent>
          </>
        );
      case 4:
        return <ResearchGoalsStep formData={formData} updateFormData={updateFormData} />;
      case 5:
        return <SummaryStep businessType={businessType} formData={formData} />;
      default:
        return null;
    }
  };

  return (
    <Layout>
      <div className="container max-w-4xl py-10">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2">Restaurant Setup</h1>
          <p className="text-muted-foreground">Let's set up your restaurant profile and research goals</p>
        </div>

        {/* Progress Steps */}
        <SetupProgressSteps steps={steps} currentStep={currentStep} />

        <Card className="mt-12 glass">
          {/* Step Content */}
          {renderStepContent()}

          {/* Footer */}
          <CardFooter className="flex justify-between border-t p-4">
            <Button
              variant="outline"
              onClick={handleBack}
              disabled={currentStep === 0}
              className="glass-button"
            >
              Back
            </Button>
            <Button 
              onClick={handleNext}
              disabled={isSubmitting}
              className="glass-button"
            >
              {currentStep === steps.length - 1 ? (
                isSubmitting ? "Saving..." : "Complete Setup"
              ) : (
                <>
                  Next Step
                  <ChevronRightIcon className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </Layout>
  );
};

export default RestaurantSetup;
