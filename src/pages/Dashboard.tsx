
import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, BarChart2, Users, TrendingUp, DollarSign } from "lucide-react";

const Dashboard = () => {
  return (
    <Layout>
      <div className="container py-10">
        <h1 className="text-4xl font-bold mb-2">Dashboard</h1>
        <p className="text-muted-foreground mb-8">Welcome back to your restaurant intelligence platform.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-bite-500 to-bite-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-white/70">Location Score</p>
                  <h3 className="text-3xl font-bold mt-1">92/100</h3>
                  <p className="text-sm mt-2 text-white/90">Top 5% in your area</p>
                </div>
                <div className="h-12 w-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <MapPin className="h-6 w-6" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Nearby Competitors</p>
                  <h3 className="text-3xl font-bold mt-1">8</h3>
                  <p className="text-sm mt-2 text-muted-foreground">Within 2 mile radius</p>
                </div>
                <div className="h-12 w-12 bg-bite-100 rounded-lg flex items-center justify-center text-bite-600">
                  <Users className="h-6 w-6" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Market Growth</p>
                  <h3 className="text-3xl font-bold mt-1">+12.4%</h3>
                  <p className="text-sm mt-2 text-muted-foreground">Year over year</p>
                </div>
                <div className="h-12 w-12 bg-bite-100 rounded-lg flex items-center justify-center text-bite-600">
                  <TrendingUp className="h-6 w-6" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Revenue Potential</p>
                  <h3 className="text-3xl font-bold mt-1">$42K</h3>
                  <p className="text-sm mt-2 text-muted-foreground">Monthly estimate</p>
                </div>
                <div className="h-12 w-12 bg-bite-100 rounded-lg flex items-center justify-center text-bite-600">
                  <DollarSign className="h-6 w-6" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Tabs defaultValue="overview" className="mt-6">
          <TabsList className="mb-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="market">Market Analysis</TabsTrigger>
            <TabsTrigger value="location">Location Intelligence</TabsTrigger>
            <TabsTrigger value="consumer">Consumer Insights</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Revenue Forecast</CardTitle>
                  <CardDescription>Projected revenue for the next 12 months based on location and market data</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80 flex items-end space-x-2">
                    {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month, index) => {
                      const height = 30 + Math.random() * 70;
                      return (
                        <div key={month} className="flex flex-col items-center flex-1">
                          <div 
                            className="w-full bg-bite-500 rounded-t-sm" 
                            style={{ height: `${height}%`, opacity: 0.2 + (height / 125) }}
                          />
                          <span className="text-xs text-muted-foreground mt-2">{month}</span>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
              
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Market Opportunity</CardTitle>
                    <CardDescription>Overall market potential for your concept</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="relative pt-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-xs font-semibold inline-block text-bite-600">
                            87/100
                          </span>
                        </div>
                        <div>
                          <span className="text-xs font-semibold inline-block text-bite-600">
                            Very Good
                          </span>
                        </div>
                      </div>
                      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-bite-200">
                        <div style={{ width: "87%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-bite-500"></div>
                      </div>
                    </div>
                    
                    <div className="space-y-4 mt-4">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Market Size</span>
                          <span className="font-medium">Very Large</span>
                        </div>
                        <div className="overflow-hidden h-1.5 text-xs flex rounded bg-bite-200">
                          <div style={{ width: "95%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-bite-400"></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Competition Level</span>
                          <span className="font-medium">Moderate</span>
                        </div>
                        <div className="overflow-hidden h-1.5 text-xs flex rounded bg-bite-200">
                          <div style={{ width: "60%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-bite-400"></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Growth Potential</span>
                          <span className="font-medium">High</span>
                        </div>
                        <div className="overflow-hidden h-1.5 text-xs flex rounded bg-bite-200">
                          <div style={{ width: "80%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-bite-400"></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Concept Fit</span>
                          <span className="font-medium">Excellent</span>
                        </div>
                        <div className="overflow-hidden h-1.5 text-xs flex rounded bg-bite-200">
                          <div style={{ width: "90%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-bite-400"></div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>AI Recommendations</CardTitle>
                    <CardDescription>Smart suggestions based on your data</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-bite-100 text-bite-600 flex items-center justify-center mr-2 mt-0.5">
                          <BarChart2 className="h-3.5 w-3.5" />
                        </div>
                        <p className="text-sm">Consider extended hours on weekends based on foot traffic patterns.</p>
                      </li>
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-bite-100 text-bite-600 flex items-center justify-center mr-2 mt-0.5">
                          <BarChart2 className="h-3.5 w-3.5" />
                        </div>
                        <p className="text-sm">Your menu prices are 8% below competitors. Consider a modest price increase.</p>
                      </li>
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-bite-100 text-bite-600 flex items-center justify-center mr-2 mt-0.5">
                          <BarChart2 className="h-3.5 w-3.5" />
                        </div>
                        <p className="text-sm">Add more plant-based options to capture growing demographic trend.</p>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Consumer Demographics</CardTitle>
                  <CardDescription>Key demographic insights for your location</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-medium mb-2">Age Distribution</h4>
                      <div className="grid grid-cols-5 gap-2 h-32 items-end">
                        <div className="flex flex-col items-center">
                          <div className="w-full bg-bite-300 rounded-t-sm" style={{ height: "30%" }}></div>
                          <span className="text-xs text-muted-foreground mt-2">18-24</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="w-full bg-bite-400 rounded-t-sm" style={{ height: "75%" }}></div>
                          <span className="text-xs text-muted-foreground mt-2">25-34</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="w-full bg-bite-500 rounded-t-sm" style={{ height: "90%" }}></div>
                          <span className="text-xs text-muted-foreground mt-2">35-44</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="w-full bg-bite-400 rounded-t-sm" style={{ height: "60%" }}></div>
                          <span className="text-xs text-muted-foreground mt-2">45-54</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="w-full bg-bite-300 rounded-t-sm" style={{ height: "25%" }}></div>
                          <span className="text-xs text-muted-foreground mt-2">55+</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium mb-2">Income Level</h4>
                      <div className="grid grid-cols-4 gap-2 h-24 items-end">
                        <div className="flex flex-col items-center">
                          <div className="w-full bg-bite-300 rounded-t-sm" style={{ height: "30%" }}></div>
                          <span className="text-xs text-muted-foreground mt-2">Low</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="w-full bg-bite-400 rounded-t-sm" style={{ height: "50%" }}></div>
                          <span className="text-xs text-muted-foreground mt-2">Medium</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="w-full bg-bite-500 rounded-t-sm" style={{ height: "100%" }}></div>
                          <span className="text-xs text-muted-foreground mt-2">High</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="w-full bg-bite-300 rounded-t-sm" style={{ height: "40%" }}></div>
                          <span className="text-xs text-muted-foreground mt-2">Very High</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Competitive Landscape</CardTitle>
                  <CardDescription>Analysis of nearby competition</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative h-64 border border-border rounded-md p-4">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="h-12 w-12 rounded-full bg-bite-500 flex items-center justify-center text-white">
                        <span className="text-sm font-medium">You</span>
                      </div>
                    </div>
                    
                    {Array(8).fill(0).map((_, i) => {
                      const angle = (i / 8) * Math.PI * 2;
                      const distance = 70 + Math.random() * 30;
                      const x = Math.cos(angle) * distance;
                      const y = Math.sin(angle) * distance;
                      const size = 8 + Math.random() * 6;
                      
                      return (
                        <div 
                          key={i}
                          className="absolute h-8 w-8 rounded-full bg-muted border border-border flex items-center justify-center"
                          style={{ 
                            top: `calc(50% + ${y}px)`, 
                            left: `calc(50% + ${x}px)`,
                            transform: 'translate(-50%, -50%)',
                            width: `${size}px`,
                            height: `${size}px`
                          }}
                        />
                      );
                    })}
                    
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-28 w-28 rounded-full border border-bite-200 opacity-60" />
                    </div>
                    
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-48 w-48 rounded-full border border-bite-200 opacity-40" />
                    </div>
                    
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-64 w-64 rounded-full border border-bite-200 opacity-20" />
                    </div>
                  </div>
                  
                  <div className="mt-4 text-sm text-muted-foreground">
                    <p>Most competitors are 0.8-1.2 miles away from your location. Your concept has unique positioning in the immediate area.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="market">
            <div className="flex items-center justify-center h-64 border border-dashed border-muted-foreground/25 rounded-lg">
              <p className="text-muted-foreground text-center">Market Analysis Dashboard<br />Coming Soon</p>
            </div>
          </TabsContent>
          
          <TabsContent value="location">
            <div className="flex items-center justify-center h-64 border border-dashed border-muted-foreground/25 rounded-lg">
              <p className="text-muted-foreground text-center">Location Intelligence Dashboard<br />Coming Soon</p>
            </div>
          </TabsContent>
          
          <TabsContent value="consumer">
            <div className="flex items-center justify-center h-64 border border-dashed border-muted-foreground/25 rounded-lg">
              <p className="text-muted-foreground text-center">Consumer Insights Dashboard<br />Coming Soon</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Dashboard;
