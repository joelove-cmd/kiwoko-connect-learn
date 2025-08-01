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
      title: "Certificate in Nursing",
      duration: "2.5 Years",
      level: "Certificate",
      icon: <Heart className="h-8 w-8 text-secondary" />,
      description: "Comprehensive nursing education preparing compassionate and skilled nurses for various healthcare settings.",
      requirements: ["UACE with at least 2 principal passes", "UCE with at least 5 passes including English, Mathematics, and Sciences", "Must be at least 18 years old"],
      career: ["Staff Nurse", "Community Health Nurse", "Hospital Nurse"],
      subjects: ["Anatomy & Physiology", "Nursing Fundamentals", "Medical-Surgical Nursing", "Pediatric Nursing", "Mental Health Nursing"]
    },
    {
      title: "Certificate in Midwifery",
      duration: "2.5 Years",
      level: "Certificate",
      icon: <Baby className="h-8 w-8 text-secondary" />,
      description: "Specialized training in maternal and newborn care, family planning, and reproductive health services.",
      requirements: ["UACE with at least 2 principal passes", "UCE with at least 5 passes including Biology and Chemistry", "Must be at least 18 years old"],
      career: ["Certified Midwife", "Maternal Health Assistant", "Family Planning Counselor"],
      subjects: ["Maternal Health", "Newborn Care", "Family Planning", "Reproductive Health", "Emergency Obstetrics"]
    },
    {
      title: "Diploma in Nursing",
      duration: "1.5 Years",
      level: "Diploma",
      icon: <Heart className="h-8 w-8 text-secondary" />,
      description: "Advanced nursing education for experienced healthcare workers seeking diploma qualifications.",
      requirements: ["Certificate in Nursing", "Valid nursing registration", "At least 2 years nursing experience"],
      career: ["Senior Nurse", "Ward Supervisor", "Clinical Instructor"],
      subjects: ["Advanced Nursing Practice", "Leadership in Nursing", "Research Methods", "Quality Improvement", "Health Management"]
    },
    {
      title: "Diploma in Midwifery",
      duration: "1.5 Years",
      level: "Diploma",
      icon: <Baby className="h-8 w-8 text-secondary" />,
      description: "Advanced midwifery training for certified midwives seeking diploma qualification.",
      requirements: ["Certificate in Midwifery", "Valid midwifery registration", "At least 2 years midwifery experience"],
      career: ["Senior Midwife", "Midwifery Supervisor", "Maternal Health Specialist"],
      subjects: ["Advanced Midwifery Practice", "High-Risk Pregnancies", "Newborn Intensive Care", "Midwifery Leadership", "Research in Midwifery"]
    },
    {
      title: "Certificate in Medical Laboratory Techniques",
      duration: "2 Years",
      level: "Certificate",
      icon: <Microscope className="h-8 w-8 text-secondary" />,
      description: "Training in basic laboratory techniques and diagnostic testing procedures.",
      requirements: ["UACE with passes in Chemistry and Biology", "UCE with Mathematics and Sciences", "Good analytical skills"],
      career: ["Laboratory Technician", "Medical Laboratory Assistant", "Research Assistant"],
      subjects: ["Clinical Chemistry", "Hematology", "Microbiology", "Parasitology", "Laboratory Safety"]
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

      {/* Program Highlights */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Meet Our Students</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our students represent the future of healthcare in Uganda. See them in action across our various programs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/lovable-uploads/cecbbf59-eef7-404e-a411-5e9312d678e0.png" 
                alt="Mixed group of students with faculty"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-2">Faculty & Student Mentorship</h3>
                <p className="text-muted-foreground">Our experienced faculty work closely with students, providing guidance and support throughout their academic journey.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/lovable-uploads/65925656-1a63-4407-905f-36804319c837.png" 
                alt="Diverse group of female and male students"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-2">Diverse Learning Community</h3>
                <p className="text-muted-foreground">Students from different backgrounds come together to learn and grow in our inclusive educational environment.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/lovable-uploads/524f7fa6-8262-4d4e-b8bb-988af483e04f.png" 
                alt="Male students in healthcare uniforms"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-2">Breaking Gender Barriers</h3>
                <p className="text-muted-foreground">We encourage and support male students to pursue careers in nursing and healthcare, breaking traditional stereotypes.</p>
              </div>
            </div>
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