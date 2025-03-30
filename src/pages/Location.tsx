
import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Layers, Users, Car, DollarSign } from "lucide-react";

const Location = () => {
  const [radius, setRadius] = useState([1]);

  return (
    <Layout>
      <div className="container py-10">
        <h1 className="text-4xl font-bold mb-2">Location Analysis</h1>
        <p className="text-muted-foreground mb-8">Analyze potential restaurant locations to find the perfect spot.</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="h-[600px] relative overflow-hidden">
              <div className="absolute inset-0 bg-slate-200">
                <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-bite-100 to-bite-200">
                  <div className="text-center p-8">
                    <MapPin className="h-12 w-12 text-bite-600 mx-auto mb-4" />
                    <h3 className="text-lg font-medium mb-2">Interactive Map Visualization</h3>
                    <p className="text-muted-foreground mb-4">
                      Our interactive map would appear here with demographic, traffic, and competitor data layers.
                    </p>
                    <Button>Explore Map</Button>
                  </div>
                </div>
              </div>
              <div className="absolute top-4 right-4 z-10">
                <Button variant="outline" size="sm" className="bg-background">
                  <Layers className="h-4 w-4 mr-2" /> Map Layers
                </Button>
              </div>
            </Card>
          </div>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Location Search</CardTitle>
                <CardDescription>Find and analyze potential locations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="address">Address or Area</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="address"
                        placeholder="Enter address or area"
                        className="pl-10"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label>Analysis Radius</Label>
                      <span className="text-sm text-muted-foreground">{radius[0]} miles</span>
                    </div>
                    <Slider
                      defaultValue={[1]}
                      max={5}
                      step={0.1}
                      value={radius}
                      onValueChange={setRadius}
                    />
                  </div>
                  
                  <div className="pt-2">
                    <Button className="w-full">Analyze Location</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Data Layers</CardTitle>
                <CardDescription>Customize map visualization</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="competitors" defaultChecked />
                    <Label htmlFor="competitors" className="flex items-center">
                      <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>Competitors</span>
                    </Label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox id="demographics" defaultChecked />
                    <Label htmlFor="demographics" className="flex items-center">
                      <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>Demographics</span>
                    </Label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox id="traffic" defaultChecked />
                    <Label htmlFor="traffic" className="flex items-center">
                      <Car className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>Traffic Patterns</span>
                    </Label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox id="income" defaultChecked />
                    <Label htmlFor="income" className="flex items-center">
                      <DollarSign className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>Income Levels</span>
                    </Label>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Location Score</CardTitle>
                <CardDescription>Overall rating based on selected factors</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold">92/100</div>
                    <div className="text-sm text-bite-600 font-medium px-2 py-1 bg-bite-50 rounded-full">Excellent</div>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Foot Traffic</span>
                        <span>9.5/10</span>
                      </div>
                      <div className="h-1.5 w-full bg-bite-100 rounded-full">
                        <div className="h-1.5 bg-bite-500 rounded-full" style={{ width: "95%" }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Demographics</span>
                        <span>8.8/10</span>
                      </div>
                      <div className="h-1.5 w-full bg-bite-100 rounded-full">
                        <div className="h-1.5 bg-bite-500 rounded-full" style={{ width: "88%" }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Competition</span>
                        <span>9.2/10</span>
                      </div>
                      <div className="h-1.5 w-full bg-bite-100 rounded-full">
                        <div className="h-1.5 bg-bite-500 rounded-full" style={{ width: "92%" }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Accessibility</span>
                        <span>9.0/10</span>
                      </div>
                      <div className="h-1.5 w-full bg-bite-100 rounded-full">
                        <div className="h-1.5 bg-bite-500 rounded-full" style={{ width: "90%" }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Cost</span>
                        <span>8.5/10</span>
                      </div>
                      <div className="h-1.5 w-full bg-bite-100 rounded-full">
                        <div className="h-1.5 bg-bite-500 rounded-full" style={{ width: "85%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="mt-8">
          <Tabs defaultValue="competitors">
            <TabsList className="mb-4">
              <TabsTrigger value="competitors">Competitor Analysis</TabsTrigger>
              <TabsTrigger value="demographics">Demographics</TabsTrigger>
              <TabsTrigger value="traffic">Traffic Patterns</TabsTrigger>
              <TabsTrigger value="pricing">Real Estate</TabsTrigger>
            </TabsList>
            
            <TabsContent value="competitors" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Nearby Competitors</CardTitle>
                  <CardDescription>Analysis of similar businesses in the area</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center h-64 border border-dashed border-muted-foreground/25 rounded-lg">
                    <p className="text-muted-foreground text-center">Competitor Analysis Data<br />Coming Soon</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="demographics" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Demographics Analysis</CardTitle>
                  <CardDescription>Population data and customer segments</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center h-64 border border-dashed border-muted-foreground/25 rounded-lg">
                    <p className="text-muted-foreground text-center">Demographics Data<br />Coming Soon</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="traffic" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Traffic Patterns</CardTitle>
                  <CardDescription>Foot and vehicle traffic analysis</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center h-64 border border-dashed border-muted-foreground/25 rounded-lg">
                    <p className="text-muted-foreground text-center">Traffic Data<br />Coming Soon</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="pricing" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Real Estate Analysis</CardTitle>
                  <CardDescription>Property costs and availability</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center h-64 border border-dashed border-muted-foreground/25 rounded-lg">
                    <p className="text-muted-foreground text-center">Real Estate Data<br />Coming Soon</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default Location;
