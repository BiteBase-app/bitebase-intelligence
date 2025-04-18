
import { CardHeader, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { InfoIcon } from "lucide-react";

interface BasicInfoStepProps {
  formData: {
    restaurantName: string;
    conceptDescription: string;
    targetAudience: string;
  };
  updateFormData: (key: string, value: any) => void;
}

const BasicInfoStep = ({ formData, updateFormData }: BasicInfoStepProps) => {
  return (
    <>
      <CardHeader>
        <div className="flex items-center space-x-2">
          <InfoIcon className="h-5 w-5 text-primary" />
          <CardTitle>Basic Restaurant Information</CardTitle>
        </div>
        <CardDescription>
          Tell us about your restaurant concept
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="restaurantName">Restaurant Name</Label>
          <Input
            id="restaurantName"
            placeholder="Enter restaurant name"
            value={formData.restaurantName}
            onChange={(e) => updateFormData("restaurantName", e.target.value)}
            className="shadow-sm"
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
            className="shadow-sm"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="cuisineType">Cuisine Type</Label>
          <Select onValueChange={(value) => updateFormData("cuisineType", value)}>
            <SelectTrigger className="shadow-sm">
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
            className="shadow-sm"
          />
        </div>
      </CardContent>
    </>
  );
};

export default BasicInfoStep;
