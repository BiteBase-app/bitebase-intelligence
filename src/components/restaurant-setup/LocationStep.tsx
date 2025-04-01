
import { CardHeader, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

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
  );
};

export default LocationStep;
