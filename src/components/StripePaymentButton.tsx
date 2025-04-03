
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface StripePaymentButtonProps {
  productName: string;
  amount: number; // amount in cents
  buttonText?: string;
  onSuccess?: () => void;
  disabled?: boolean;
}

export const StripePaymentButton = ({
  productName,
  amount,
  buttonText = "Subscribe Now",
  onSuccess,
  disabled = false
}: StripePaymentButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handlePayment = async () => {
    setIsLoading(true);
    
    try {
      // This is a mock implementation that simulates a payment flow
      // In a real implementation, this would call your backend API or Supabase Edge Function
      
      toast({
        title: "Processing payment...",
        description: "Please wait while we prepare your checkout session.",
      });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Normally, your backend would return a session URL from Stripe
      // For demo purposes, we're just showing a success message
      toast({
        title: "Payment Successful!",
        description: `Thank you for purchasing ${productName}!`,
        variant: "default",
      });
      
      if (onSuccess) {
        onSuccess();
      }
      
      // In a real implementation, the user would be redirected to Stripe's checkout page:
      // window.location.href = data.url;
    } catch (error) {
      console.error("Payment error:", error);
      toast({
        title: "Payment Failed",
        description: "There was an error processing your payment. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button 
      onClick={handlePayment} 
      disabled={isLoading || disabled}
      className="w-full"
    >
      {isLoading ? "Processing..." : buttonText}
    </Button>
  );
};

export default StripePaymentButton;
