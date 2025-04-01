
import { useState } from "react";
import { CardHeader, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Store } from "lucide-react";

interface BusinessTypeStepProps {
  businessType: string;
  setBusinessType: (type: string) => void;
}

const BusinessTypeStep = ({ businessType, setBusinessType }: BusinessTypeStepProps) => {
  return (
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
  );
};

export default BusinessTypeStep;
