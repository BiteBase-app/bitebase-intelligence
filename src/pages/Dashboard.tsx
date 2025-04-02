
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  MapPin, 
  BarChart2, 
  Users, 
  TrendingUp, 
  DollarSign, 
  Calendar, 
  Globe, 
  Utensils,
  LineChart,
  Search,
  Layers,
  Filter,
  Plus,
  Star,
  Clock,
  Coffee,
  ShoppingBag,
  ChevronRight,
  Building
} from "lucide-react";
import { GradientHeading } from "@/components/ui/gradient-heading";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Dashboard = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("overview");

  // Sample data
  const restaurants = [
    { 
      id: 1, 
      name: "Downtown Bistro", 
      score: 92, 
      location: "123 Main St, Downtown", 
      status: "active",
      lastUpdated: "2 days ago"
    },
    { 
      id: 2, 
      name: "Waterfront Grill", 
      score: 87, 
      location: "45 Harbor View, Bayside", 
      status: "pending",
      lastUpdated: "5 days ago"
    },
    { 
      id: 3, 
      name: "Tech Hub Café", 
      score: 78, 
      location: "789 Innovation Park", 
      status: "active",
      lastUpdated: "1 week ago"
    }
  ];

  const recentActivities = [
    { 
      id: 1, 
      type: "analysis", 
      name: "Competitor Analysis", 
      date: "Today, 10:30am",
      icon: <Users className="h-4 w-4" />
    },
    { 
      id: 2, 
      type: "location", 
      name: "New Location Scouting", 
      date: "Yesterday, 4:15pm",
      icon: <MapPin className="h-4 w-4" />
    },
    { 
      id: 3, 
      type: "report", 
      name: "Monthly Performance Report", 
      date: "Jul 15, 2:45pm",
      icon: <BarChart2 className="h-4 w-4" />
    },
    { 
      id: 4, 
      type: "update", 
      name: "Menu Optimization", 
      date: "Jul 12, 11:20am",
      icon: <Coffee className="h-4 w-4" />
    }
  ];

  const handleCreateReport = () => {
    toast({
      title: "Creating new report",
      description: "Your report is being generated..."
    });
  };

  return (
    <Layout>
      <div className="container py-6">
        {/* Dashboard Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-3xl font-bold">Dashboard</h1>
              <Badge variant="outline" className="bg-bitebase-green-50 text-bitebase-green-700 border-bitebase-green-200">Pro Plan</Badge>
            </div>
            <p className="text-muted-foreground mt-1">Welcome back to your restaurant intelligence platform</p>
          </div>
          <div className="flex gap-3 mt-4 md:mt-0">
            <Button variant="outline" onClick={handleCreateReport}>
              <Plus className="mr-2 h-4 w-4" /> New Report
            </Button>
            <Button asChild>
              <Link to="/restaurant-setup">
                <Search className="mr-2 h-4 w-4" /> New Analysis
              </Link>
            </Button>
          </div>
        </div>

        {/* Metrics Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-bitebase-green-500 to-bitebase-green-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-white/80">Location Score</p>
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
                <div className="h-12 w-12 bg-bitebase-green-100 rounded-lg flex items-center justify-center text-bitebase-green-600">
                  <Building className="h-6 w-6" />
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
                <div className="h-12 w-12 bg-bitebase-green-100 rounded-lg flex items-center justify-center text-bitebase-green-600">
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
                <div className="h-12 w-12 bg-bitebase-green-100 rounded-lg flex items-center justify-center text-bitebase-green-600">
                  <DollarSign className="h-6 w-6" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Dashboard Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Left Column - Main Insights */}
          <div className="lg:col-span-2 space-y-6">
            {/* Tabs for different dashboard views */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Market Insights</CardTitle>
                <CardDescription>
                  Comprehensive analysis of your restaurant's market position
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="overview" onValueChange={setActiveTab} className="mt-2">
                  <TabsList className="mb-4">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="customers">Customers</TabsTrigger>
                    <TabsTrigger value="competitors">Competitors</TabsTrigger>
                    <TabsTrigger value="trends">Trends</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="overview" className="mt-0">
                    <div className="space-y-6">
                      {/* Market opportunity score */}
                      <div>
                        <h4 className="text-sm font-medium mb-2">Market Opportunity Score</h4>
                        <div className="relative pt-1">
                          <div className="flex items-center justify-between mb-1">
                            <div>
                              <span className="text-xs font-semibold inline-block text-bitebase-green-600">
                                87/100
                              </span>
                            </div>
                            <div>
                              <span className="text-xs font-semibold inline-block text-bitebase-green-600">
                                Very Good
                              </span>
                            </div>
                          </div>
                          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-bitebase-green-200">
                            <div style={{ width: "87%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-bitebase-green-500"></div>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 mt-4">
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span>Market Size</span>
                              <span className="font-medium">Very Large</span>
                            </div>
                            <div className="overflow-hidden h-1.5 text-xs flex rounded bg-bitebase-green-200">
                              <div style={{ width: "95%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-bitebase-green-400"></div>
                            </div>
                          </div>
                          
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span>Competition Level</span>
                              <span className="font-medium">Moderate</span>
                            </div>
                            <div className="overflow-hidden h-1.5 text-xs flex rounded bg-bitebase-green-200">
                              <div style={{ width: "60%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-bitebase-green-400"></div>
                            </div>
                          </div>
                          
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span>Growth Potential</span>
                              <span className="font-medium">High</span>
                            </div>
                            <div className="overflow-hidden h-1.5 text-xs flex rounded bg-bitebase-green-200">
                              <div style={{ width: "80%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-bitebase-green-400"></div>
                            </div>
                          </div>
                          
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span>Concept Fit</span>
                              <span className="font-medium">Excellent</span>
                            </div>
                            <div className="overflow-hidden h-1.5 text-xs flex rounded bg-bitebase-green-200">
                              <div style={{ width: "90%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-bitebase-green-400"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Revenue forecast visualization */}
                      <div>
                        <h4 className="text-sm font-medium mb-2">Revenue Forecast</h4>
                        <div className="h-64 flex items-end space-x-1">
                          {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month, index) => {
                            const height = 30 + Math.random() * 70;
                            return (
                              <div key={month} className="flex flex-col items-center flex-1">
                                <div 
                                  className="w-full bg-bitebase-green-500 rounded-t-sm" 
                                  style={{ height: `${height}%`, opacity: 0.2 + (height / 125) }}
                                ></div>
                                <span className="text-xs text-muted-foreground mt-2">{month}</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="customers" className="mt-0">
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-sm font-medium mb-2">Age Distribution</h4>
                        <div className="grid grid-cols-5 gap-2 h-32 items-end">
                          <div className="flex flex-col items-center">
                            <div className="w-full bg-bitebase-green-300 rounded-t-sm" style={{ height: "30%" }}></div>
                            <span className="text-xs text-muted-foreground mt-2">18-24</span>
                          </div>
                          <div className="flex flex-col items-center">
                            <div className="w-full bg-bitebase-green-400 rounded-t-sm" style={{ height: "75%" }}></div>
                            <span className="text-xs text-muted-foreground mt-2">25-34</span>
                          </div>
                          <div className="flex flex-col items-center">
                            <div className="w-full bg-bitebase-green-500 rounded-t-sm" style={{ height: "90%" }}></div>
                            <span className="text-xs text-muted-foreground mt-2">35-44</span>
                          </div>
                          <div className="flex flex-col items-center">
                            <div className="w-full bg-bitebase-green-400 rounded-t-sm" style={{ height: "60%" }}></div>
                            <span className="text-xs text-muted-foreground mt-2">45-54</span>
                          </div>
                          <div className="flex flex-col items-center">
                            <div className="w-full bg-bitebase-green-300 rounded-t-sm" style={{ height: "25%" }}></div>
                            <span className="text-xs text-muted-foreground mt-2">55+</span>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium mb-2">Income Level</h4>
                        <div className="grid grid-cols-4 gap-2 h-24 items-end">
                          <div className="flex flex-col items-center">
                            <div className="w-full bg-bitebase-green-300 rounded-t-sm" style={{ height: "30%" }}></div>
                            <span className="text-xs text-muted-foreground mt-2">Low</span>
                          </div>
                          <div className="flex flex-col items-center">
                            <div className="w-full bg-bitebase-green-400 rounded-t-sm" style={{ height: "50%" }}></div>
                            <span className="text-xs text-muted-foreground mt-2">Medium</span>
                          </div>
                          <div className="flex flex-col items-center">
                            <div className="w-full bg-bitebase-green-500 rounded-t-sm" style={{ height: "100%" }}></div>
                            <span className="text-xs text-muted-foreground mt-2">High</span>
                          </div>
                          <div className="flex flex-col items-center">
                            <div className="w-full bg-bitebase-green-300 rounded-t-sm" style={{ height: "40%" }}></div>
                            <span className="text-xs text-muted-foreground mt-2">Very High</span>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium mb-2">Customer Segments</h4>
                        <div className="grid grid-cols-2 gap-4">
                          <Card className="border-bitebase-green-100">
                            <CardContent className="p-4">
                              <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-full bg-bitebase-green-100 flex items-center justify-center">
                                  <Users className="h-5 w-5 text-bitebase-green-600" />
                                </div>
                                <div>
                                  <h5 className="font-medium">Urban Professionals</h5>
                                  <p className="text-xs text-muted-foreground">42% of customer base</p>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                          
                          <Card className="border-bitebase-green-100">
                            <CardContent className="p-4">
                              <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-full bg-bitebase-green-100 flex items-center justify-center">
                                  <Users className="h-5 w-5 text-bitebase-green-600" />
                                </div>
                                <div>
                                  <h5 className="font-medium">Food Enthusiasts</h5>
                                  <p className="text-xs text-muted-foreground">28% of customer base</p>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="competitors" className="mt-0">
                    <div className="space-y-6">
                      <div className="relative h-64 border border-bitebase-green-200 rounded-md p-4">
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                          <div className="h-12 w-12 rounded-full bg-bitebase-green-500 flex items-center justify-center text-white">
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
                          <div className="h-28 w-28 rounded-full border border-bitebase-green-200 opacity-60" />
                        </div>
                        
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="h-48 w-48 rounded-full border border-bitebase-green-200 opacity-40" />
                        </div>
                        
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="h-64 w-64 rounded-full border border-bitebase-green-200 opacity-20" />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <h4 className="text-sm font-medium mb-2">Price Comparison</h4>
                          <div className="space-y-2">
                            <div>
                              <div className="flex justify-between text-sm mb-1">
                                <span>Your Restaurant</span>
                                <span className="font-medium">$$$</span>
                              </div>
                              <div className="overflow-hidden h-2 text-xs flex rounded bg-bitebase-green-200">
                                <div style={{ width: "75%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-bitebase-green-500"></div>
                              </div>
                            </div>
                            
                            <div>
                              <div className="flex justify-between text-sm mb-1">
                                <span>Competitor Avg.</span>
                                <span className="font-medium">$$</span>
                              </div>
                              <div className="overflow-hidden h-2 text-xs flex rounded bg-muted">
                                <div style={{ width: "50%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-400"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-medium mb-2">Rating Comparison</h4>
                          <div className="space-y-2">
                            <div>
                              <div className="flex justify-between text-sm mb-1">
                                <span>Your Restaurant</span>
                                <span className="font-medium flex items-center">
                                  4.8 <Star className="h-3 w-3 ml-1 fill-current text-amber-400" />
                                </span>
                              </div>
                              <div className="overflow-hidden h-2 text-xs flex rounded bg-bitebase-green-200">
                                <div style={{ width: "96%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-bitebase-green-500"></div>
                              </div>
                            </div>
                            
                            <div>
                              <div className="flex justify-between text-sm mb-1">
                                <span>Competitor Avg.</span>
                                <span className="font-medium flex items-center">
                                  4.2 <Star className="h-3 w-3 ml-1 fill-current text-amber-400" />
                                </span>
                              </div>
                              <div className="overflow-hidden h-2 text-xs flex rounded bg-muted">
                                <div style={{ width: "84%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-400"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="trends" className="mt-0">
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-sm font-medium mb-2">Popular Cuisines Trend</h4>
                        <div className="grid grid-cols-3 gap-4">
                          <Card className="border-bitebase-green-100">
                            <CardContent className="p-4">
                              <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-full bg-bitebase-green-100 flex items-center justify-center">
                                  <TrendingUp className="h-5 w-5 text-bitebase-green-600" />
                                </div>
                                <div>
                                  <h5 className="font-medium">Italian</h5>
                                  <p className="text-xs text-green-600">+12% YoY</p>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                          
                          <Card className="border-bitebase-green-100">
                            <CardContent className="p-4">
                              <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-full bg-bitebase-green-100 flex items-center justify-center">
                                  <TrendingUp className="h-5 w-5 text-bitebase-green-600" />
                                </div>
                                <div>
                                  <h5 className="font-medium">Asian Fusion</h5>
                                  <p className="text-xs text-green-600">+23% YoY</p>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                          
                          <Card className="border-bitebase-green-100">
                            <CardContent className="p-4">
                              <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-full bg-bitebase-green-100 flex items-center justify-center">
                                  <TrendingUp className="h-5 w-5 text-bitebase-green-600" />
                                </div>
                                <div>
                                  <h5 className="font-medium">Plant-Based</h5>
                                  <p className="text-xs text-green-600">+18% YoY</p>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium mb-2">Consumer Spending Trends</h4>
                        <div className="h-48 flex items-end space-x-2">
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((month) => (
                            <div key={month} className="flex-1 bg-gradient-to-t from-bitebase-green-500 to-bitebase-green-300 rounded-t-sm" 
                              style={{ height: `${20 + Math.sin(month) * 20 + 40}%` }}
                            ></div>
                          ))}
                        </div>
                        <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                          <span>Jan</span>
                          <span>Feb</span>
                          <span>Mar</span>
                          <span>Apr</span>
                          <span>May</span>
                          <span>Jun</span>
                          <span>Jul</span>
                          <span>Aug</span>
                          <span>Sep</span>
                          <span>Oct</span>
                          <span>Nov</span>
                          <span>Dec</span>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
            
            {/* Location Map Section */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center justify-between">
                  <span>Location Intelligence</span>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/location">
                      View Full Map <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardTitle>
                <CardDescription>
                  Geographic analysis of your restaurant's location
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative h-[300px] rounded-md border overflow-hidden bg-neutral-50">
                  {/* Placeholder for map */}
                  <div className="absolute inset-0 bg-bitebase-green-50">
                    <div className="w-full h-full opacity-10" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}></div>
                  </div>
                  
                  {/* Central marker */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="h-8 w-8 rounded-full bg-bitebase-green-500 flex items-center justify-center text-white shadow-lg">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <div className="absolute -inset-1 rounded-full border-4 border-bitebase-green-500 opacity-20 animate-ping"></div>
                  </div>
                  
                  {/* Map controls */}
                  <div className="absolute top-2 right-2 flex flex-col gap-1">
                    <Button size="icon" variant="outline" className="h-8 w-8 bg-background">
                      <Plus className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="outline" className="h-8 w-8 bg-background">
                      <Layers className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="outline" className="h-8 w-8 bg-background">
                      <Filter className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  {/* Map metrics */}
                  <div className="absolute bottom-2 left-2 right-2 flex gap-2 overflow-x-auto pb-1">
                    <Card className="flex-shrink-0 bg-background/90 backdrop-blur-sm shadow-md">
                      <CardContent className="p-3">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium">Foot Traffic</p>
                          <Users className="h-4 w-4 text-bitebase-green-600 ml-2" />
                        </div>
                        <p className="text-xl font-bold">1,245</p>
                        <p className="text-xs text-green-600">+12% vs. avg</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="flex-shrink-0 bg-background/90 backdrop-blur-sm shadow-md">
                      <CardContent className="p-3">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium">Competition</p>
                          <Building className="h-4 w-4 text-bitebase-green-600 ml-2" />
                        </div>
                        <p className="text-xl font-bold">8</p>
                        <p className="text-xs text-red-600">-2% vs. avg</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="flex-shrink-0 bg-background/90 backdrop-blur-sm shadow-md">
                      <CardContent className="p-3">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium">Rent Avg.</p>
                          <DollarSign className="h-4 w-4 text-bitebase-green-600 ml-2" />
                        </div>
                        <p className="text-xl font-bold">$3,250</p>
                        <p className="text-xs text-green-600">+5% vs. avg</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Right Column - Sidebar Widgets */}
          <div className="space-y-6">
            {/* Recent Locations */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Your Restaurants</CardTitle>
                <CardDescription>
                  Your active restaurant profiles
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y">
                  {restaurants.map(restaurant => (
                    <div key={restaurant.id} className="p-4 hover:bg-muted/50 transition-colors">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium">{restaurant.name}</h4>
                          <div className="flex items-center text-sm text-muted-foreground mt-1">
                            <MapPin className="h-3 w-3 mr-1" />
                            <span className="truncate max-w-[200px]">{restaurant.location}</span>
                          </div>
                        </div>
                        <Badge
                          variant={restaurant.status === 'active' ? 'default' : 'outline'}
                          className={restaurant.status === 'active' ? 'bg-bitebase-green-500' : ''}
                        >
                          {restaurant.status === 'active' ? 'Active' : 'Pending'}
                        </Badge>
                      </div>
                      <div className="mt-3">
                        <div className="flex justify-between text-sm mb-1">
                          <span>Location Score</span>
                          <span className="font-medium">{restaurant.score}/100</span>
                        </div>
                        <Progress value={restaurant.score} className="h-1" />
                      </div>
                      <div className="flex justify-between items-center mt-3">
                        <span className="text-xs text-muted-foreground">
                          Updated {restaurant.lastUpdated}
                        </span>
                        <Button variant="ghost" size="sm" asChild>
                          <Link to={`/restaurants/${restaurant.id}`}>
                            Details
                          </Link>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="border-t p-4">
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/restaurant-setup">
                    <Plus className="mr-2 h-4 w-4" /> Add New Restaurant
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            
            {/* Recent Activity */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>
                  Your latest interactions and updates
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y">
                  {recentActivities.map(activity => (
                    <div key={activity.id} className="p-4 hover:bg-muted/50 transition-colors">
                      <div className="flex gap-3">
                        <div className="h-8 w-8 rounded-full bg-bitebase-green-100 flex items-center justify-center shrink-0">
                          {activity.icon}
                        </div>
                        <div>
                          <h4 className="font-medium">{activity.name}</h4>
                          <div className="flex items-center text-xs text-muted-foreground mt-1">
                            <Clock className="h-3 w-3 mr-1" />
                            <span>{activity.date}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="border-t p-4">
                <Button variant="ghost" size="sm" className="w-full">
                  View All Activity
                </Button>
              </CardFooter>
            </Card>
            
            {/* AI Recommendations */}
            <Card className="bg-gradient-to-br from-bitebase-green-50 to-white border-bitebase-green-200">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center">
                  <span className="bg-gradient-to-r from-bitebase-green-600 to-bitebase-green-400 bg-clip-text text-transparent">AI Recommendations</span>
                </CardTitle>
                <CardDescription>
                  Smart suggestions based on your data
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-bitebase-green-100 text-bitebase-green-600 flex items-center justify-center mr-2 mt-0.5">
                      <BarChart2 className="h-3.5 w-3.5" />
                    </div>
                    <p className="text-sm">Consider extended hours on weekends based on foot traffic patterns.</p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-bitebase-green-100 text-bitebase-green-600 flex items-center justify-center mr-2 mt-0.5">
                      <BarChart2 className="h-3.5 w-3.5" />
                    </div>
                    <p className="text-sm">Your menu prices are 8% below competitors. Consider a modest price increase.</p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-bitebase-green-100 text-bitebase-green-600 flex items-center justify-center mr-2 mt-0.5">
                      <BarChart2 className="h-3.5 w-3.5" />
                    </div>
                    <p className="text-sm">Add more plant-based options to capture growing demographic trend.</p>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="border-t border-bitebase-green-100 bg-bitebase-green-50/50 p-4">
                <Button variant="outline" className="w-full border-bitebase-green-200 hover:border-bitebase-green-300 hover:bg-bitebase-green-100/50">
                  Generate More Insights
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
        
        {/* Bottom Section - Menu Optimization */}
        <Card className="mb-6">
          <CardHeader className="pb-2">
            <CardTitle>Menu Performance</CardTitle>
            <CardDescription>
              Analyze your menu item performance and optimize accordingly
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <h3 className="text-sm font-medium mb-3">Menu Profitability Matrix</h3>
                <div className="h-64 border rounded-md grid grid-cols-2 grid-rows-2 p-1 bg-muted/20">
                  <div className="flex flex-col p-4 border-r border-b">
                    <div className="text-xs font-semibold text-bitebase-green-700 bg-bitebase-green-100 px-2 py-1 rounded-sm self-start mb-2">
                      STARS
                    </div>
                    <div className="flex-1 flex items-center justify-center">
                      <div className="relative">
                        <div className="absolute w-12 h-12 rounded-full bg-bitebase-green-500/20 -left-6 -top-6"></div>
                        <div className="absolute w-10 h-10 rounded-full bg-bitebase-green-500/30 left-4 top-4"></div>
                        <div className="absolute w-14 h-14 rounded-full bg-bitebase-green-500/20 left-12 -top-2"></div>
                        <div className="text-center">
                          <p className="text-xs text-muted-foreground">High Popularity</p>
                          <p className="text-xs text-muted-foreground">High Profit</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col p-4 border-b">
                    <div className="text-xs font-semibold text-amber-700 bg-amber-100 px-2 py-1 rounded-sm self-start mb-2">
                      PUZZLES
                    </div>
                    <div className="flex-1 flex items-center justify-center">
                      <div className="relative">
                        <div className="absolute w-8 h-8 rounded-full bg-amber-500/20 -left-4 -top-4"></div>
                        <div className="absolute w-6 h-6 rounded-full bg-amber-500/30 left-8 top-2"></div>
                        <div className="text-center">
                          <p className="text-xs text-muted-foreground">High Popularity</p>
                          <p className="text-xs text-muted-foreground">Low Profit</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col p-4 border-r">
                    <div className="text-xs font-semibold text-blue-700 bg-blue-100 px-2 py-1 rounded-sm self-start mb-2">
                      PLOW HORSES
                    </div>
                    <div className="flex-1 flex items-center justify-center">
                      <div className="relative">
                        <div className="absolute w-10 h-10 rounded-full bg-blue-500/20 -left-6 -top-2"></div>
                        <div className="absolute w-8 h-8 rounded-full bg-blue-500/30 left-2 top-3"></div>
                        <div className="absolute w-7 h-7 rounded-full bg-blue-500/20 left-10 top-0"></div>
                        <div className="text-center">
                          <p className="text-xs text-muted-foreground">Low Popularity</p>
                          <p className="text-xs text-muted-foreground">Low Profit</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col p-4">
                    <div className="text-xs font-semibold text-purple-700 bg-purple-100 px-2 py-1 rounded-sm self-start mb-2">
                      DOGS
                    </div>
                    <div className="flex-1 flex items-center justify-center">
                      <div className="relative">
                        <div className="absolute w-6 h-6 rounded-full bg-purple-500/20 left-3 -top-3"></div>
                        <div className="absolute w-5 h-5 rounded-full bg-purple-500/30 -left-2 top-2"></div>
                        <div className="text-center">
                          <p className="text-xs text-muted-foreground">Low Popularity</p>
                          <p className="text-xs text-muted-foreground">High Profit</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium mb-3">Top Performing Items</h3>
                <div className="space-y-3">
                  <Card className="border-bitebase-green-100">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-bitebase-green-100 flex items-center justify-center">
                          <Utensils className="h-5 w-5 text-bitebase-green-600" />
                        </div>
                        <div className="flex-1">
                          <h5 className="font-medium">Gourmet Burger</h5>
                          <div className="flex justify-between items-center mt-1">
                            <p className="text-xs text-muted-foreground">Profit: $12.40</p>
                            <Badge className="bg-bitebase-green-500">Star</Badge>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-bitebase-green-100">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-bitebase-green-100 flex items-center justify-center">
                          <Coffee className="h-5 w-5 text-bitebase-green-600" />
                        </div>
                        <div className="flex-1">
                          <h5 className="font-medium">Specialty Coffee</h5>
                          <div className="flex justify-between items-center mt-1">
                            <p className="text-xs text-muted-foreground">Profit: $3.75</p>
                            <Badge className="bg-bitebase-green-500">Star</Badge>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-amber-100">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center">
                          <Utensils className="h-5 w-5 text-amber-600" />
                        </div>
                        <div className="flex-1">
                          <h5 className="font-medium">House Salad</h5>
                          <div className="flex justify-between items-center mt-1">
                            <p className="text-xs text-muted-foreground">Profit: $4.20</p>
                            <Badge variant="outline" className="border-amber-200 text-amber-700 bg-amber-50">Puzzle</Badge>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <Button className="w-full mt-4" asChild>
                  <Link to="/menu-analysis">
                    Full Menu Analysis
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Action Plan */}
        <Card className="bg-muted/30">
          <CardHeader className="pb-2">
            <CardTitle>Action Plan</CardTitle>
            <CardDescription>
              Your personalized action items based on market analysis
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-full bg-bitebase-green-100 flex items-center justify-center">
                      <Users className="h-5 w-5 text-bitebase-green-600" />
                    </div>
                    <div>
                      <h5 className="font-medium">Customer Targeting</h5>
                      <p className="text-xs text-muted-foreground">High Priority</p>
                    </div>
                  </div>
                  <p className="text-sm">Develop targeted marketing for the 25-34 age demographic that shows high interest in your restaurant concept.</p>
                  <Button variant="outline" className="w-full mt-4">View Demographic Data</Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-full bg-bitebase-green-100 flex items-center justify-center">
                      <Coffee className="h-5 w-5 text-bitebase-green-600" />
                    </div>
                    <div>
                      <h5 className="font-medium">Menu Optimization</h5>
                      <p className="text-xs text-muted-foreground">Medium Priority</p>
                    </div>
                  </div>
                  <p className="text-sm">Consider reformulating your salad offerings to improve profit margins while maintaining popularity.</p>
                  <Button variant="outline" className="w-full mt-4">Menu Analysis</Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-full bg-bitebase-green-100 flex items-center justify-center">
                      <Building className="h-5 w-5 text-bitebase-green-600" />
                    </div>
                    <div>
                      <h5 className="font-medium">Competition Strategy</h5>
                      <p className="text-xs text-muted-foreground">High Priority</p>
                    </div>
                  </div>
                  <p className="text-sm">Develop a strategy to differentiate from the 3 direct competitors within 0.5 miles of your location.</p>
                  <Button variant="outline" className="w-full mt-4">Competitor Analysis</Button>
                </CardContent>
              </Card>
            </div>
          </CardContent>
          <CardFooter className="border-t p-4">
            <Button variant="outline" className="w-full">
              Generate Full Action Plan Report
            </Button>
          </CardFooter>
        </Card>
      </div>
    </Layout>
  );
};

export default Dashboard;
