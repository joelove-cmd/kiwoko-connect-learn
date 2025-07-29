import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, GraduationCap, Heart, Users, Stethoscope, BookOpen, Microscope, Baby } from "lucide-react";
import { Link } from "react-router-dom";

const Courses = () => {
  const programs = [
    {
      title: "Diploma in Nursing",
      duration: "3 Years",
      level: "Diploma",
      icon: <Heart className="h-8 w-8 text-secondary" />,
      description: "Comprehensive nursing education preparing compassionate and skilled nurses for various healthcare settings.",
      requirements: ["UACE with at least 2 principal passes", "UCE with at least 5 passes including English, Mathematics, and Sciences", "Must be at least 18 years old"],
      career: ["Staff Nurse", "Community Health Nurse", "Specialized Nursing Units"],
      subjects: ["Anatomy & Physiology", "Nursing Fundamentals", "Medical-Surgical Nursing", "Pediatric Nursing", "Mental Health Nursing"]
    },
    {
      title: "Diploma in Midwifery",
      duration: "2 Years",
      level: "Diploma",
      icon: <Baby className="h-8 w-8 text-secondary" />,
      description: "Specialized training in maternal and newborn care, family planning, and reproductive health services.",
      requirements: ["Certificate in Nursing or equivalent", "Valid nursing license", "At least 2 years nursing experience"],
      career: ["Midwife", "Maternal Health Specialist", "Family Planning Counselor"],
      subjects: ["Maternal Health", "Newborn Care", "Family Planning", "Reproductive Health", "Emergency Obstetrics"]
    },
    {
      title: "Diploma in Clinical Medicine",
      duration: "3 Years",
      level: "Diploma",
      icon: <Stethoscope className="h-8 w-8 text-secondary" />,
      description: "Training clinical officers to provide primary healthcare services in hospitals and health centers.",
      requirements: ["UACE with at least 2 principal passes in Sciences", "UCE with at least 5 passes", "Strong background in Biology and Chemistry"],
      career: ["Clinical Officer", "Health Center In-Charge", "Primary Care Provider"],
      subjects: ["Clinical Medicine", "Surgery", "Pediatrics", "Obstetrics & Gynecology", "Public Health"]
    },
    {
      title: "Diploma in Medical Laboratory Technology",
      duration: "3 Years",
      level: "Diploma",
      icon: <Microscope className="h-8 w-8 text-secondary" />,
      description: "Training medical laboratory technologists in diagnostic testing and laboratory management.",
      requirements: ["UACE with passes in Chemistry and Biology", "UCE with Mathematics and Sciences", "Good analytical skills"],
      career: ["Medical Laboratory Technologist", "Laboratory Supervisor", "Research Assistant"],
      subjects: ["Clinical Chemistry", "Hematology", "Microbiology", "Parasitology", "Laboratory Management"]
    },
    {
      title: "Certificate in Community Health",
      duration: "1 Year",
      level: "Certificate",
      icon: <Users className="h-8 w-8 text-secondary" />,
      description: "Training community health workers to provide basic healthcare services at the community level.",
      requirements: ["UCE with at least 5 passes", "Community leadership experience preferred", "Passion for community service"],
      career: ["Community Health Worker", "Health Educator", "Village Health Team Leader"],
      subjects: ["Community Health", "Health Education", "Basic First Aid", "Disease Prevention", "Health Promotion"]
    },
    {
      title: "Certificate in Health Records Management",
      duration: "1 Year",
      level: "Certificate",
      icon: <BookOpen className="h-8 w-8 text-secondary" />,
      description: "Training in health information management, medical records, and health data systems.",
      requirements: ["UCE with passes in English and Mathematics", "Computer literacy", "Attention to detail"],
      career: ["Health Records Officer", "Medical Secretary", "Health Information Assistant"],
      subjects: ["Health Information Systems", "Medical Terminology", "Records Management", "Data Analysis", "Computer Applications"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <GraduationCap className="h-16 w-16 mx-auto mb-6 text-white/80" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Programs</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Choose from our comprehensive range of healthcare education programs designed to prepare you for a rewarding career in healthcare.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      {program.icon}
                      <div>
                        <CardTitle className="text-xl">{program.title}</CardTitle>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge variant="secondary">{program.level}</Badge>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Clock className="h-4 w-4 mr-1" />
                            {program.duration}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{program.description}</p>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Entry Requirements */}
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">Entry Requirements</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {program.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-secondary mr-2">•</span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Career Opportunities */}
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">Career Opportunities</h4>
                    <div className="flex flex-wrap gap-2">
                      {program.career.map((career, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {career}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Key Subjects */}
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">Key Subjects</h4>
                    <div className="flex flex-wrap gap-2">
                      {program.subjects.map((subject, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {subject}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2 pt-4">
                    <Button asChild className="flex-1">
                      <Link to="/apply">Apply Now</Link>
                    </Button>
                    <Button variant="outline" className="flex-1">
                      Download Brochure
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Application Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Follow these simple steps to begin your journey with Kiwoko Health Training Institute.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Choose Program", description: "Select your desired healthcare program" },
              { step: "2", title: "Submit Application", description: "Complete and submit your application online" },
              { step: "3", title: "Document Review", description: "We review your academic documents" },
              { step: "4", title: "Start Learning", description: "Begin your healthcare education journey" }
            ].map((step, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button asChild size="lg">
              <Link to="/apply">Start Your Application</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Courses;