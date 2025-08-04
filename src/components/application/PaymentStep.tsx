import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CreditCard, Smartphone, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface PaymentStepProps {
  paymentCompleted: boolean;
  paymentMethod: string;
  phoneNumber: string;
  isProcessingPayment: boolean;
  setPaymentMethod: (method: string) => void;
  setPhoneNumber: (phone: string) => void;
  handlePayment: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

const PaymentStep = ({ 
  paymentCompleted, 
  paymentMethod, 
  phoneNumber, 
  isProcessingPayment, 
  setPaymentMethod, 
  setPhoneNumber, 
  handlePayment, 
  onNext, 
  onPrevious 
}: PaymentStepProps) => {
  const { toast } = useToast();

  const handlePaymentAndNext = async () => {
    if (!paymentCompleted) {
      if (!paymentMethod) {
        toast({
          title: "Payment Method Required",
          description: "Please select a payment method to continue.",
          variant: "destructive",
        });
        return;
      }
      await handlePayment();
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Step 3: Application Fee Payment</CardTitle>
          <p className="text-muted-foreground">Complete your application fee payment to proceed.</p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <p className="text-3xl font-bold text-primary">UGX 50,000</p>
            <p className="text-sm text-muted-foreground">Application Fee</p>
          </div>
          
          {!paymentCompleted ? (
            <>
              <div className="space-y-3">
                <Label className="text-base font-medium">Select Payment Method</Label>
                <RadioGroup 
                  value={paymentMethod} 
                  onValueChange={setPaymentMethod}
                  className="space-y-2"
                >
                  <div className="flex items-center space-x-3 p-3 border rounded-lg">
                    <RadioGroupItem value="mtn" id="mtn" />
                    <Smartphone className="h-5 w-5 text-yellow-500" />
                    <Label htmlFor="mtn">MTN Mobile Money</Label>
                  </div>
                  <div className="flex items-center space-x-3 p-3 border rounded-lg">
                    <RadioGroupItem value="airtel" id="airtel" />
                    <Smartphone className="h-5 w-5 text-red-500" />
                    <Label htmlFor="airtel">Airtel Money</Label>
                  </div>
                  <div className="flex items-center space-x-3 p-3 border rounded-lg">
                    <RadioGroupItem value="card" id="card" />
                    <CreditCard className="h-5 w-5 text-primary" />
                    <Label htmlFor="card">Credit/Debit Card</Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Phone Number Input for Mobile Money */}
              {(paymentMethod === "mtn" || paymentMethod === "airtel") && (
                <div className="space-y-2">
                  <Label htmlFor="phoneNumber">Phone Number</Label>
                  <Input
                    id="phoneNumber"
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="Enter your phone number"
                    className="w-full"
                  />
                </div>
              )}

              <Button 
                onClick={handlePaymentAndNext}
                className="w-full" 
                size="lg"
                disabled={
                  !paymentMethod || 
                  isProcessingPayment || 
                  ((paymentMethod === "mtn" || paymentMethod === "airtel") && !phoneNumber.trim())
                }
              >
                {isProcessingPayment ? "Processing Payment..." : "Pay UGX 50,000"}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                You must complete payment before proceeding to the final step
              </p>
            </>
          ) : (
            <div className="text-center space-y-4">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
              <div>
                <p className="font-semibold text-green-700 text-lg">Payment Completed!</p>
                <p className="text-sm text-muted-foreground">
                  You can now proceed to the declaration step
                </p>
              </div>
            </div>
          )}

          <div className="flex justify-between pt-6">
            <Button 
              variant="outline"
              onClick={onPrevious}
              size="lg"
            >
              Previous
            </Button>
            {paymentCompleted && (
              <Button 
                onClick={onNext}
                size="lg"
              >
                Next: Declaration
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Information Card */}
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              Payment Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-sm">
              <div>
                <p className="font-semibold">Payment Security</p>
                <p className="text-muted-foreground">Your payment is processed securely using industry-standard encryption.</p>
              </div>
              <div>
                <p className="font-semibold">Payment Confirmation</p>
                <p className="text-muted-foreground">You will receive a confirmation message once your payment is processed.</p>
              </div>
              <div>
                <p className="font-semibold">Refund Policy</p>
                <p className="text-muted-foreground">Application fees are non-refundable once submitted.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Need Help?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              If you experience any payment issues, contact our support team.
            </p>
            <div className="space-y-2 text-sm">
              <p><strong>Phone:</strong> +256 123 456 789</p>
              <p><strong>Email:</strong> support@kiwoko.ac.ug</p>
              <p><strong>Office Hours:</strong> Mon-Fri, 8:00 AM - 5:00 PM</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PaymentStep;