
import React from "react";
import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { ChartContainer } from "@/components/ui/chart";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  Cell,
  Legend,
  Tooltip
} from "recharts";
import { Search, Filter, MapPin, Info, ExternalLink, SlidersHorizontal, Download, RefreshCw, Plus } from "lucide-react";
import { TierRestriction } from "@/components/TierRestriction";
import { TestUserToggle } from "@/components/TestUserToggle";

const CompetitiveAnalysis = () => {
  // Sample data for the charts
  const marketShareData = [
    { name: "Your Restaurant", value: 22, color: "#74C365" },
    { name: "Bistro 42", value: 18, color: "#E23D28" },
    { name: "Cafe Luna", value: 15, color: "#F4C431" },
    { name: "The Green Fork", value: 12, color: "#3B82F6" },
    { name: "Others", value: 33, color: "#E5E7EB" }
  ];
  
  const priceComparisonData = [
    { name: "Appetizers", "Your Restaurant": 12, "Market Avg.": 10 },
    { name: "Main Courses", "Your Restaurant": 28, "Market Avg.": 24 },
    { name: "Desserts", "Your Restaurant": 10, "Market Avg.": 8 },
    { name: "Drinks", "Your Restaurant": 8, "Market Avg.": 7 }
  ];
  
  const ratingData = [
    { subject: "Food Quality", "Your Restaurant": 4.6, "Top Competitor": 4.5, fullMark: 5 },
    { subject: "Service", "Your Restaurant": 4.5, "Top Competitor": 4.3, fullMark: 5 },
    { subject: "Ambiance", "Your Restaurant": 4.4, "Top Competitor": 4.6, fullMark: 5 },
    { subject: "Value", "Your Restaurant": 4.3, "Top Competitor": 4.2, fullMark: 5 },
    { subject: "Cleanliness", "Your Restaurant": 4.7, "Top Competitor": 4.5, fullMark: 5 },
    { subject: "Location", "Your Restaurant": 4.5, "Top Competitor": 4.4, fullMark: 5 }
  ];
  
  const competitors = [
    {
      id: 1,
      name: "Bistro 42",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      rating: 4.5,
      distance: "0.3 mi away",
      priceLevel: 3,
      rank: "#1 Competitor",
      rankClass: "bg-green-100 text-green-800",
      description: "Contemporary American cuisine with seasonal ingredients and craft cocktails.",
      avgCheck: "$42",
      seats: "85",
      waitTime: "25 min"
    },
    {
      id: 2,
      name: "Cafe Luna",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
      rating: 4.0,
      distance: "0.5 mi away",
      priceLevel: 2,
      rank: "#2 Competitor",
      rankClass: "bg-blue-100 text-blue-800",
      description: "Cozy Italian café known for homemade pasta and wood-fired pizzas.",
      avgCheck: "$28",
      seats: "60",
      waitTime: "15 min"
    },
    {
      id: 3,
      name: "The Green Fork",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
      rating: 4.8,
      distance: "0.7 mi away",
      priceLevel: 3,
      rank: "Trending",
      rankClass: "bg-yellow-100 text-yellow-800",
      description: "Farm-to-table vegetarian restaurant with organic wines and craft beers.",
      avgCheck: "$38",
      seats: "45",
      waitTime: "40 min"
    }
  ];

  const benchmarkingData = [
    { metric: "Average Rating", yourRestaurant: "4.6★", bistro42: "4.5★", cafeLuna: "4.0★", greenFork: "4.8★", marketAvg: "4.3★" },
    { metric: "Average Check", yourRestaurant: "$36", bistro42: "$42", cafeLuna: "$28", greenFork: "$38", marketAvg: "$34" },
    { metric: "Seat Turnover", yourRestaurant: "2.1x", bistro42: "1.8x", cafeLuna: "2.3x", greenFork: "1.9x", marketAvg: "2.0x" },
    { metric: "Wait Time", yourRestaurant: "20 min", bistro42: "25 min", cafeLuna: "15 min", greenFork: "40 min", marketAvg: "25 min" },
    { metric: "Social Followers", yourRestaurant: "8,450", bistro42: "12,300", cafeLuna: "5,600", greenFork: "9,800", marketAvg: "8,500" },
    { metric: "Online Orders", yourRestaurant: "42%", bistro42: "35%", cafeLuna: "28%", greenFork: "45%", marketAvg: "37%" }
  ];

  const recommendations = [
    {
      icon: "lightbulb",
      iconBg: "bg-amber-100",
      iconColor: "text-amber-600", 
      title: "Pricing Strategy",
      description: "Introduce a mid-range prix fixe menu to compete with Cafe Luna's value proposition.",
      tags: [
        { text: "High Impact", className: "bg-green-100 text-green-800" },
        { text: "Easy to Implement", className: "bg-blue-100 text-blue-800" }
      ]
    },
    {
      icon: "clock",
      iconBg: "bg-primary-100", 
      iconColor: "text-primary",
      title: "Wait Time",
      description: "Implement a digital waitlist system to reduce perceived wait times by 15%.",
      tags: [
        { text: "High Impact", className: "bg-green-100 text-green-800" },
        { text: "Tech Required", className: "bg-purple-100 text-purple-800" }
      ]
    },
    {
      icon: "tag",
      iconBg: "bg-red-100",
      iconColor: "text-red-600",
      title: "Loyalty Program",
      description: "Launch a referral program to match Bistro 42's strong social following.",
      tags: [
        { text: "Medium Impact", className: "bg-yellow-100 text-yellow-800" },
        { text: "Easy to Implement", className: "bg-blue-100 text-blue-800" }
      ]
    }
  ];
  
  // Render star rating
  const renderPriceLevel = (level) => {
    return "$".repeat(level);
  };
  
  // Helper function to render the icon
  const renderIcon = (iconName) => {
    switch(iconName) {
      case "lightbulb": return <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0"><span className="text-amber-600">💡</span></div>;
      case "clock": return <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0"><span className="text-primary">⏰</span></div>;
      case "tag": return <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0"><span className="text-red-600">🏷️</span></div>;
      default: return null;
    }
  };

  return (
    <Layout>
      <div className="container py-10">
        {/* Test User Toggle */}
        <div className="mb-6">
          <TestUserToggle />
        </div>
        
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Competitive Analysis</h1>
            <p className="text-muted-foreground">Analyze competition in your target market area</p>
          </div>
        </div>

        {/* Analysis Controls */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
              <div className="w-full lg:w-1/2">
                <h3 className="font-bold text-lg mb-2">Analyze Competition</h3>
                <div className="flex space-x-2">
                  <div className="flex-1 relative">
                    <Input placeholder="Enter your restaurant location" className="pl-10" />
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  </div>
                  <Button>
                    <Search className="mr-2 h-4 w-4" /> Search
                  </Button>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="flex flex-wrap gap-3">
                  <div className="flex-1 min-w-[150px]">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Radius</label>
                    <div className="flex items-center space-x-2">
                      <input type="range" min="0.1" max="5" step="0.1" defaultValue="1" className="w-full" />
                      <span className="text-sm font-medium w-12">1.0 mi</span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-[150px]">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Cuisine Type</label>
                    <select className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none text-sm">
                      <option>All Cuisines</option>
                      <option>American</option>
                      <option>Italian</option>
                      <option>Mexican</option>
                      <option>Asian</option>
                      <option>Mediterranean</option>
                    </select>
                  </div>
                  <Button variant="secondary" className="self-end">
                    <Search className="mr-2 h-4 w-4" /> Analyze
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Charts Section */}
        <TierRestriction requiredTier="pro">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            {/* Market Share Chart */}
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-lg">Market Share</CardTitle>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Info className="h-4 w-4" />
                  </Button>
                </div>
                <CardDescription>Percentage of total restaurant visits</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={marketShareData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        nameKey="name"
                      >
                        {marketShareData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => `${value}% market share`} />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Price Comparison Chart */}
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-lg">Price Comparison</CardTitle>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Info className="h-4 w-4" />
                  </Button>
                </div>
                <CardDescription>Average menu prices compared to market</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={priceComparisonData}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <Tooltip formatter={(value) => `$${value}`} />
                      <Legend />
                      <Bar dataKey="Your Restaurant" fill="#74C365" />
                      <Bar dataKey="Market Avg." fill="#E5E7EB" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Rating Distribution Chart */}
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-lg">Rating Distribution</CardTitle>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Info className="h-4 w-4" />
                  </Button>
                </div>
                <CardDescription>Customer ratings across categories</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart outerRadius={90} width={730} height={250} data={ratingData}>
                      <PolarGrid />
                      <PolarAngleAxis dataKey="subject" />
                      <PolarRadiusAxis angle={30} domain={[3, 5]} />
                      <Radar name="Your Restaurant" dataKey="Your Restaurant" stroke="#74C365" fill="#74C365" fillOpacity={0.2} />
                      <Radar name="Top Competitor" dataKey="Top Competitor" stroke="#E23D28" fill="#E23D28" fillOpacity={0.2} />
                      <Legend />
                      <Tooltip />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TierRestriction>

        {/* Competitor List */}
        <Card className="mb-6">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-center">
              <CardTitle>Top Competitors (12 within 1 mile)</CardTitle>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  <Filter className="mr-2 h-4 w-4" /> Filter
                </Button>
                <Button variant="outline" size="sm">
                  <SlidersHorizontal className="mr-2 h-4 w-4" /> Sort
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
              {competitors.map((competitor) => (
                <div key={competitor.id} className="bg-white border border-border rounded-lg overflow-hidden hover:shadow-md transition">
                  <div className="relative h-40 bg-muted">
                    <img src={competitor.image} alt={competitor.name} className="w-full h-full object-cover" />
                    <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-full text-xs font-bold flex items-center">
                      <span className="mr-1">★</span>
                      {competitor.rating}
                    </div>
                    <div className="absolute bottom-2 left-2 bg-white px-2 py-1 rounded-full text-xs font-medium">
                      <span className="mr-1">👥</span> {competitor.seats} seats
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-bold text-lg">{competitor.name}</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          {competitor.distance} • {renderPriceLevel(competitor.priceLevel)}
                        </p>
                      </div>
                      <div className={`text-xs font-bold px-2 py-1 rounded-full ${competitor.rankClass}`}>
                        {competitor.rank}
                      </div>
                    </div>
                    <p className="text-sm text-foreground mb-3">{competitor.description}</p>
                    <div className="flex justify-between text-sm">
                      <div>
                        <p className="text-muted-foreground">Avg. Check</p>
                        <p className="font-bold">{competitor.avgCheck}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Seats</p>
                        <p className="font-bold">{competitor.seats}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Wait Time</p>
                        <p className="font-bold">{competitor.waitTime}</p>
                      </div>
                    </div>
                  </div>
                  <div className="px-4 py-3 bg-muted/50 border-t border-border flex justify-between">
                    <Button variant="ghost" size="sm">
                      <Search className="mr-2 h-4 w-4" /> Analyze
                    </Button>
                    <Button variant="ghost" size="sm">
                      <ExternalLink className="mr-2 h-4 w-4" /> Visit
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <Button className="mt-6 w-full" variant="outline">
              <Plus className="mr-2 h-4 w-4" /> Load More Competitors
            </Button>
          </CardContent>
        </Card>

        {/* Competitive Benchmarking */}
        <TierRestriction requiredTier="pro">
          <Card className="mb-6">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center">
                <CardTitle>Competitive Benchmarking</CardTitle>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" /> Export
                  </Button>
                  <Button variant="outline" size="sm">
                    <SlidersHorizontal className="mr-2 h-4 w-4" /> Customize
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left border-b border-border">
                      <th className="pb-2 text-sm font-medium text-muted-foreground">Metric</th>
                      <th className="pb-2 text-sm font-medium text-muted-foreground">Your Restaurant</th>
                      <th className="pb-2 text-sm font-medium text-muted-foreground">Bistro 42</th>
                      <th className="pb-2 text-sm font-medium text-muted-foreground">Cafe Luna</th>
                      <th className="pb-2 text-sm font-medium text-muted-foreground">The Green Fork</th>
                      <th className="pb-2 text-sm font-medium text-muted-foreground">Market Avg.</th>
                    </tr>
                  </thead>
                  <tbody>
                    {benchmarkingData.map((row, index) => (
                      <tr key={index} className="border-b border-border hover:bg-muted/50">
                        <td className="py-3 font-medium">{row.metric}</td>
                        <td className="py-3 font-bold text-primary">{row.yourRestaurant}</td>
                        <td className="py-3">{row.bistro42}</td>
                        <td className="py-3">{row.cafeLuna}</td>
                        <td className="py-3">{row.greenFork}</td>
                        <td className="py-3">{row.marketAvg}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TierRestriction>

        {/* AI Recommendations */}
        <Card>
          <CardHeader className="pb-2">
            <div className="flex justify-between items-center">
              <CardTitle>AI-Powered Competitive Strategies</CardTitle>
              <Button variant="ghost" size="sm">
                <RefreshCw className="mr-2 h-4 w-4" /> Refresh
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
              {recommendations.map((rec, index) => (
                <div key={index} className="p-4 border border-border rounded-lg hover:shadow-md transition">
                  <div className="flex items-start space-x-3">
                    {renderIcon(rec.icon)}
                    <div>
                      <h4 className="font-medium mb-1">{rec.title}</h4>
                      <p className="text-sm text-muted-foreground">{rec.description}</p>
                      <div className="mt-2 flex space-x-2">
                        {rec.tags.map((tag, i) => (
                          <span key={i} className={`text-xs px-2 py-1 rounded-full ${tag.className}`}>
                            {tag.text}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default CompetitiveAnalysis;
