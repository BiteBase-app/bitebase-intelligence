
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TierProvider } from "@/contexts/TierContext";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Research from "./pages/Research";
import Location from "./pages/Location";
import Insights from "./pages/Insights";
import Merge from "./pages/Merge";
import NotFound from "./pages/NotFound";
import Onboarding from "./pages/Onboarding";
import RestaurantSetup from "./pages/RestaurantSetup";
import Integrations from "./pages/Integrations";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <TierProvider initialTier="free">
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/research" element={<Research />} />
            <Route path="/location" element={<Location />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/merge" element={<Merge />} />
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/restaurant-setup" element={<RestaurantSetup />} />
            <Route path="/integrations" element={<Integrations />} />
            <Route path="/payment-success" element={<Dashboard />} /> {/* Add payment success route */}
            <Route path="/payment-canceled" element={<Dashboard />} /> {/* Add payment canceled route */}
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TierProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
