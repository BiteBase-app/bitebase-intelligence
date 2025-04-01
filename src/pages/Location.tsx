
import { Layout } from "@/components/Layout";
import { LocationFeatures } from "@/components/LocationFeatures";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronRight, MapPin, PieChart, Info } from "lucide-react";
import { TierRestriction } from "@/components/TierRestriction";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

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
            <Button className="mt-4 sm:mt-0" asChild>
              <Link to="/restaurant-setup">
                <MapPin className="mr-2 h-4 w-4" />
                Setup Location
              </Link>
            </Button>
          </div>
          
          <Tabs defaultValue="features" className="mt-6">
            <TabsList className="grid w-full sm:w-auto grid-cols-2 mb-6">
              <TabsTrigger value="intro">
                <Info className="mr-2 h-4 w-4" />
                Introduction
              </TabsTrigger>
              <TabsTrigger value="features">
                <PieChart className="mr-2 h-4 w-4" />
                Features
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="intro" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Location Intelligence for Restaurants</CardTitle>
                  <CardDescription>
                    Make data-driven decisions about your restaurant location
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Location is one of the most critical factors for restaurant success. Our location intelligence 
                    tools help you analyze potential sites, understand foot traffic patterns, evaluate competition, 
                    and make informed decisions about where to open your restaurant.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="border rounded-lg p-4">
                      <h3 className="text-lg font-medium mb-2">How It Works</h3>
                      <ol className="list-decimal ml-5 space-y-2 text-muted-foreground">
                        <li>Enter your restaurant location during setup</li>
                        <li>View interactive maps with demographic data</li>
                        <li>Analyze foot traffic and competition</li>
                        <li>Get location intelligence scores and recommendations</li>
                      </ol>
                    </div>
                    
                    <div className="border rounded-lg p-4">
                      <h3 className="text-lg font-medium mb-2">Benefits</h3>
                      <ul className="list-disc ml-5 space-y-2 text-muted-foreground">
                        <li>Reduce location risk with data-driven insights</li>
                        <li>Understand customer demographics in your area</li>
                        <li>Identify optimal delivery radius</li>
                        <li>Compare multiple potential locations</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link to="/restaurant-setup">
                      Start Location Analysis
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
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
