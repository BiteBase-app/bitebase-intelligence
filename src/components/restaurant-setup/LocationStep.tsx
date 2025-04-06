
import { CardHeader, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin } from "lucide-react";

interface LocationStepProps {
  formData: {
    streetAddress: string;
    city: string;
    state: string;
    zipCode: string;
  };
  updateFormData: (key: string, value: any) => void;
}

const LocationStep = ({ formData, updateFormData }: LocationStepProps) => {
  return (
    <>
      <CardHeader>
        <div className="flex items-center space-x-2">
          <MapPin className="h-5 w-5 text-primary" />
          <CardTitle>Restaurant Location</CardTitle>
        </div>
        <CardDescription>
          Enter the location details for your restaurant
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="p-4 bg-muted/30 rounded-lg border border-border shadow-sm">
          <p className="text-sm mb-2 font-medium">Why location matters:</p>
          <ul className="text-xs text-muted-foreground space-y-1">
            <li>• Determines your target demographic and customer base</li>
            <li>• Affects visibility and foot traffic potential</li>
            <li>• Influences your competition analysis</li>
          </ul>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="streetAddress">Street Address</Label>
          <Input
            id="streetAddress"
            placeholder="123 Main St"
            value={formData.streetAddress}
            onChange={(e) => updateFormData("streetAddress", e.target.value)}
            className="shadow-sm"
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
              className="shadow-sm"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="state">State</Label>
            <Select 
              value={formData.state} 
              onValueChange={(value) => updateFormData("state", value)}
            >
              <SelectTrigger id="state" className="shadow-sm">
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
            className="shadow-sm"
          />
        </div>
      </CardContent>
    </>
  );
};

export default LocationStep;
