import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { CheckCircle } from "lucide-react";

interface DeclarationStepProps {
  formData: any;
  handleInputChange: (field: string, value: string) => void;
  setFormData: (updater: (prev: any) => any) => void;
  onSubmit: () => void;
  onPrevious: () => void;
}

const DeclarationStep = ({ 
  formData, 
  handleInputChange, 
  setFormData, 
  onSubmit, 
  onPrevious 
}: DeclarationStepProps) => {
  const validateStep = () => {
    return formData.applicantName && formData.agreeToTerms;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Step 4: Declaration & Submission</CardTitle>
        <p className="text-muted-foreground">Please review your application and provide your declaration.</p>
      </CardHeader>
      <CardContent className="space-y-8">
        {/* Application Summary */}
        <div>
          <h3 className="text-lg font-semibold mb-6 text-primary">Application Summary</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                <span className="text-sm">Personal Information Completed</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                <span className="text-sm">Medical Information Completed</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                <span className="text-sm">Academic Information Completed</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                <span className="text-sm">Documents Uploaded</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                <span className="text-sm">Program Selected: {formData.program}</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                <span className="text-sm">Application Fee Paid</span>
              </div>
            </div>
          </div>
        </div>

        {/* Key Application Details */}
        <div>
          <h4 className="font-semibold mb-4">Key Application Details</h4>
          <div className="bg-muted/50 p-4 rounded-lg space-y-2 text-sm">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="font-medium">Name:</span> {formData.firstName} {formData.lastName}
              </div>
              <div>
                <span className="font-medium">Email:</span> {formData.emailAddress}
              </div>
              <div>
                <span className="font-medium">Phone:</span> {formData.telephone}
              </div>
              <div>
                <span className="font-medium">District:</span> {formData.homeDistrict}
              </div>
              <div className="col-span-2">
                <span className="font-medium">Selected Program:</span> {formData.program}
              </div>
            </div>
          </div>
        </div>

        {/* Declaration */}
        <div>
          <h3 className="text-lg font-semibold mb-6 text-primary">Declaration</h3>
          <div className="space-y-6">
            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
              <h4 className="font-semibold mb-3">Applicant's Declaration</h4>
              <p className="text-sm text-muted-foreground mb-4">
                I hereby certify to the best of my knowledge that the particulars given in this application form are true and complete in all aspects. I understand that:
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 mb-4 list-disc list-inside">
                <li>Any false information provided may result in the rejection of my application</li>
                <li>The institution reserves the right to verify all information provided</li>
                <li>Application fees are non-refundable</li>
                <li>I will be notified of the admission decision via the contact information provided</li>
                <li>I agree to abide by the institution's policies and regulations if admitted</li>
              </ul>
            </div>
            
            <div>
              <Label htmlFor="applicantName">Full Name of Applicant (as Declaration Signature) *</Label>
              <Input
                id="applicantName"
                value={formData.applicantName}
                onChange={(e) => handleInputChange("applicantName", e.target.value)}
                placeholder="Enter your full name as your digital signature"
                required
              />
              <p className="text-xs text-muted-foreground mt-1">
                By entering your name, you are providing your digital signature for this declaration
              </p>
            </div>

            <div className="flex items-start space-x-3">
              <Checkbox
                id="terms"
                checked={formData.agreeToTerms}
                onCheckedChange={(checked) => setFormData(prev => ({ ...prev, agreeToTerms: !!checked }))}
              />
              <div>
                <Label htmlFor="terms" className="text-sm leading-relaxed">
                  I certify that all information provided in this application is true and complete to the best of my knowledge. I agree to the terms and conditions of Kiwoko Health Training Institute and understand that any false information may result in rejection of my application or termination of my enrollment. *
                </Label>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
              <p className="text-sm text-green-700">
                <strong>Next Steps:</strong> After submitting your application, you will receive a confirmation email with your application number. You will be contacted within 2-3 weeks regarding your application status and interview schedule.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-between pt-6">
          <Button 
            variant="outline"
            onClick={onPrevious}
            size="lg"
          >
            Previous
          </Button>
          <Button 
            onClick={onSubmit}
            disabled={!validateStep()}
            size="lg"
            className="bg-green-600 hover:bg-green-700"
          >
            Submit Application
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default DeclarationStep;