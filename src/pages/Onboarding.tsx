import React, { useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Building, 
  BarChart2, 
  Users, 
  Briefcase, 
  DollarSign, 
  Target, 
  PieChart, 
  ArrowRight,
  Plus
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Checkbox } from "@/components/ui/checkbox";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

// Define form schema for basic restaurant info
const restaurantInfoSchema = z.object({
  name: z.string().min(2, "Restaurant name must be at least 2 characters"),
  location: z.string().min(5, "Please enter a valid address"),
  cuisine: z.string().min(2, "Please specify the cuisine type"),
  isNew: z.boolean(),
});

type RestaurantInfoFormValues = z.infer<typeof restaurantInfoSchema>;

// Step component for multi-step process
const Step = ({ 
  title, 
  description, 
  icon: Icon, 
  isActive = false, 
  isCompleted = false, 
  onClick 
}: { 
  title: string; 
  description: string; 
  icon: React.ComponentType<any>; 
  isActive?: boolean; 
  isCompleted?: boolean; 
  onClick: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className={`flex items-start p-4 rounded-lg cursor-pointer transition-all ${
        isActive 
          ? "bg-primary/10 border border-primary" 
          : isCompleted 
          ? "bg-secondary/10 border border-secondary" 
          : "bg-muted/30 border border-border hover:bg-muted/50"
      }`}
    >
      <div className={`flex items-center justify-center w-10 h-10 rounded-full mr-4 ${
        isActive 
          ? "bg-primary text-primary-foreground" 
          : isCompleted 
          ? "bg-secondary text-secondary-foreground" 
          : "bg-muted text-muted-foreground"
      }`}>
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

// Research workflow card
const WorkflowCard = ({ 
  title, 
  description, 
  items,
  isExpanded = false,
}: { 
  title: string; 
  description: string; 
  items: string[];
  isExpanded?: boolean;
}) => {
  const [expanded, setExpanded] = useState(isExpanded);
  
  return (
    <Card className="mb-4">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <Collapsible open={expanded} onOpenChange={setExpanded}>
          <div className="flex justify-between items-center">
            <p className="text-sm text-muted-foreground">
              {expanded ? "Required data and steps" : `${items.length} steps in this phase`}
            </p>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm">
                {expanded ? "Hide details" : "Show details"}
              </Button>
            </CollapsibleTrigger>
          </div>
          
          <CollapsibleContent className="mt-2">
            <ul className="space-y-1">
              {items.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
    </Card>
  );
};

const Onboarding = () => {
  const { toast } = useToast();
  const [businessType, setBusinessType] = useState<"new" | "existing" | null>(null);
  const [currentStep, setCurrentStep] = useState(0);
  
  // Setup form
  const form = useForm<RestaurantInfoFormValues>({
    resolver: zodResolver(restaurantInfoSchema),
    defaultValues: {
      name: "",
      location: "",
      cuisine: "",
      isNew: true,
    },
  });

  // New restaurant research workflow data
  const newBusinessSteps = [
    {
      id: "define",
      title: "Define Business Idea & Objectives",
      description: "Identify your core restaurant concept and goals",
      icon: Briefcase,
      items: [
        "Define your restaurant concept and cuisine type",
        "Identify target customers and dining experience",
        "Set measurable business objectives",
        "Research industry trends and regulations",
      ],
    },
    {
      id: "market",
      title: "Industry & Market Analysis",
      description: "Understand market size, trends, and competition",
      icon: BarChart2,
      items: [
        "Analyze local restaurant market size and growth trends",
        "Identify key industry drivers and seasonal factors",
        "Conduct SWOT analysis for your restaurant concept",
        "Research local food trends and customer preferences",
      ],
    },
    {
      id: "customer",
      title: "Customer Research & Segmentation",
      description: "Identify your ideal customers and their preferences",
      icon: Users,
      items: [
        "Create detailed customer personas for your target audience",
        "Segment customers by demographics, income, and dining habits",
        "Conduct surveys and interviews with potential customers",
        "Analyze dining preferences and frequency patterns",
      ],
    },
    {
      id: "competition",
      title: "Competitive Landscape & Positioning",
      description: "Analyze competitors and position your restaurant",
      icon: Target,
      items: [
        "Identify direct and indirect competitors in your area",
        "Analyze competitor menus, pricing, and positioning",
        "Conduct on-site visits to analyze customer experience",
        "Identify gaps in the market and opportunities",
      ],
    },
    {
      id: "pricing",
      title: "Menu & Pricing Strategy",
      description: "Develop your menu and pricing strategy",
      icon: DollarSign,
      items: [
        "Develop menu items based on target customer preferences",
        "Conduct food cost analysis and pricing strategy",
        "Test menu items with focus groups or soft openings",
        "Analyze profit margins and break-even points",
      ],
    },
    {
      id: "financial",
      title: "Financial Feasibility & Planning",
      description: "Estimate costs, revenue, and profitability",
      icon: PieChart,
      items: [
        "Estimate startup costs (rent, renovations, equipment)",
        "Calculate operational costs (labor, food, utilities)",
        "Create revenue projections based on capacity and turnover",
        "Develop cash flow forecasts and break-even analysis",
      ],
    },
  ];

  // Existing restaurant research workflow data
  const existingBusinessSteps = [
    {
      id: "reassess",
      title: "Reassess Business Goals & Market Position",
      description: "Evaluate your current position and set new goals",
      icon: Briefcase,
      items: [
        "Define new business goals (growth, profit increase, expansion)",
        "Conduct a SWOT analysis of your current operations",
        "Benchmark your current vs. ideal market positioning",
        "Identify operational strengths and weaknesses",
      ],
    },
    {
      id: "customer-research",
      title: "Customer Research & Retention Strategies",
      description: "Understand and improve customer satisfaction",
      icon: Users,
      items: [
        "Analyze customer feedback, reviews, and satisfaction data",
        "Calculate customer lifetime value and repeat visit rate",
        "Implement loyalty programs and personalization strategies",
        "Identify opportunities to attract new customer segments",
      ],
    },
    {
      id: "competitive",
      title: "Competitive & Market Analysis",
      description: "Analyze market trends and competition",
      icon: Target,
      items: [
        "Conduct competitor benchmarking (menu, pricing, marketing)",
        "Identify emerging food trends and customer preferences",
        "Analyze seasonal patterns in your business",
        "Research new technologies or service models in the industry",
      ],
    },
    {
      id: "menu-optimization",
      title: "Menu & Pricing Optimization",
      description: "Improve your menu performance and pricing",
      icon: DollarSign,
      items: [
        "Analyze menu item performance (sales volume vs. profit margin)",
        "Conduct menu engineering analysis (stars, puzzles, plowhorses, dogs)",
        "Test price elasticity of popular menu items",
        "Develop seasonal or special menu strategies",
      ],
    },
    {
      id: "marketing",
      title: "Marketing & Customer Acquisition",
      description: "Improve your marketing and customer acquisition",
      icon: BarChart2,
      items: [
        "Optimize online presence (website, SEO, social media)",
        "Implement targeted marketing campaigns",
        "Develop partnerships with delivery platforms or local businesses",
        "Analyze marketing ROI and customer acquisition costs",
      ],
    },
    {
      id: "operational",
      title: "Operational & Cost Optimization",
      description: "Improve efficiency and reduce costs",
      icon: PieChart,
      items: [
        "Analyze labor costs and scheduling efficiency",
        "Optimize inventory management and reduce food waste",
        "Negotiate better vendor deals and supply contracts",
        "Implement technology solutions for operational efficiency",
      ],
    },
  ];

  const onSubmit = (data: RestaurantInfoFormValues) => {
    console.log("Form data:", data);
    toast({
      title: "Restaurant information saved",
      description: "Your restaurant details have been saved successfully.",
    });
    setCurrentStep(1);
  };

  return (
    <Layout>
      <div className="container py-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Restaurant Setup</h1>
            <p className="text-xl text-muted-foreground">
              Set up your restaurant profile and get started with market research.
            </p>
          </div>

          {!businessType ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <Card className="overflow-hidden relative">
                <CardHeader>
                  <CardTitle>New Restaurant</CardTitle>
                  <CardDescription>
                    I'm planning to open a new restaurant and need market research.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2 mb-4">
                    <Building className="h-10 w-10 text-primary" />
                    <div>
                      <h3 className="font-medium">Start from scratch</h3>
                      <p className="text-sm text-muted-foreground">
                        Comprehensive research for a new restaurant concept
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Location analysis & site selection</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Target market & customer research</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Competitor analysis & positioning</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Financial planning & feasibility studies</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    onClick={() => setBusinessType("new")} 
                    className="w-full"
                  >
                    Choose This Option
                  </Button>
                </CardFooter>
              </Card>

              <Card className="overflow-hidden relative">
                <CardHeader>
                  <CardTitle>Existing Restaurant</CardTitle>
                  <CardDescription>
                    I already have a restaurant and want to improve my business.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2 mb-4">
                    <Building className="h-10 w-10 text-primary" />
                    <div>
                      <h3 className="font-medium">Optimize existing business</h3>
                      <p className="text-sm text-muted-foreground">
                        Growth strategies for your current restaurant
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Performance analysis & benchmarking</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Menu optimization & pricing strategy</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Customer retention & acquisition</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Operational efficiency improvements</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    onClick={() => setBusinessType("existing")} 
                    className="w-full"
                  >
                    Choose This Option
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ) : (
            <div>
              <Button
                variant="outline"
                onClick={() => setBusinessType(null)}
                className="mb-6"
              >
                Back to Selection
              </Button>

              <Tabs defaultValue="steps" className="w-full">
                <TabsList className="grid grid-cols-2 mb-6">
                  <TabsTrigger value="steps">Setup Steps</TabsTrigger>
                  <TabsTrigger value="workflow">Research Workflow</TabsTrigger>
                </TabsList>

                <TabsContent value="steps">
                  <div className="space-y-6">
                    {currentStep === 0 && (
                      <Card>
                        <CardHeader>
                          <CardTitle>Basic Restaurant Information</CardTitle>
                          <CardDescription>
                            Let's start with the basic details about your restaurant.
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                              <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Restaurant Name</FormLabel>
                                    <FormControl>
                                      <Input placeholder="Enter restaurant name" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                      The name of your restaurant as it will appear to customers.
                                    </FormDescription>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={form.control}
                                name="location"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Location/Address</FormLabel>
                                    <FormControl>
                                      <Input placeholder="Enter address" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                      The physical address or location of your restaurant.
                                    </FormDescription>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={form.control}
                                name="cuisine"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Cuisine Type</FormLabel>
                                    <FormControl>
                                      <Input placeholder="E.g., Italian, Chinese, Fusion" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                      The primary type of cuisine your restaurant serves.
                                    </FormDescription>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={form.control}
                                name="isNew"
                                render={({ field }) => (
                                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                                    <FormControl>
                                      <Checkbox
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                      />
                                    </FormControl>
                                    <div className="space-y-1 leading-none">
                                      <FormLabel>New Restaurant</FormLabel>
                                      <FormDescription>
                                        Check this if your restaurant is not yet operational.
                                      </FormDescription>
                                    </div>
                                  </FormItem>
                                )}
                              />
                              <Button type="submit" className="w-full">
                                Save and Continue <ArrowRight className="ml-2 h-4 w-4" />
                              </Button>
                            </form>
                          </Form>
                        </CardContent>
                      </Card>
                    )}

                    {currentStep === 1 && (
                      <div>
                        <h2 className="text-2xl font-bold mb-4">
                          {businessType === "new" ? "New Restaurant Setup" : "Restaurant Optimization"}
                        </h2>
                        
                        <div className="grid grid-cols-1 gap-4 mb-6">
                          {(businessType === "new" ? newBusinessSteps : existingBusinessSteps).map((step, index) => (
                            <Step
                              key={step.id}
                              title={step.title}
                              description={step.description}
                              icon={step.icon}
                              isActive={false}
                              isCompleted={false}
                              onClick={() => {
                                toast({
                                  title: "Coming Soon",
                                  description: `The ${step.title} step will be available soon.`,
                                });
                              }}
                            />
                          ))}
                        </div>
                        
                        <Button
                          onClick={() => {
                            toast({
                              title: "Demo Version",
                              description: "This is a demo of the restaurant setup flow. Additional functionality will be added in future updates.",
                            });
                          }}
                          className="w-full"
                        >
                          Start Research Process <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    )}
                  </div>
                </TabsContent>

                <TabsContent value="workflow">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-2xl font-bold">
                        {businessType === "new" 
                          ? "New Restaurant Research Workflow" 
                          : "Restaurant Optimization Workflow"}
                      </h2>
                      <Button
                        variant="outline"
                        onClick={() => {
                          toast({
                            title: "Resources Downloaded",
                            description: "Market research templates and resources have been downloaded.",
                          });
                        }}
                      >
                        <Plus className="mr-2 h-4 w-4" />
                        Get Templates
                      </Button>
                    </div>
                    
                    <p className="text-muted-foreground mb-6">
                      {businessType === "new"
                        ? "Follow this comprehensive workflow to research and plan your new restaurant business."
                        : "Use this workflow to analyze and optimize your existing restaurant operations."}
                    </p>
                    
                    {(businessType === "new" ? newBusinessSteps : existingBusinessSteps).map((step, index) => (
                      <WorkflowCard
                        key={step.id}
                        title={step.title}
                        description={step.description}
                        items={step.items}
                        isExpanded={index === 0}
                      />
                    ))}
                    
                    <div className="mt-6 pt-6 border-t">
                      <h3 className="text-lg font-medium mb-2">Need help with your research?</h3>
                      <p className="text-muted-foreground mb-4">
                        Our team of experts can help you with market research, business planning, and more.
                      </p>
                      <Button
                        onClick={() => {
                          toast({
                            title: "Contact Request Sent",
                            description: "Our team will contact you shortly to discuss your restaurant research needs.",
                          });
                        }}
                      >
                        Contact Our Expert Team
                      </Button>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Onboarding;
