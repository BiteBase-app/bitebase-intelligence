
import React from "react";
import { useTestUser } from "@/contexts/TestUserContext";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Key } from "lucide-react";

export function TestUserToggle() {
  const { isTestUser, toggleTestUser } = useTestUser();
  
  return (
    <Card className="shadow-md border border-border">
      <CardHeader className="flex flex-row items-center gap-4 pb-2">
        <Key className="h-5 w-5 text-primary" />
        <div>
          <CardTitle className="text-lg">Test User Access</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-foreground/80 mb-4">
          Enable test user mode to access all features regardless of tier level.
        </CardDescription>
        <div className="flex items-center space-x-2">
          <Switch 
            id="test-user" 
            checked={isTestUser} 
            onCheckedChange={toggleTestUser}
          />
          <Label htmlFor="test-user">
            {isTestUser ? "Test Mode Active - All Features Enabled" : "Normal Mode - Tier Restricted"}
          </Label>
        </div>
      </CardContent>
    </Card>
  );
}
