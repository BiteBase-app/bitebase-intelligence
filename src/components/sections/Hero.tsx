
import React from "react";
import { ArrowRight, BarChart2, MapPin, Search, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-background to-secondary py-16 sm:py-24">
      <div className="absolute inset-y-0 right-0 hidden w-1/2 sm:block">
        <div className="absolute inset-0 bg-bite-50/30 backdrop-blur-sm rounded-l-3xl overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="grid grid-cols-3 gap-4 opacity-20">
              {Array(9)
                .fill(0)
                .map((_, i) => (
                  <div
                    key={i}
                    className="w-24 h-24 sm:w-32 sm:h-32 rounded-lg bg-bite-600"
                    style={{
                      opacity: Math.random() * 0.5 + 0.2,
                      transform: `rotate(${Math.random() * 10 - 5}deg)`,
                    }}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="sm:max-w-lg">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            <span className="block">AI-Powered</span>
            <span className="block text-bite-600">Restaurant Intelligence</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Make data-driven decisions for your restaurant business with our comprehensive market research platform. Analyze locations, trends, and consumer behavior in minutes, not weeks.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button size="lg" className="font-medium">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="font-medium">
              Watch Demo
            </Button>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center p-3 rounded-lg bg-background/80 backdrop-blur-sm border border-border">
                <div className="flex items-center justify-center h-10 w-10 rounded-md bg-bite-100 text-bite-600">
                  <MapPin className="h-5 w-5" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-foreground">Location Analysis</p>
                  <p className="text-xs text-muted-foreground">Find the perfect spot</p>
                </div>
              </div>
              
              <div className="flex items-center p-3 rounded-lg bg-background/80 backdrop-blur-sm border border-border">
                <div className="flex items-center justify-center h-10 w-10 rounded-md bg-bite-100 text-bite-600">
                  <Search className="h-5 w-5" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-foreground">Market Research</p>
                  <p className="text-xs text-muted-foreground">Identify opportunities</p>
                </div>
              </div>
              
              <div className="flex items-center p-3 rounded-lg bg-background/80 backdrop-blur-sm border border-border">
                <div className="flex items-center justify-center h-10 w-10 rounded-md bg-bite-100 text-bite-600">
                  <Users className="h-5 w-5" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-foreground">Consumer Insights</p>
                  <p className="text-xs text-muted-foreground">Understand your customers</p>
                </div>
              </div>
              
              <div className="flex items-center p-3 rounded-lg bg-background/80 backdrop-blur-sm border border-border">
                <div className="flex items-center justify-center h-10 w-10 rounded-md bg-bite-100 text-bite-600">
                  <BarChart2 className="h-5 w-5" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-foreground">Data Analysis</p>
                  <p className="text-xs text-muted-foreground">Make informed decisions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
