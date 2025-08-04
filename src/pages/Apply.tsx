import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FileText } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import StepIndicator from "@/components/application/StepIndicator";
import PersonalInfoStep from "@/components/application/PersonalInfoStep";
import AcademicInfoStep from "@/components/application/AcademicInfoStep";
import PaymentStep from "@/components/application/PaymentStep";
import DeclarationStep from "@/components/application/DeclarationStep";

const Apply = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
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

  const [uploadedDocuments, setUploadedDocuments] = useState<{[key: string]: File | null}>({
    academicDocuments: null,
    birthCertificate: null,
    marriageCertificate: null,
    recommendationLetter: null,
    lcLetter: null,
    nationalId: null,
  });

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
        description: "Your application fee has been processed. You can now proceed to the next step.",
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

  const handleSubmit = () => {
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

    if (!paymentCompleted) {
      toast({
        title: "Payment Required",
        description: "Please complete the payment before submitting your application.",
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

  const handleFileUpload = (documentType: string, file: File) => {
    setUploadedDocuments(prev => ({ ...prev, [documentType]: file }));
    toast({
      title: "Document Uploaded",
      description: `${file.name} has been uploaded successfully.`,
    });
  };

  const removeDocument = (documentType: string) => {
    setUploadedDocuments(prev => ({ ...prev, [documentType]: null }));
    toast({
      title: "Document Removed",
      description: "Document has been removed successfully.",
    });
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <PersonalInfoStep
            formData={formData}
            handleInputChange={handleInputChange}
            onNext={nextStep}
          />
        );
      case 2:
        return (
          <AcademicInfoStep
            formData={formData}
            handleInputChange={handleInputChange}
            uploadedDocuments={uploadedDocuments}
            handleFileUpload={handleFileUpload}
            removeDocument={removeDocument}
            onNext={nextStep}
            onPrevious={prevStep}
            setFormData={setFormData}
          />
        );
      case 3:
        return (
          <PaymentStep
            paymentCompleted={paymentCompleted}
            paymentMethod={paymentMethod}
            phoneNumber={phoneNumber}
            isProcessingPayment={isProcessingPayment}
            setPaymentMethod={setPaymentMethod}
            setPhoneNumber={setPhoneNumber}
            handlePayment={handlePayment}
            onNext={nextStep}
            onPrevious={prevStep}
          />
        );
      case 4:
        return (
          <DeclarationStep
            formData={formData}
            handleInputChange={handleInputChange}
            setFormData={setFormData}
            onSubmit={handleSubmit}
            onPrevious={prevStep}
          />
        );
      default:
        return null;
    }
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

      {/* Step Indicator */}
      <StepIndicator currentStep={currentStep} paymentCompleted={paymentCompleted} />

      {/* Application Form */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {renderCurrentStep()}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Apply;