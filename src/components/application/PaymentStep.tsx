import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CreditCard, Smartphone, CheckCircle, Upload, ExternalLink, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState, useRef } from "react";

interface PaymentStepProps {
  paymentCompleted: boolean;
  paymentMethod: string;
  phoneNumber: string;
  isProcessingPayment: boolean;
  paymentScreenshot: File | null;
  setPaymentMethod: (method: string) => void;
  setPhoneNumber: (phone: string) => void;
  setPaymentScreenshot: (file: File | null) => void;
  handlePayment: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

const PaymentStep = ({ 
  paymentCompleted, 
  paymentMethod, 
  phoneNumber, 
  isProcessingPayment,
  paymentScreenshot,
  setPaymentMethod, 
  setPhoneNumber,
  setPaymentScreenshot,
  handlePayment, 
  onNext, 
  onPrevious 
}: PaymentStepProps) => {
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [hasInitiatedPayment, setHasInitiatedPayment] = useState(false);

  const handleMobilePayment = () => {
    if (!paymentMethod) {
      toast({
        title: "Payment Method Required",
        description: "Please select a payment method to continue.",
        variant: "destructive",
      });
      return;
    }

    if (paymentMethod === "mtn") {
      window.open("tel:*165*4*3*2*1*1010143633*60000#", "_self");
    } else if (paymentMethod === "airtel") {
      window.open("tel:*185*4*3*2*1*1010143633*60000#", "_self");
    }

    setHasInitiatedPayment(true);
    toast({
      title: "Payment Initiated",
      description: "Please complete the payment and upload a screenshot of the confirmation message.",
    });
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.type.startsWith('image/')) {
        setPaymentScreenshot(file);
        toast({
          title: "Screenshot Uploaded",
          description: "Payment screenshot uploaded successfully.",
        });
      } else {
        toast({
          title: "Invalid File Type",
          description: "Please upload an image file.",
          variant: "destructive",
        });
      }
    }
  };

  const removeScreenshot = () => {
    setPaymentScreenshot(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleCompletePayment = async () => {
    if (!paymentScreenshot) {
      toast({
        title: "Screenshot Required",
        description: "Please upload a payment screenshot to proceed.",
        variant: "destructive",
      });
      return;
    }
    await handlePayment();
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
                     <RadioGroupItem value="schoolpay" id="schoolpay" />
                     <CreditCard className="h-5 w-5 text-blue-500" />
                     <Label htmlFor="schoolpay">School Pay</Label>
                   </div>
                   <div className="flex items-center space-x-3 p-3 border rounded-lg">
                     <RadioGroupItem value="bank" id="bank" />
                     <CreditCard className="h-5 w-5 text-green-500" />
                     <Label htmlFor="bank">Bank Transfer</Label>
                   </div>
                </RadioGroup>
              </div>

               {/* Payment Instructions */}
               {paymentMethod === "schoolpay" && (
                 <div className="space-y-2 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                   <p className="font-medium text-blue-900">School Pay Instructions:</p>
                   <p className="text-blue-800 text-sm">
                     Use student code: <span className="font-mono bg-blue-100 px-2 py-1 rounded">1010143633</span>
                   </p>
                   <p className="text-blue-700 text-xs">
                     Visit any School Pay agent or use the School Pay app to make payment.
                   </p>
                 </div>
               )}

               {paymentMethod === "bank" && (
                 <div className="space-y-2 p-4 bg-green-50 rounded-lg border-l-4 border-green-400">
                   <p className="font-medium text-green-900">Bank Transfer Instructions:</p>
                   <p className="text-green-800 text-sm">
                     Bank: <span className="font-semibold">Stanbic Bank</span>
                   </p>
                   <p className="text-green-800 text-sm">
                     Account Number: <span className="font-mono bg-green-100 px-2 py-1 rounded">9030006384993</span>
                   </p>
                   <p className="text-green-700 text-xs">
                     Make the transfer and upload a screenshot of the transaction confirmation.
                   </p>
                 </div>
               )}

               {/* Mobile Money Payment Buttons */}
               {(paymentMethod === "mtn" || paymentMethod === "airtel") && (
                 <div className="space-y-4">
                   <Button 
                     onClick={handleMobilePayment}
                     className="w-full" 
                     size="lg"
                     variant="outline"
                   >
                     <ExternalLink className="h-4 w-4 mr-2" />
                     Dial {paymentMethod === "mtn" ? "*165*4*3*2*1*1010143633*60000#" : "*185*4*3*2*1*1010143633*60000#"}
                   </Button>
                   <p className="text-xs text-muted-foreground text-center">
                     This will open your phone's dialer with the payment code
                   </p>
                 </div>
               )}

               {/* Screenshot Upload Section */}
               {(hasInitiatedPayment || paymentMethod === "schoolpay" || paymentMethod === "bank") && (
                 <div className="space-y-4">
                   <div className="space-y-2">
                     <Label>Upload Payment Screenshot</Label>
                     <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                       {!paymentScreenshot ? (
                         <div>
                           <Upload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                           <p className="text-sm text-gray-600 mb-2">
                             Upload a screenshot of your payment confirmation
                           </p>
                           <Button 
                             type="button" 
                             variant="outline" 
                             onClick={() => fileInputRef.current?.click()}
                           >
                             Choose File
                           </Button>
                           <input
                             ref={fileInputRef}
                             type="file"
                             accept="image/*"
                             onChange={handleFileUpload}
                             className="hidden"
                           />
                         </div>
                       ) : (
                         <div className="space-y-2">
                           <div className="flex items-center justify-center space-x-2">
                             <CheckCircle className="h-5 w-5 text-green-500" />
                             <span className="text-sm font-medium">{paymentScreenshot.name}</span>
                             <Button
                               type="button"
                               variant="ghost"
                               size="sm"
                               onClick={removeScreenshot}
                             >
                               <X className="h-4 w-4" />
                             </Button>
                           </div>
                           <p className="text-xs text-green-600">Screenshot uploaded successfully</p>
                         </div>
                       )}
                     </div>
                   </div>
                 </div>
               )}

               {/* Complete Payment Button */}
               {((hasInitiatedPayment && (paymentMethod === "mtn" || paymentMethod === "airtel")) || 
                 paymentMethod === "schoolpay" || 
                 paymentMethod === "bank") && (
                 <Button 
                   onClick={handleCompletePayment}
                   className="w-full" 
                   size="lg"
                   disabled={
                     isProcessingPayment || 
                     ((paymentMethod === "mtn" || paymentMethod === "airtel" || paymentMethod === "schoolpay" || paymentMethod === "bank") && !paymentScreenshot)
                   }
                 >
                   {isProcessingPayment ? "Processing Payment..." : "Complete Payment"}
                 </Button>
               )}

               {!hasInitiatedPayment && (paymentMethod === "mtn" || paymentMethod === "airtel") && (
                 <p className="text-xs text-muted-foreground text-center">
                   Click the dial button above to initiate payment, then upload a screenshot
                 </p>
               )}
               
               {paymentMethod === "schoolpay" && (
                 <p className="text-xs text-muted-foreground text-center">
                   Complete your School Pay transaction and upload a screenshot to proceed
                 </p>
               )}
               
               {paymentMethod === "bank" && (
                 <p className="text-xs text-muted-foreground text-center">
                   Complete your bank transfer and upload a screenshot to proceed
                 </p>
               )}
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
              <p><strong>Phone:</strong> +256 0392 912059</p>
              <p><strong>Email:</strong> principalnmts@kiwokohospital.com</p>
              <p><strong>Office Hours:</strong> Mon-Fri, 8:00 AM - 5:00 PM</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PaymentStep;