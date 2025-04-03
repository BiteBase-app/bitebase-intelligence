
import React from "react";
import { TierLevel, useTier } from "@/contexts/TierContext";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export function TierSelector() {
  const { currentTier, setCurrentTier } = useTier();
  
  const tiers: { value: TierLevel; label: string }[] = [
    { value: "free", label: "Free Trial" },
    { value: "growth", label: "Growth ($14.99/month)" },
    { value: "pro", label: "Pro ($109/month)" },
    { value: "enterprise", label: "Enterprise ($599/month)" },
    { value: "franchise", label: "Franchise ($999/month)" }
  ];

  return (
    <div className="p-4 border rounded-md bg-muted/30">
      <h3 className="text-lg font-medium mb-3">Simulate Tier Access</h3>
      <p className="text-sm text-muted-foreground mb-4">
        For demonstration purposes only. Change your subscription tier to see how access changes.
      </p>
      
      <RadioGroup
        value={currentTier}
        onValueChange={(value) => setCurrentTier(value as TierLevel)}
        className="space-y-2"
      >
        {tiers.map((tier) => (
          <div key={tier.value} className="flex items-center space-x-2">
            <RadioGroupItem value={tier.value} id={`tier-${tier.value}`} />
            <Label htmlFor={`tier-${tier.value}`}>{tier.label}</Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
}
