
import React from 'react';
import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { GradientHeading } from "@/components/ui/gradient-heading";
import { StripePaymentButton } from "@/components/StripePaymentButton";
import { N8NWebhookForm } from "@/components/N8NWebhookForm";
import { CreditCard, Workflow, ArrowRight, Brain, ActivitySquare, BookOpen, BarChart, Users } from "lucide-react";

const Integrations = () => {
  return (
    <Layout>
      <div className="container mx-auto py-12">
        <div className="mb-12 text-center">
          <GradientHeading as="h1" className="mb-4">
            Mind Enhancement Services
          </GradientHeading>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Unlock your cognitive potential with our premium services and digital solutions.
          </p>
        </div>

        <Tabs defaultValue="services" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="services">
              <Brain className="mr-2 h-4 w-4" />
              Cognitive Services
            </TabsTrigger>
            <TabsTrigger value="automation">
              <ActivitySquare className="mr-2 h-4 w-4" />
              Automation
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="services" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Premium Mind Enhancement Programs</CardTitle>
                <CardDescription>
                  Choose from our scientifically-backed cognitive enhancement programs.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="bg-muted/50">
                    <CardHeader>
                      <CardTitle className="text-xl">Basic</CardTitle>
                      <CardDescription>Personal cognitive training</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold">$49</div>
                      <p className="text-muted-foreground">per month</p>
                      <ul className="mt-4 space-y-2 text-sm">
                        <li>• Core cognitive assessments</li>
                        <li>• Memory enhancement exercises</li>
                        <li>• Monthly progress reports</li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <StripePaymentButton 
                        productName="Basic Mind Program" 
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
                      <CardDescription>Advanced cognitive enhancement</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold">$99</div>
                      <p className="text-muted-foreground">per month</p>
                      <ul className="mt-4 space-y-2 text-sm">
                        <li>• Comprehensive cognitive assessment</li>
                        <li>• Personalized training protocol</li>
                        <li>• Weekly performance tracking</li>
                        <li>• Focus & attention optimization</li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <StripePaymentButton 
                        productName="Professional Mind Program" 
                        amount={9900} 
                        buttonText="Subscribe Now"
                        onSuccess={() => console.log("Professional plan subscribed")}
                      />
                    </CardFooter>
                  </Card>
                  
                  <Card className="bg-muted/50">
                    <CardHeader>
                      <CardTitle className="text-xl">Enterprise</CardTitle>
                      <CardDescription>Team-based cognitive solutions</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold">$249</div>
                      <p className="text-muted-foreground">per month</p>
                      <ul className="mt-4 space-y-2 text-sm">
                        <li>• Team cognitive assessments</li>
                        <li>• Group training sessions</li>
                        <li>• API access for integration</li>
                        <li>• Custom reporting dashboards</li>
                        <li>• Dedicated cognitive coach</li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <StripePaymentButton 
                        productName="Enterprise Mind Program" 
                        amount={24900} 
                        buttonText="Subscribe Now"
                      />
                    </CardFooter>
                  </Card>
                </div>

                <Card className="mt-8">
                  <CardHeader>
                    <CardTitle className="text-lg">One-time Assessments</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 border rounded-lg flex items-center justify-between">
                        <div>
                          <h3 className="font-medium">Comprehensive Cognitive Assessment</h3>
                          <p className="text-sm text-muted-foreground">In-depth analysis of your cognitive strengths and weaknesses</p>
                        </div>
                        <div className="text-right">
                          <div className="font-bold">$199</div>
                          <StripePaymentButton 
                            productName="Cognitive Assessment" 
                            amount={19900}
                            buttonText="Buy Now" 
                          />
                        </div>
                      </div>
                      <div className="p-4 border rounded-lg flex items-center justify-between">
                        <div>
                          <h3 className="font-medium">Focus & Productivity Consultation</h3>
                          <p className="text-sm text-muted-foreground">One-on-one session with a cognitive specialist</p>
                        </div>
                        <div className="text-right">
                          <div className="font-bold">$149</div>
                          <StripePaymentButton 
                            productName="Focus Consultation" 
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
                  <CardTitle>n8n Cognitive Workflow Automation</CardTitle>
                  <CardDescription>
                    Connect your cognitive enhancement programs to n8n to automate assessment and progress tracking.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-medium mb-2">What is n8n?</h3>
                      <p className="text-muted-foreground mb-4">
                        n8n is a workflow automation tool that allows you to connect your cognitive enhancement platform with thousands of other apps and services.
                      </p>
                      <h3 className="text-lg font-medium mb-2">Use Cases</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Schedule automated cognitive assessments</li>
                        <li>• Send notifications when performance metrics change</li>
                        <li>• Sync progress data with your calendar or CRM</li>
                        <li>• Create personalized training tasks</li>
                        <li>• Trigger follow-up sessions based on performance</li>
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
                  <CardTitle>Ready-made Cognitive Workflow Templates</CardTitle>
                  <CardDescription>
                    Get started quickly with these pre-built workflow templates
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card className="bg-muted/50">
                      <CardHeader className="p-4">
                        <CardTitle className="text-base">Daily Brain Training</CardTitle>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <p className="text-sm text-muted-foreground">
                          Automatically schedule and track daily cognitive exercises.
                        </p>
                      </CardContent>
                      <CardFooter className="p-4 pt-0">
                        <Button variant="outline" size="sm" className="w-full">Import Template</Button>
                      </CardFooter>
                    </Card>
                    
                    <Card className="bg-muted/50">
                      <CardHeader className="p-4">
                        <CardTitle className="text-base">Performance Alerts</CardTitle>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <p className="text-sm text-muted-foreground">
                          Get notified when cognitive metrics reach targets or decline.
                        </p>
                      </CardContent>
                      <CardFooter className="p-4 pt-0">
                        <Button variant="outline" size="sm" className="w-full">Import Template</Button>
                      </CardFooter>
                    </Card>
                    
                    <Card className="bg-muted/50">
                      <CardHeader className="p-4">
                        <CardTitle className="text-base">Progress Reports</CardTitle>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <p className="text-sm text-muted-foreground">
                          Automatically generate and deliver personalized progress reports.
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
