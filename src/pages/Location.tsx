
import { Layout } from "@/components/Layout";
import { LocationFeatures } from "@/components/LocationFeatures";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronRight, MapPin, PieChart } from "lucide-react";
import LocationMap from "@/components/LocationMap";
import { TierRestriction } from "@/components/TierRestriction";

const Location = () => {
  return (
    <Layout>
      <div className="container px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
            <div>
              <h1 className="text-4xl font-bold mb-2">Location Analysis</h1>
              <p className="text-xl text-muted-foreground">
                Understand your restaurant's location, surrounding market, and competition to make data-driven decisions.
              </p>
            </div>
          </div>
          
          <Tabs defaultValue="map" className="mt-6">
            <TabsList className="grid w-full sm:w-auto grid-cols-2 mb-6">
              <TabsTrigger value="map">
                <MapPin className="mr-2 h-4 w-4" />
                Map Analysis
              </TabsTrigger>
              <TabsTrigger value="features">
                <PieChart className="mr-2 h-4 w-4" />
                Features
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="map" className="mt-0">
              <TierRestriction 
                requiredTier="free" 
                fallback={
                  <div className="py-16 px-6 text-center border rounded-lg bg-muted/30">
                    <h3 className="text-xl font-medium mb-2">Market Insights</h3>
                    <p className="text-muted-foreground max-w-md mx-auto mb-6">
                      Get detailed location analysis with heat maps, competitor density, and demographic insights to choose the perfect location.
                    </p>
                    <Button>
                      Upgrade Now
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                }
              >
                <LocationMap />
              </TierRestriction>
            </TabsContent>
            
            <TabsContent value="features" className="mt-0">
              <LocationFeatures />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default Location;
