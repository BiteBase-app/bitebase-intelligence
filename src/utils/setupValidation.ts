
import { useToast } from "@/hooks/use-toast";

interface FormData {
  restaurantName?: string;
  streetAddress?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  competitiveAnalysis?: boolean;
  marketSizing?: boolean;
  demographicAnalysis?: boolean;
  locationIntelligence?: boolean;
}

export const validateBusinessType = (businessType: string, toast: ReturnType<typeof useToast>['toast']) => {
  if (!businessType) {
    toast({
      title: "Please select an option",
      description: "Choose whether you have an existing restaurant or are starting a new one",
      variant: "destructive",
    });
    return false;
  }
  return true;
};

export const validateBasicInfo = (formData: FormData, toast: ReturnType<typeof useToast>['toast']) => {
  if (!formData.restaurantName) {
    toast({
      title: "Restaurant name required",
      description: "Please enter a name for your restaurant",
      variant: "destructive",
    });
    return false;
  }
  return true;
};

export const validateLocation = (formData: FormData, toast: ReturnType<typeof useToast>['toast']) => {
  if (!formData.streetAddress || !formData.city || !formData.state || !formData.zipCode) {
    toast({
      title: "Location information incomplete",
      description: "Please fill out all location fields",
      variant: "destructive",
    });
    return false;
  }
  return true;
};

export const validateResearchGoals = (formData: FormData, toast: ReturnType<typeof useToast>['toast']) => {
  const hasSelectedGoal = formData.competitiveAnalysis || formData.marketSizing || 
                          formData.demographicAnalysis || formData.locationIntelligence;
  if (!hasSelectedGoal) {
    toast({
      title: "Research goals required",
      description: "Please select at least one research goal",
      variant: "destructive",
    });
    return false;
  }
  return true;
};
