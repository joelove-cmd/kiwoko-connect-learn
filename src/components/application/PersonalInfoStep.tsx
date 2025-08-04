import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface PersonalInfoStepProps {
  formData: any;
  handleInputChange: (field: string, value: string) => void;
  onNext: () => void;
}

const PersonalInfoStep = ({ formData, handleInputChange, onNext }: PersonalInfoStepProps) => {
  const validateStep = () => {
    const requiredFields = [
      'firstName', 'lastName', 'nationality', 'homeDistrict', 
      'telephone', 'emailAddress', 'nextOfKinName', 'nextOfKinAddress'
    ];
    
    return requiredFields.every(field => formData[field as keyof typeof formData]);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Step 1: Personal & Medical Information</CardTitle>
        <p className="text-muted-foreground">Please provide your personal details and medical information.</p>
      </CardHeader>
      <CardContent className="space-y-8">
        {/* A. PERSONAL INFORMATION */}
        <div>
          <h3 className="text-lg font-semibold mb-6 text-primary">A. PERSONAL INFORMATION</h3>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange("firstName", e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name *</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange("lastName", e.target.value)}
                  required
                />
              </div>
            </div>

            <div>
              <Label htmlFor="nationality">Nationality *</Label>
              <Input
                id="nationality"
                value={formData.nationality}
                onChange={(e) => handleInputChange("nationality", e.target.value)}
                required
              />
            </div>

            <div>
              <h4 className="font-medium mb-3">Address</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="homeDistrict">Home District *</Label>
                  <Input
                    id="homeDistrict"
                    value={formData.homeDistrict}
                    onChange={(e) => handleInputChange("homeDistrict", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="telephone">Telephone *</Label>
                  <Input
                    id="telephone"
                    value={formData.telephone}
                    onChange={(e) => handleInputChange("telephone", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="emailAddress">Email Address *</Label>
                  <Input
                    id="emailAddress"
                    type="email"
                    value={formData.emailAddress}
                    onChange={(e) => handleInputChange("emailAddress", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="postalAddress">Postal Address</Label>
                  <Input
                    id="postalAddress"
                    value={formData.postalAddress}
                    onChange={(e) => handleInputChange("postalAddress", e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="religion">Religion</Label>
                <Input
                  id="religion"
                  value={formData.religion}
                  onChange={(e) => handleInputChange("religion", e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="maritalStatus">Marital Status</Label>
                <Select onValueChange={(value) => handleInputChange("maritalStatus", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select marital status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="single">Single</SelectItem>
                    <SelectItem value="married">Married</SelectItem>
                    <SelectItem value="divorced">Divorced</SelectItem>
                    <SelectItem value="widowed">Widowed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label htmlFor="numberOfChildren">Number of Children (if any)</Label>
              <Input
                id="numberOfChildren"
                type="number"
                value={formData.numberOfChildren}
                onChange={(e) => handleInputChange("numberOfChildren", e.target.value)}
                min="0"
              />
            </div>

            <div>
              <h4 className="font-medium mb-3">Sponsoring Body / Person</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-6">
                  <Label className="flex items-center space-x-2">
                    <Checkbox />
                    <span>Private (Self / Parent / Guardian)</span>
                  </Label>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="sponsoringBody">Sponsoring Body/Person</Label>
                    <Input
                      id="sponsoringBody"
                      value={formData.sponsoringBody}
                      onChange={(e) => handleInputChange("sponsoringBody", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="sponsorContact">Contact</Label>
                    <Input
                      id="sponsorContact"
                      value={formData.sponsorContact}
                      onChange={(e) => handleInputChange("sponsorContact", e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Label htmlFor="nextOfKinName">Next of Kin (Name) *</Label>
              <Input
                id="nextOfKinName"
                value={formData.nextOfKinName}
                onChange={(e) => handleInputChange("nextOfKinName", e.target.value)}
                required
              />
            </div>

            <div>
              <Label htmlFor="nextOfKinAddress">Address of Next of Kin (include Tel no.) *</Label>
              <Textarea
                id="nextOfKinAddress"
                value={formData.nextOfKinAddress}
                onChange={(e) => handleInputChange("nextOfKinAddress", e.target.value)}
                placeholder="Include telephone number"
                required
              />
            </div>

            <div>
              <Label htmlFor="howDidYouKnow">How did you get to know about this school?</Label>
              <Input
                id="howDidYouKnow"
                value={formData.howDidYouKnow}
                onChange={(e) => handleInputChange("howDidYouKnow", e.target.value)}
              />
            </div>

            <div>
              <h4 className="font-medium mb-3">Recruiting Agent Information</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="recruitingAgentPhone">Recruiting Agent Phone Number</Label>
                  <Input
                    id="recruitingAgentPhone"
                    value={formData.recruitingAgentPhone}
                    onChange={(e) => handleInputChange("recruitingAgentPhone", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="recruitingAgentName">Name</Label>
                  <Input
                    id="recruitingAgentName"
                    value={formData.recruitingAgentName}
                    onChange={(e) => handleInputChange("recruitingAgentName", e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* B. MEDICAL INFORMATION */}
        <div>
          <h3 className="text-lg font-semibold mb-6 text-primary">B. MEDICAL INFORMATION</h3>
          <div className="space-y-4">
            <div>
              <Label className="text-base font-medium">1. Do you have any pre-existing medical condition(s)?</Label>
              <RadioGroup 
                value={formData.hasPreExistingCondition} 
                onValueChange={(value) => handleInputChange("hasPreExistingCondition", value)}
                className="flex space-x-6 mt-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="yes" />
                  <Label htmlFor="yes">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="no" />
                  <Label htmlFor="no">No</Label>
                </div>
              </RadioGroup>
            </div>

            {formData.hasPreExistingCondition === "yes" && (
              <div>
                <Label htmlFor="medicalCondition">2. If yes above, State the condition</Label>
                <Textarea
                  id="medicalCondition"
                  value={formData.medicalCondition}
                  onChange={(e) => handleInputChange("medicalCondition", e.target.value)}
                  placeholder="Please describe your medical condition(s)"
                />
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-end">
          <Button 
            onClick={onNext}
            disabled={!validateStep()}
            size="lg"
          >
            Next: Academic Information
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PersonalInfoStep;