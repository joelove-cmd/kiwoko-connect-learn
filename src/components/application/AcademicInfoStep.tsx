import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload, X, File } from "lucide-react";

interface AcademicInfoStepProps {
  formData: any;
  handleInputChange: (field: string, value: string) => void;
  uploadedDocuments: {[key: string]: File | null};
  handleFileUpload: (documentType: string, file: File) => void;
  removeDocument: (documentType: string) => void;
  onNext: () => void;
  onPrevious: () => void;
  setFormData: (updater: (prev: any) => any) => void;
}

const AcademicInfoStep = ({ 
  formData, 
  handleInputChange, 
  uploadedDocuments, 
  handleFileUpload, 
  removeDocument, 
  onNext, 
  onPrevious, 
  setFormData 
}: AcademicInfoStepProps) => {
  const programs = [
    "Certificate in Nursing (2.5 years)",
    "Certificate in Midwifery (2.5 years)",
    "Diploma in Nursing (1.5 years)",
    "Diploma in Midwifery (1.5 years)",
    "Certificate in Medical Laboratory Techniques (2 years)"
  ];

  const validateStep = () => {
    return formData.program;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Step 2: Academic Information</CardTitle>
        <p className="text-muted-foreground">Please provide your academic qualifications and upload required documents.</p>
      </CardHeader>
      <CardContent className="space-y-8">
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
                    {formData.uceSubjects.map((subject: any, index: number) => (
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
                    {formData.uaceSubjects.map((subject: any, index: number) => (
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
                ))
                }
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Document Uploads */}
        <div>
          <h3 className="text-lg font-semibold mb-6 text-primary">Document Uploads</h3>
          <p className="text-muted-foreground mb-6">
            Upload the required documents in PDF, JPG, or PNG format. Maximum file size: 5MB per document.
          </p>
          
          <div className="space-y-6">
            {/* Academic Documents */}
            <div>
              <Label className="text-base font-medium">Academic Documents (Certificates/Transcripts) *</Label>
              <div className="mt-2">
                {uploadedDocuments.academicDocuments ? (
                  <div className="flex items-center justify-between p-3 border border-green-200 bg-green-50 rounded-lg">
                    <div className="flex items-center">
                      <File className="h-5 w-5 text-green-600 mr-2" />
                      <span className="text-sm font-medium">{uploadedDocuments.academicDocuments.name}</span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeDocument('academicDocuments')}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ) : (
                  <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                    <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground mb-2">
                      Click to upload your academic documents
                    </p>
                    <input
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) handleFileUpload('academicDocuments', file);
                      }}
                      className="hidden"
                      id="academicDocuments"
                    />
                    <Label htmlFor="academicDocuments" className="cursor-pointer">
                      <Button variant="outline" size="sm" type="button">
                        Choose File
                      </Button>
                    </Label>
                  </div>
                )}
              </div>
            </div>

            {/* Birth Certificate */}
            <div>
              <Label className="text-base font-medium">Birth Certificate *</Label>
              <div className="mt-2">
                {uploadedDocuments.birthCertificate ? (
                  <div className="flex items-center justify-between p-3 border border-green-200 bg-green-50 rounded-lg">
                    <div className="flex items-center">
                      <File className="h-5 w-5 text-green-600 mr-2" />
                      <span className="text-sm font-medium">{uploadedDocuments.birthCertificate.name}</span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeDocument('birthCertificate')}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ) : (
                  <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                    <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground mb-2">
                      Click to upload your birth certificate
                    </p>
                    <input
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) handleFileUpload('birthCertificate', file);
                      }}
                      className="hidden"
                      id="birthCertificate"
                    />
                    <Label htmlFor="birthCertificate" className="cursor-pointer">
                      <Button variant="outline" size="sm" type="button">
                        Choose File
                      </Button>
                    </Label>
                  </div>
                )}
              </div>
            </div>

            {/* Other documents */}
            {['marriageCertificate', 'recommendationLetter', 'lcLetter', 'nationalId'].map((docType) => {
              const labels = {
                marriageCertificate: 'Marriage Certificate (if married)',
                recommendationLetter: 'Recommendation Letter (if applicable)',
                lcLetter: 'LC Letter (Original) *',
                nationalId: 'National ID/Passport *'
              };
              
              return (
                <div key={docType}>
                  <Label className="text-base font-medium">{labels[docType as keyof typeof labels]}</Label>
                  <div className="mt-2">
                    {uploadedDocuments[docType] ? (
                      <div className="flex items-center justify-between p-3 border border-green-200 bg-green-50 rounded-lg">
                        <div className="flex items-center">
                          <File className="h-5 w-5 text-green-600 mr-2" />
                          <span className="text-sm font-medium">{uploadedDocuments[docType]!.name}</span>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeDocument(docType)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ) : (
                      <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                        <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                        <p className="text-sm text-muted-foreground mb-2">
                          Click to upload your {labels[docType as keyof typeof labels].toLowerCase()}
                        </p>
                        <input
                          type="file"
                          accept=".pdf,.jpg,.jpeg,.png"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) handleFileUpload(docType, file);
                          }}
                          className="hidden"
                          id={docType}
                        />
                        <Label htmlFor={docType} className="cursor-pointer">
                          <Button variant="outline" size="sm" type="button">
                            Choose File
                          </Button>
                        </Label>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex justify-between">
          <Button 
            variant="outline"
            onClick={onPrevious}
            size="lg"
          >
            Previous
          </Button>
          <Button 
            onClick={onNext}
            disabled={!validateStep()}
            size="lg"
          >
            Next: Payment
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AcademicInfoStep;
