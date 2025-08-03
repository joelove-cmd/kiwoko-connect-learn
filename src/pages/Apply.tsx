import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FileText, Upload, CheckCircle, AlertCircle, CreditCard, Smartphone } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Apply = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [paymentCompleted, setPaymentCompleted] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    gender: "",
    nationality: "",
    homeDistrict: "",
    telephone: "",
    emailAddress: "",
    postalAddress: "",
    religion: "",
    maritalStatus: "",
    numberOfChildren: "",
    sponsoringBody: "",
    sponsorContact: "",
    nextOfKinName: "",
    nextOfKinAddress: "",
    howDidYouKnow: "",
    recruitingAgentPhone: "",
    recruitingAgentName: "",
    hasPreExistingCondition: "",
    medicalCondition: "",
    uceYear: "",
    uceSubjects: [
      { subject: "", aggregate: "" },
      { subject: "", aggregate: "" },
      { subject: "", aggregate: "" },
      { subject: "", aggregate: "" },
      { subject: "", aggregate: "" },
      { subject: "", aggregate: "" },
      { subject: "", aggregate: "" },
      { subject: "", aggregate: "" }
    ],
    uceGradeAggregate: "",
    uceGradeResults: "",
    uaceYear: "",
    uaceSubjects: [
      { subject: "" },
      { subject: "" },
      { subject: "" },
      { subject: "" }
    ],
    uaceTotalPoints: "",
    program: "",
    applicantName: "",
    agreeToTerms: false
  });

  const programs = [
    "Certificate in Nursing (2.5 years)",
    "Certificate in Midwifery (2.5 years)",
    "Diploma in Nursing (1.5 years)",
    "Diploma in Midwifery (1.5 years)",
    "Certificate in Medical Laboratory Techniques (2 years)"
  ];

  const handlePayment = async () => {
    if (!paymentMethod) {
      toast({
        title: "Payment Method Required",
        description: "Please select a payment method to continue.",
        variant: "destructive",
      });
      return;
    }

    setIsProcessingPayment(true);
    
    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      setPaymentCompleted(true);
      toast({
        title: "Payment Successful!",
        description: "Your application fee has been processed. You can now submit your application.",
      });
    } catch (error) {
      toast({
        title: "Payment Failed",
        description: "There was an error processing your payment. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsProcessingPayment(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!paymentCompleted) {
      toast({
        title: "Payment Required",
        description: "Please complete the payment before submitting your application.",
        variant: "destructive",
      });
      return;
    }
    
    // Validate required fields
    const requiredFields = [
      'firstName', 'lastName', 'nationality', 'homeDistrict', 
      'telephone', 'emailAddress', 'nextOfKinName', 'nextOfKinAddress',
      'program', 'applicantName'
    ];
    
    const missingFields = requiredFields.filter(field => !formData[field as keyof typeof formData]);
    
    if (missingFields.length > 0) {
      toast({
        title: "Missing Required Fields",
        description: "Please fill in all required fields before submitting.",
        variant: "destructive",
      });
      return;
    }

    if (!formData.agreeToTerms) {
      toast({
        title: "Terms and Conditions",
        description: "Please agree to the terms and conditions to continue.",
        variant: "destructive",
      });
      return;
    }

    // Show success message
    toast({
      title: "Application Submitted Successfully!",
      description: "Your application has been received. You will receive a confirmation email shortly.",
    });

    // Navigate back to home or success page
    navigate("/", { replace: true });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FileText className="h-16 w-16 mx-auto mb-6 text-white/80" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Apply Now</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Take the first step towards your healthcare career. Complete your application to join Kiwoko Health Training Institute.
            </p>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Application Form</CardTitle>
                  <p className="text-muted-foreground">Please fill in all required fields to complete your application.</p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-8">
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

                    {/* C. ACADEMIC INFORMATION */}
                    <div>
                      <h3 className="text-lg font-semibold mb-6 text-primary">C. ACADEMIC INFORMATION</h3>
                      
                      {/* UCE/O-Level */}
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium mb-3">1. Uganda Certificate of Education (UCE) / "O" Level</h4>
                          <div className="mb-4">
                            <Label htmlFor="uceYear">Year of sitting</Label>
                            <Input
                              id="uceYear"
                              value={formData.uceYear}
                              onChange={(e) => handleInputChange("uceYear", e.target.value)}
                              placeholder="e.g., 2020"
                            />
                          </div>
                          
                          <div className="overflow-x-auto">
                            <table className="w-full border-collapse border border-border">
                              <thead>
                                <tr>
                                  <th className="border border-border p-2 bg-muted text-left">SUBJECT</th>
                                  <th className="border border-border p-2 bg-muted text-left">AGGREGATE</th>
                                </tr>
                              </thead>
                              <tbody>
                                {formData.uceSubjects.map((subject, index) => (
                                  <tr key={index}>
                                    <td className="border border-border p-2">
                                      <Input
                                        value={subject.subject}
                                        onChange={(e) => {
                                          const newSubjects = [...formData.uceSubjects];
                                          newSubjects[index].subject = e.target.value;
                                          setFormData(prev => ({ ...prev, uceSubjects: newSubjects }));
                                        }}
                                        placeholder="Subject name"
                                      />
                                    </td>
                                    <td className="border border-border p-2">
                                      <Input
                                        value={subject.aggregate}
                                        onChange={(e) => {
                                          const newSubjects = [...formData.uceSubjects];
                                          newSubjects[index].aggregate = e.target.value;
                                          setFormData(prev => ({ ...prev, uceSubjects: newSubjects }));
                                        }}
                                        placeholder="Grade"
                                      />
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            <div>
                              <Label htmlFor="uceGradeAggregate">Grade Aggregate</Label>
                              <Input
                                id="uceGradeAggregate"
                                value={formData.uceGradeAggregate}
                                onChange={(e) => handleInputChange("uceGradeAggregate", e.target.value)}
                              />
                            </div>
                            <div>
                              <Label htmlFor="uceGradeResults">Grade Results</Label>
                              <Input
                                id="uceGradeResults"
                                value={formData.uceGradeResults}
                                onChange={(e) => handleInputChange("uceGradeResults", e.target.value)}
                              />
                            </div>
                          </div>
                        </div>

                        {/* UACE/A-Level */}
                        <div>
                          <h4 className="font-medium mb-3">2. Uganda Advanced Certificate of Education (UACE) / 'A' Level [if applicable]</h4>
                          <div className="mb-4">
                            <Label htmlFor="uaceYear">Year of sitting</Label>
                            <Input
                              id="uaceYear"
                              value={formData.uaceYear}
                              onChange={(e) => handleInputChange("uaceYear", e.target.value)}
                              placeholder="e.g., 2022"
                            />
                          </div>
                          
                          <div className="overflow-x-auto">
                            <table className="w-full border-collapse border border-border">
                              <thead>
                                <tr>
                                  <th className="border border-border p-2 bg-muted text-left">SUBJECT</th>
                                </tr>
                              </thead>
                              <tbody>
                                {formData.uaceSubjects.map((subject, index) => (
                                  <tr key={index}>
                                    <td className="border border-border p-2">
                                      <Input
                                        value={subject.subject}
                                        onChange={(e) => {
                                          const newSubjects = [...formData.uaceSubjects];
                                          newSubjects[index].subject = e.target.value;
                                          setFormData(prev => ({ ...prev, uaceSubjects: newSubjects }));
                                        }}
                                        placeholder="Subject name"
                                      />
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>

                          <div className="mt-4">
                            <Label htmlFor="uaceTotalPoints">Total Points</Label>
                            <Input
                              id="uaceTotalPoints"
                              value={formData.uaceTotalPoints}
                              onChange={(e) => handleInputChange("uaceTotalPoints", e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Program Selection */}
                    <div>
                      <h3 className="text-lg font-semibold mb-6 text-primary">Program Selection</h3>
                      <div>
                        <Label htmlFor="program">Desired Program *</Label>
                        <Select onValueChange={(value) => handleInputChange("program", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a program" />
                          </SelectTrigger>
                          <SelectContent>
                            {programs.map((program) => (
                              <SelectItem key={program} value={program}>{program}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Declaration */}
                    <div className="border-t pt-6">
                      <h3 className="text-lg font-semibold mb-4 text-primary">Declaration</h3>
                      <div className="space-y-4">
                        <p className="text-sm text-muted-foreground">
                          I hereby certify to the best of my knowledge that the particulars given in this form are true and complete in all aspects.
                        </p>
                        
                        <div>
                          <Label htmlFor="applicantName">Name of the applicant *</Label>
                          <Input
                            id="applicantName"
                            value={formData.applicantName}
                            onChange={(e) => handleInputChange("applicantName", e.target.value)}
                            required
                          />
                        </div>

                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="terms"
                            checked={formData.agreeToTerms}
                            onCheckedChange={(checked) => setFormData(prev => ({ ...prev, agreeToTerms: !!checked }))}
                          />
                          <Label htmlFor="terms" className="text-sm">
                            I certify that the information provided is true and complete, and I agree to the terms and conditions. *
                          </Label>
                        </div>
                      </div>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full" 
                      size="lg" 
                      disabled={!formData.agreeToTerms || !paymentCompleted}
                    >
                      {paymentCompleted ? "Submit Application" : "Payment Required First"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Payment Section */}
              <Card className={paymentCompleted ? "border-green-500 bg-green-50" : ""}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CreditCard className="h-5 w-5 mr-2" />
                    Application Fee Payment
                    {paymentCompleted && <CheckCircle className="h-5 w-5 ml-2 text-green-500" />}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {!paymentCompleted ? (
                    <>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-primary">UGX 50,000</p>
                        <p className="text-sm text-muted-foreground">Application Fee</p>
                      </div>
                      
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
                        onClick={handlePayment}
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
                        You must complete payment before submitting your application
                      </p>
                    </>
                  ) : (
                    <div className="text-center space-y-2">
                      <CheckCircle className="h-12 w-12 text-green-500 mx-auto" />
                      <p className="font-semibold text-green-700">Payment Completed!</p>
                      <p className="text-sm text-muted-foreground">
                        You can now submit your application form
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Required Documents */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Upload className="h-5 w-5 mr-2" />
                    Required Documents
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Academic testimonials / pass slips / certificates
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Birth certificate
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Marriage certificate [if married]
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Recommendation letter from sponsoring body [if applicable]
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      LC letter (original)
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Recognized ID
                    </li>
                  </ul>
                  <p className="text-xs text-muted-foreground mt-4">
                    Documents can be submitted during the interview process or mailed to our admissions office.
                  </p>
                </CardContent>
              </Card>

              {/* Application Timeline */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <AlertCircle className="h-5 w-5 mr-2" />
                    Application Timeline
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-semibold">Application Deadline</p>
                      <p className="text-muted-foreground">March 31, 2024</p>
                    </div>
                    <div>
                      <p className="font-semibold">Interview Period</p>
                      <p className="text-muted-foreground">April 1-30, 2024</p>
                    </div>
                    <div>
                      <p className="font-semibold">Admission Results</p>
                      <p className="text-muted-foreground">May 15, 2024</p>
                    </div>
                    <div>
                      <p className="font-semibold">Academic Year Begins</p>
                      <p className="text-muted-foreground">June 2024</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card>
                <CardHeader>
                  <CardTitle>Need Help?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    If you have questions about the application process, contact our admissions office.
                  </p>
                  <div className="space-y-2 text-sm">
                    <p><strong>Phone:</strong> +256 123 456 789</p>
                    <p><strong>Email:</strong> admissions@kiwoko.ac.ug</p>
                    <p><strong>Office Hours:</strong> Mon-Fri, 8:00 AM - 5:00 PM</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Apply;