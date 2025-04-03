
import React from 'react';
import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { GradientHeading } from "@/components/ui/gradient-heading";
import { StripePaymentButton } from "@/components/StripePaymentButton";
import { N8NWebhookForm } from "@/components/N8NWebhookForm";
import { CreditCard, Workflow, ArrowRight } from "lucide-react";

const Integrations = () => {
  return (
    <Layout>
      <div className="container mx-auto py-12">
        <div className="mb-12 text-center">
          <GradientHeading as="h1" className="mb-4">
            Integrations
          </GradientHeading>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Connect BiteBase with your favorite services to streamline your restaurant management workflow.
          </p>
        </div>

        <Tabs defaultValue="payments" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="payments">
              <CreditCard className="mr-2 h-4 w-4" />
              Payments
            </TabsTrigger>
            <TabsTrigger value="automation">
              <Workflow className="mr-2 h-4 w-4" />
              Automation
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="payments" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Payment Integration</CardTitle>
                <CardDescription>
                  Process payments securely with Stripe integration.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="bg-muted/50">
                    <CardHeader>
                      <CardTitle className="text-xl">Basic</CardTitle>
                      <CardDescription>For small restaurants</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold">$49</div>
                      <p className="text-muted-foreground">per month</p>
                      <ul className="mt-4 space-y-2 text-sm">
                        <li>• Basic location analysis</li>
                        <li>• Competition tracking</li>
                        <li>• Monthly reports</li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <StripePaymentButton 
                        productName="Basic Plan" 
                        amount={4900} 
                        buttonText="Subscribe Now"
                      />
                    </CardFooter>
                  </Card>
                  
                  <Card className="border-bitebase-green-600 shadow-lg relative">
                    <div className="absolute top-0 right-6 -translate-y-1/2 bg-bitebase-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      POPULAR
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl">Professional</CardTitle>
                      <CardDescription>For growing restaurants</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold">$99</div>
                      <p className="text-muted-foreground">per month</p>
                      <ul className="mt-4 space-y-2 text-sm">
                        <li>• Advanced location analytics</li>
                        <li>• Demographic insights</li>
                        <li>• Weekly reports</li>
                        <li>• Menu optimization</li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <StripePaymentButton 
                        productName="Professional Plan" 
                        amount={9900} 
                        buttonText="Subscribe Now"
                        onSuccess={() => console.log("Professional plan subscribed")}
                      />
                    </CardFooter>
                  </Card>
                  
                  <Card className="bg-muted/50">
                    <CardHeader>
                      <CardTitle className="text-xl">Enterprise</CardTitle>
                      <CardDescription>For restaurant chains</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold">$249</div>
                      <p className="text-muted-foreground">per month</p>
                      <ul className="mt-4 space-y-2 text-sm">
                        <li>• Full market intelligence</li>
                        <li>• Multi-location tracking</li>
                        <li>• API access</li>
                        <li>• Custom reporting</li>
                        <li>• Dedicated support</li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <StripePaymentButton 
                        productName="Enterprise Plan" 
                        amount={24900} 
                        buttonText="Subscribe Now"
                      />
                    </CardFooter>
                  </Card>
                </div>

                <Card className="mt-8">
                  <CardHeader>
                    <CardTitle className="text-lg">One-time Services</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 border rounded-lg flex items-center justify-between">
                        <div>
                          <h3 className="font-medium">Location Analysis Report</h3>
                          <p className="text-sm text-muted-foreground">In-depth analysis of a specific location</p>
                        </div>
                        <div className="text-right">
                          <div className="font-bold">$199</div>
                          <StripePaymentButton 
                            productName="Location Analysis Report" 
                            amount={19900}
                            buttonText="Buy Now" 
                          />
                        </div>
                      </div>
                      <div className="p-4 border rounded-lg flex items-center justify-between">
                        <div>
                          <h3 className="font-medium">Competitor Analysis</h3>
                          <p className="text-sm text-muted-foreground">Detailed report on local competition</p>
                        </div>
                        <div className="text-right">
                          <div className="font-bold">$149</div>
                          <StripePaymentButton 
                            productName="Competitor Analysis" 
                            amount={14900}
                            buttonText="Buy Now" 
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="automation" className="mt-6">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>n8n Workflow Automation</CardTitle>
                  <CardDescription>
                    Connect BiteBase to n8n to automate your restaurant analysis workflows.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-medium mb-2">What is n8n?</h3>
                      <p className="text-muted-foreground mb-4">
                        n8n is a workflow automation tool that allows you to connect BiteBase with thousands of other apps and services.
                      </p>
                      <h3 className="text-lg font-medium mb-2">Use Cases</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Schedule automated restaurant market reports</li>
                        <li>• Send notifications when customer trends change</li>
                        <li>• Sync location data with your CRM</li>
                        <li>• Create tasks in project management tools</li>
                        <li>• Trigger analysis when new data becomes available</li>
                      </ul>
                      <div className="mt-6">
                        <Button variant="outline" className="flex items-center" asChild>
                          <a href="https://n8n.io" target="_blank" rel="noopener noreferrer">
                            Learn more about n8n
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </div>
                    <div>
                      <N8NWebhookForm />
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Ready-made n8n Templates</CardTitle>
                  <CardDescription>
                    Get started quickly with these pre-built workflow templates
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card className="bg-muted/50">
                      <CardHeader className="p-4">
                        <CardTitle className="text-base">Daily Market Analysis</CardTitle>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <p className="text-sm text-muted-foreground">
                          Automatically run market analysis and receive daily reports.
                        </p>
                      </CardContent>
                      <CardFooter className="p-4 pt-0">
                        <Button variant="outline" size="sm" className="w-full">Import Template</Button>
                      </CardFooter>
                    </Card>
                    
                    <Card className="bg-muted/50">
                      <CardHeader className="p-4">
                        <CardTitle className="text-base">Competitor Alerts</CardTitle>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <p className="text-sm text-muted-foreground">
                          Get notified when new competitors open in your target areas.
                        </p>
                      </CardContent>
                      <CardFooter className="p-4 pt-0">
                        <Button variant="outline" size="sm" className="w-full">Import Template</Button>
                      </CardFooter>
                    </Card>
                    
                    <Card className="bg-muted/50">
                      <CardHeader className="p-4">
                        <CardTitle className="text-base">CRM Integration</CardTitle>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <p className="text-sm text-muted-foreground">
                          Sync your customer data with popular CRM platforms.
                        </p>
                      </CardContent>
                      <CardFooter className="p-4 pt-0">
                        <Button variant="outline" size="sm" className="w-full">Import Template</Button>
                      </CardFooter>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Integrations;
