
import React, { ReactNode } from "react";
import { TierLevel, useTier } from "@/contexts/TierContext";
import { AlertTriangle } from "lucide-react";

interface TierRestrictionProps {
  requiredTier: TierLevel;
  children: ReactNode;
  fallback?: ReactNode;
  isMultiLocationFeature?: boolean;
}

export function TierRestriction({ 
  requiredTier, 
  children, 
  fallback,
  isMultiLocationFeature 
}: TierRestrictionProps) {
  const { isTierAllowed, currentTier, canAddMultipleLocations } = useTier();
  
  // Check both tier level and multi-location restriction if applicable
  if ((isMultiLocationFeature && !canAddMultipleLocations()) || 
      (!isMultiLocationFeature && !isTierAllowed(requiredTier))) {
    return fallback ? (
      <>{fallback}</>
    ) : (
      <div className="p-4 border border-amber-200 bg-amber-50 rounded-md flex items-center gap-3">
        <AlertTriangle className="h-5 w-5 text-amber-500" />
        <div>
          {isMultiLocationFeature ? (
            <>
              <p className="text-sm font-medium text-amber-800">
                Multiple restaurant locations require the Franchise tier
              </p>
              <p className="text-xs text-amber-600 mt-1">
                Upgrade to the Franchise tier to manage multiple restaurants
              </p>
            </>
          ) : (
            <>
              <p className="text-sm font-medium text-amber-800">
                This feature requires the {requiredTier.charAt(0).toUpperCase() + requiredTier.slice(1)} tier or higher
              </p>
              <p className="text-xs text-amber-600 mt-1">
                Your current tier: {currentTier.charAt(0).toUpperCase() + currentTier.slice(1)}
              </p>
            </>
          )}
        </div>
      </div>
    );
  }
  
  return <>{children}</>;
}
