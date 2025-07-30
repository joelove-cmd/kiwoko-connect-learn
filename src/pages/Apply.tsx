import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { FileText, Upload, CheckCircle, AlertCircle } from "lucide-react";
import { useState } from "react";

const Apply = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    gender: "",
    address: "",
    program: "",
    previousEducation: "",
    workExperience: "",
    motivation: "",
    agreeToTerms: false
  });

  const programs = [
    "Certificate in Nursing (2.5 years)",
    "Certificate in Midwifery (2.5 years)",
    "Diploma in Nursing (1.5 years)",
    "Diploma in Midwifery (1.5 years)",
    "Certificate in Medical Laboratory Techniques (2 years)"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Application submitted:", formData);
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
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4 text-primary">Personal Information</h3>
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
                        <div>
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input
                            id="phone"
                            value={formData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                          <Input
                            id="dateOfBirth"
                            type="date"
                            value={formData.dateOfBirth}
                            onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="gender">Gender *</Label>
                          <Select onValueChange={(value) => handleInputChange("gender", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select gender" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="male">Male</SelectItem>
                              <SelectItem value="female">Female</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="mt-4">
                        <Label htmlFor="address">Address *</Label>
                        <Textarea
                          id="address"
                          value={formData.address}
                          onChange={(e) => handleInputChange("address", e.target.value)}
                          placeholder="Enter your full address"
                          required
                        />
                      </div>
                    </div>

                    {/* Program Selection */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4 text-primary">Program Selection</h3>
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

                    {/* Education Background */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4 text-primary">Education & Experience</h3>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="previousEducation">Previous Education *</Label>
                          <Textarea
                            id="previousEducation"
                            value={formData.previousEducation}
                            onChange={(e) => handleInputChange("previousEducation", e.target.value)}
                            placeholder="List your educational qualifications (O-Level, A-Level, certificates, etc.)"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="workExperience">Work Experience (if any)</Label>
                          <Textarea
                            id="workExperience"
                            value={formData.workExperience}
                            onChange={(e) => handleInputChange("workExperience", e.target.value)}
                            placeholder="Describe any relevant work experience"
                          />
                        </div>
                        <div>
                          <Label htmlFor="motivation">Why do you want to pursue this program? *</Label>
                          <Textarea
                            id="motivation"
                            value={formData.motivation}
                            onChange={(e) => handleInputChange("motivation", e.target.value)}
                            placeholder="Tell us about your motivation and career goals"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* Terms and Conditions */}
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="terms"
                        checked={formData.agreeToTerms}
                        onCheckedChange={(checked) => setFormData(prev => ({ ...prev, agreeToTerms: !!checked }))}
                      />
                      <Label htmlFor="terms" className="text-sm">
                        I agree to the terms and conditions and consent to the processing of my personal data for admission purposes. *
                      </Label>
                    </div>

                    <Button type="submit" className="w-full" size="lg" disabled={!formData.agreeToTerms}>
                      Submit Application
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
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
                      Copy of National ID or Passport
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Academic transcripts (O-Level, A-Level)
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Birth certificate
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Passport-size photographs (2)
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Medical certificate
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Character reference letter
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