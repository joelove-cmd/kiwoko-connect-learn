import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard, ArrowLeft, CheckCircle } from "lucide-react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Payment = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  
  // Get application data from navigation state
  const applicationData = location.state?.applicationData;

  const handlePayment = async () => {
    setIsLoading(true);
    
    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Payment Successful!",
        description: "Your application fee has been processed. You will receive a confirmation email shortly.",
      });
      
      // Redirect to success page or home
      navigate("/", { replace: true });
    } catch (error) {
      toast({
        title: "Payment Failed",
        description: "There was an error processing your payment. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (!applicationData) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <Card className="max-w-md mx-auto">
            <CardContent className="pt-6">
              <p className="text-center text-muted-foreground">
                No application data found. Please submit your application first.
              </p>
              <Button 
                onClick={() => navigate("/apply")} 
                className="w-full mt-4"
              >
                Go to Application
              </Button>
            </CardContent>
          </Card>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <CreditCard className="h-16 w-16 mx-auto mb-6 text-white/80" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Application Fee Payment</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Complete your application by paying the required fee
            </p>
          </div>
        </div>
      </section>

      {/* Payment Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Payment Details */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CreditCard className="h-5 w-5 mr-2" />
                  Payment Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-b pb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Application Fee</span>
                    <span className="font-semibold">UGX 50,000</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h3 className="font-semibold">Payment Methods</h3>
                  <div className="space-y-2">
                    <div className="p-3 border rounded-lg flex items-center space-x-3">
                      <CreditCard className="h-5 w-5 text-primary" />
                      <span>Credit/Debit Card</span>
                    </div>
                    <div className="p-3 border rounded-lg flex items-center space-x-3">
                      <CreditCard className="h-5 w-5 text-primary" />
                      <span>Mobile Money</span>
                    </div>
                  </div>
                </div>

                <Button 
                  onClick={handlePayment}
                  className="w-full" 
                  size="lg"
                  disabled={isLoading}
                >
                  {isLoading ? "Processing..." : "Pay UGX 50,000"}
                </Button>

                <Button 
                  variant="outline" 
                  onClick={() => navigate("/apply")}
                  className="w-full"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Application
                </Button>
              </CardContent>
            </Card>

            {/* Application Summary */}
            <Card>
              <CardHeader>
                <CardTitle>Application Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">Applicant Name</p>
                  <p className="font-semibold">{applicationData.firstName} {applicationData.lastName}</p>
                </div>
                
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-semibold">{applicationData.emailAddress}</p>
                </div>
                
                <div>
                  <p className="text-sm text-muted-foreground">Program</p>
                  <p className="font-semibold">{applicationData.program}</p>
                </div>
                
                <div>
                  <p className="text-sm text-muted-foreground">Nationality</p>
                  <p className="font-semibold">{applicationData.nationality}</p>
                </div>

                <div className="pt-4 border-t">
                  <div className="flex items-center space-x-2 text-green-600">
                    <CheckCircle className="h-5 w-5" />
                    <span className="font-semibold">Application Submitted</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Your application has been received and is pending payment confirmation.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Payment Security Info */}
          <Card className="mt-8">
            <CardContent className="pt-6">
              <div className="text-center space-y-2">
                <h3 className="font-semibold">Secure Payment</h3>
                <p className="text-sm text-muted-foreground">
                  Your payment is processed securely. We do not store your payment information.
                </p>
                <p className="text-xs text-muted-foreground">
                  For any payment issues, contact our admissions office at +256 123 456 789
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Payment;