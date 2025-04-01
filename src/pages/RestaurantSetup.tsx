
import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckIcon, ChevronRightIcon, Store, Users, FileSpreadsheet, AreaChart, FlaskConical } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const steps = [
  { id: "business-type", name: "Business Type" },
  { id: "basic-info", name: "Basic Info" },
  { id: "location", name: "Location" },
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
    researchGoals: [] as string[],
    competitiveAnalysis: false,
    marketSizing: false,
    demographicAnalysis: false,
    locationIntelligence: false,
  });

  const updateFormData = (key: string, value: any) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleNext = () => {
    // Validate current step
    if (currentStep === 0 && !businessType) {
      toast({
        title: "Please select an option",
        description: "Choose whether you have an existing restaurant or are starting a new one",
        variant: "destructive",
      });
      return;
    }

    if (currentStep === 1) {
      if (!formData.restaurantName) {
        toast({
          title: "Restaurant name required",
          description: "Please enter a name for your restaurant",
          variant: "destructive",
        });
        return;
      }
    }

    if (currentStep === 2) {
      if (!formData.streetAddress || !formData.city || !formData.state || !formData.zipCode) {
        toast({
          title: "Location information incomplete",
          description: "Please fill out all location fields",
          variant: "destructive",
        });
        return;
      }
    }

    if (currentStep === 3) {
      const hasSelectedGoal = formData.competitiveAnalysis || formData.marketSizing || 
                             formData.demographicAnalysis || formData.locationIntelligence;
      if (!hasSelectedGoal) {
        toast({
          title: "Research goals required",
          description: "Please select at least one research goal",
          variant: "destructive",
        });
        return;
      }
    }

    if (currentStep === steps.length - 1) {
      // Complete the setup
      toast({
        title: "Restaurant setup complete!",
        description: "Your restaurant profile has been created successfully.",
      });
      navigate("/dashboard");
      return;
    }

    setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(0, prev - 1));
  };

  return (
    <Layout>
      <div className="container max-w-4xl py-10">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2">Restaurant Setup</h1>
          <p className="text-muted-foreground">Let's set up your restaurant profile and research goals</p>
        </div>

        {/* Progress Steps */}
        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full h-0.5 bg-muted" />
          </div>
          <ol className="relative flex justify-between text-sm">
            {steps.map((step, index) => (
              <li key={step.id} className="flex items-center">
                <div
                  className={`relative flex h-8 w-8 items-center justify-center rounded-full border text-center ${
                    index <= currentStep
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-muted bg-background text-muted-foreground"
                  }`}
                >
                  {index < currentStep ? (
                    <CheckIcon className="h-4 w-4" />
                  ) : (
                    <span>{index + 1}</span>
                  )}
                </div>
                <span
                  className={`absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs ${
                    index <= currentStep ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {step.name}
                </span>
              </li>
            ))}
          </ol>
        </div>

        <Card className="mt-12">
          {/* Step 1: Business Type */}
          {currentStep === 0 && (
            <>
              <CardHeader>
                <CardTitle>What type of restaurant are you setting up?</CardTitle>
                <CardDescription>
                  Let us know if you're starting a new restaurant or have an existing one
                </CardDescription>
              </CardHeader>
              <CardContent>
                <RadioGroup
                  value={businessType}
                  onValueChange={setBusinessType}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  <div>
                    <RadioGroupItem
                      value="new"
                      id="new"
                      className="peer sr-only"
                    />
                    <Label
                      htmlFor="new"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-muted p-4 hover:bg-muted/80 peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
                    >
                      <Store className="mb-3 h-6 w-6" />
                      <span className="text-lg font-medium">New Restaurant</span>
                      <span className="text-sm text-muted-foreground">
                        I'm planning to open a new restaurant
                      </span>
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem
                      value="existing"
                      id="existing"
                      className="peer sr-only"
                    />
                    <Label
                      htmlFor="existing"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-muted p-4 hover:bg-muted/80 peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
                    >
                      <Store className="mb-3 h-6 w-6" />
                      <span className="text-lg font-medium">Existing Restaurant</span>
                      <span className="text-sm text-muted-foreground">
                        I already own a restaurant
                      </span>
                    </Label>
                  </div>
                </RadioGroup>
              </CardContent>
            </>
          )}

          {/* Step 2: Basic Info */}
          {currentStep === 1 && (
            <>
              <CardHeader>
                <CardTitle>Basic Restaurant Information</CardTitle>
                <CardDescription>
                  Tell us about your restaurant concept
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="restaurantName">Restaurant Name</Label>
                  <Input
                    id="restaurantName"
                    placeholder="Enter restaurant name"
                    value={formData.restaurantName}
                    onChange={(e) => updateFormData("restaurantName", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="conceptDescription">Concept Description</Label>
                  <Textarea
                    id="conceptDescription"
                    placeholder="Describe your restaurant concept"
                    value={formData.conceptDescription}
                    onChange={(e) => updateFormData("conceptDescription", e.target.value)}
                    rows={3}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cuisineType">Cuisine Type</Label>
                  <Select onValueChange={(value) => updateFormData("cuisineType", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select cuisine type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="american">American</SelectItem>
                      <SelectItem value="italian">Italian</SelectItem>
                      <SelectItem value="mexican">Mexican</SelectItem>
                      <SelectItem value="asian">Asian</SelectItem>
                      <SelectItem value="mediterranean">Mediterranean</SelectItem>
                      <SelectItem value="fast-casual">Fast Casual</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="targetAudience">Target Audience</Label>
                  <Input
                    id="targetAudience"
                    placeholder="Who is your target customer?"
                    value={formData.targetAudience}
                    onChange={(e) => updateFormData("targetAudience", e.target.value)}
                  />
                </div>
              </CardContent>
            </>
          )}

          {/* Step 3: Location */}
          {currentStep === 2 && (
            <>
              <CardHeader>
                <CardTitle>Restaurant Location</CardTitle>
                <CardDescription>
                  Enter the location details for your restaurant
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="streetAddress">Street Address</Label>
                  <Input
                    id="streetAddress"
                    placeholder="123 Main St"
                    value={formData.streetAddress}
                    onChange={(e) => updateFormData("streetAddress", e.target.value)}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input
                      id="city"
                      placeholder="City"
                      value={formData.city}
                      onChange={(e) => updateFormData("city", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="state">State</Label>
                    <Select onValueChange={(value) => updateFormData("state", value)}>
                      <SelectTrigger id="state">
                        <SelectValue placeholder="Select state" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="CA">California</SelectItem>
                        <SelectItem value="NY">New York</SelectItem>
                        <SelectItem value="TX">Texas</SelectItem>
                        <SelectItem value="FL">Florida</SelectItem>
                        <SelectItem value="IL">Illinois</SelectItem>
                        {/* Add more states as needed */}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="zipCode">ZIP Code</Label>
                  <Input
                    id="zipCode"
                    placeholder="ZIP Code"
                    value={formData.zipCode}
                    onChange={(e) => updateFormData("zipCode", e.target.value)}
                  />
                </div>
              </CardContent>
            </>
          )}

          {/* Step 4: Research Goals */}
          {currentStep === 3 && (
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
          )}

          {/* Step 5: Summary */}
          {currentStep === 4 && (
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
          )}

          <CardFooter className="flex justify-between border-t p-4">
            <Button
              variant="outline"
              onClick={handleBack}
              disabled={currentStep === 0}
            >
              Back
            </Button>
            <Button onClick={handleNext}>
              {currentStep === steps.length - 1 ? (
                "Complete Setup"
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
