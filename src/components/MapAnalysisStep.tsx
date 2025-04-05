
import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { MapPin, Layers, Filter, Ruler, Building, Users, DollarSign, TrendingUp, ShoppingBag } from "lucide-react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

// Set the Mapbox token - in production, this should come from environment variables
const MAPBOX_TOKEN = "pk.eyJ1Ijoia2hpd25pdGkiLCJhIjoiY203cm1oaWtyMWI4ejJpcHVuN2U2bHB6MiJ9.w9KWAvFEvF7bCdX-8Povkg";

interface MapMetric {
  id: string;
  title: string;
  value: string | null;
  change: number | null;
  icon: React.ReactNode;
}

interface MapAnalysisStepProps {
  formData: any;
  updateFormData: (key: string, value: any) => void;
}

const MapAnalysisStep = ({ formData, updateFormData }: MapAnalysisStepProps) => {
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const [radius, setRadius] = useState([formData.locationRadius || 1]); // km
  const [metrics, setMetrics] = useState<MapMetric[]>([
    {
      id: "foot-traffic",
      title: "Foot Traffic",
      value: null,
      change: null,
      icon: <Users className="h-5 w-5 text-muted-foreground" />
    },
    {
      id: "competition",
      title: "Competition",
      value: null,
      change: null,
      icon: <Building className="h-5 w-5 text-muted-foreground" />
    },
    {
      id: "rent-avg",
      title: "Avg. Rent",
      value: null,
      change: null,
      icon: <DollarSign className="h-5 w-5 text-muted-foreground" />
    },
    {
      id: "growth",
      title: "Market Growth",
      value: null,
      change: null,
      icon: <TrendingUp className="h-5 w-5 text-muted-foreground" />
    },
    {
      id: "demand",
      title: "Cuisine Demand",
      value: null,
      change: null,
      icon: <ShoppingBag className="h-5 w-5 text-muted-foreground" />
    },
  ]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  useEffect(() => {
    // Update form data when radius changes
    updateFormData("locationRadius", radius[0]);
  }, [radius, updateFormData]);

  useEffect(() => {
    if (!mapContainerRef.current) return;
    
    // Initialize the map centered on the restaurant's address or default location
    mapboxgl.accessToken = MAPBOX_TOKEN;
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [-73.9857, 40.7484], // Default to NYC
      zoom: 12
    });
    
    // Add navigation controls
    map.addControl(new mapboxgl.NavigationControl(), 'top-right');
    map.addControl(new mapboxgl.GeolocateControl({
      positionOptions: { enableHighAccuracy: true },
      trackUserLocation: true
    }), 'top-right');
    
    // Add a marker for the restaurant location if coordinates are available
    // In production, we would geocode the address to get coordinates
    if (formData.streetAddress && formData.city) {
      // This would use a real geocoding service in production
      new mapboxgl.Marker()
        .setLngLat([-73.9857, 40.7484])
        .addTo(map);
    }
    
    mapRef.current = map;
    
    return () => {
      map.remove();
    };
  }, [formData.streetAddress, formData.city]);

  const startAnalysis = async () => {
    if (!formData.streetAddress || !formData.city) {
      return;
    }
    
    setIsAnalyzing(true);
    
    try {
      // In production, this would call an actual API endpoint
      console.log("Starting analysis for location:", { 
        address: formData.streetAddress,
        city: formData.city,
        state: formData.state,
        zipCode: formData.zipCode,
        radius: radius[0]
      });
      
      // Simulate API call with timeout
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // In production, these values would come from the API response
      setMetrics(prev => [
        {
          ...prev[0],
          value: "Loading...",
          change: null
        },
        {
          ...prev[1],
          value: "Loading...",
          change: null
        },
        {
          ...prev[2],
          value: "Loading...",
          change: null
        },
        {
          ...prev[3],
          value: "Loading...",
          change: null
        },
        {
          ...prev[4],
          value: "Loading...",
          change: null
        }
      ]);
    } catch (error) {
      console.error("Error during analysis:", error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full h-[600px]">
      {/* Left Sidebar - Analysis Controls */}
      <div className="md:col-span-1 glass p-4 space-y-6">
        <div className="space-y-2">
          <h3 className="text-lg font-medium">Location Analysis</h3>
          <p className="text-sm text-muted-foreground">Analyze your restaurant location to understand market potential.</p>
        </div>
        
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="radius">Search Radius</Label>
              <span className="text-sm text-muted-foreground">{radius[0]} km</span>
            </div>
            <Slider 
              id="radius"
              min={0.5} 
              max={5} 
              step={0.5} 
              value={radius} 
              onValueChange={setRadius} 
            />
          </div>
          
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Location:</p>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <p className="text-sm truncate">
                {formData.streetAddress ? 
                  `${formData.streetAddress}, ${formData.city}, ${formData.state} ${formData.zipCode}` :
                  "No address provided"}
              </p>
            </div>
          </div>
          
          <Button 
            className="w-full" 
            onClick={startAnalysis} 
            disabled={isAnalyzing || !formData.streetAddress || !formData.city}
          >
            {isAnalyzing ? "Analyzing..." : "Analyze Location"}
          </Button>
        </div>
      </div>
      
      {/* Main content - Map and visualization */}
      <div className="md:col-span-3 relative">
        {/* Map Container */}
        <div className="w-full h-full rounded-lg overflow-hidden border">
          <div ref={mapContainerRef} style={{ width: "100%", height: "100%" }} />
          
          {/* Map Controls */}
          <div className="absolute top-4 left-4 z-10">
            <Card className="w-full max-w-xs bg-background/95 backdrop-blur-sm shadow-lg">
              <CardContent className="p-3 flex gap-2 flex-wrap">
                <Button variant="outline" size="sm">
                  <Layers className="h-4 w-4 mr-1" />
                  Layers
                </Button>
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-1" />
                  Filter
                </Button>
                <Button variant="outline" size="sm">
                  <Ruler className="h-4 w-4 mr-1" />
                  Measure
                </Button>
              </CardContent>
            </Card>
          </div>
          
          {/* Floating Metrics */}
          <div className="absolute bottom-4 left-4 right-4 z-10 flex gap-3 overflow-x-auto pb-2">
            {metrics.map((metric) => (
              <Card key={metric.id} className="min-w-[150px] max-w-[200px] flex-shrink-0 bg-background/95 backdrop-blur-sm">
                <CardContent className="p-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm font-medium">{metric.title}</p>
                      <p className="text-xl font-bold">{metric.value || "—"}</p>
                    </div>
                    <div className="mt-1">{metric.icon}</div>
                  </div>
                  {metric.change !== null && (
                    <div className={`text-xs mt-1 ${metric.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {metric.change >= 0 ? `+${metric.change}%` : `${metric.change}%`} vs. avg
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapAnalysisStep;
