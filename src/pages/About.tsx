import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Award, Target, Eye, Building } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Heart className="h-8 w-8 text-secondary" />,
      title: "Compassion",
      description: "We believe in providing healthcare education with empathy and care for all."
    },
    {
      icon: <Award className="h-8 w-8 text-secondary" />,
      title: "Excellence",
      description: "We strive for the highest standards in medical education and training."
    },
    {
      icon: <Users className="h-8 w-8 text-secondary" />,
      title: "Community",
      description: "We serve our community by training healthcare professionals who make a difference."
    },
    {
      icon: <Building className="h-8 w-8 text-secondary" />,
      title: "Innovation",
      description: "We embrace modern teaching methods and technology in healthcare education."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Kiwoko Health</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Building Uganda's healthcare future through quality education and dedicated service since our establishment.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Target className="h-8 w-8 text-primary mr-3" />
                  <h2 className="text-2xl font-bold text-primary">Our Mission</h2>
                </div>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  To provide quality, accessible, and affordable healthcare education that produces competent, 
                  compassionate, and ethical healthcare professionals who contribute to the improvement of 
                  health outcomes in Uganda and the East African region.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-secondary/5 to-primary/5">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Eye className="h-8 w-8 text-secondary mr-3" />
                  <h2 className="text-2xl font-bold text-secondary">Our Vision</h2>
                </div>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  To be the leading healthcare training institution in East Africa, recognized for excellence 
                  in healthcare education, innovation in teaching methodologies, and producing graduates who 
                  are leaders in their respective fields.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Story</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Founded with a vision to address the healthcare workforce shortage in Uganda, 
              Kiwoko Health Training Institute has grown to become a leading institution in medical education.
            </p>
          </div>
          
          <div className="prose prose-lg max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <p className="text-gray-700 leading-relaxed mb-6">
                Kiwoko Health Training Institute was established in response to the growing need for 
                qualified healthcare professionals in Uganda. Located in the heart of Kiwoko, 
                Nakaseke District, our institute has been at the forefront of healthcare education, 
                training thousands of nurses, midwives, clinical officers, and other healthcare professionals.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Our commitment to excellence in education is reflected in our modern facilities, 
                experienced faculty, and comprehensive curriculum that combines theoretical knowledge 
                with practical hands-on training. We partner with leading hospitals and healthcare 
                facilities to ensure our students receive the best possible clinical experience.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                Today, our graduates serve in hospitals, clinics, and healthcare facilities across 
                Uganda and the broader East African region, making significant contributions to 
                improving health outcomes and saving lives in their communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These values guide everything we do and shape the character of our graduates.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Student Life Gallery */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Student Community</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Meet our dedicated students from our Nursing, Midwifery, and Laboratory Technician programs. 
              Together, they form a vibrant learning community committed to excellence in healthcare.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-6">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/lovable-uploads/ad9a238f-3b03-4dbe-965f-1c19635de530.png" 
                  alt="Nursing and Midwifery students in blue uniforms with white aprons"
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-primary mb-2">Nursing and Midwifery Program</h3>
                  <p className="text-sm text-muted-foreground">Students in blue and white uniforms ready to provide compassionate care</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/lovable-uploads/126dbbf1-8682-4ee1-83b4-d5557dc7cfc0.png" 
                  alt="Laboratory Techniques students in white shirts and blue skirts"
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-primary mb-2">Laboratory Techniques Program</h3>
                  <p className="text-sm text-muted-foreground">Students in gray skirts and different colored shirts training in medical laboratory</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/lovable-uploads/51848f0e-d38c-41b5-be5b-c340c55c9e0d.png" 
                  alt="Mixed group of students in front of the Resource Centre"
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-primary mb-2">Academic Excellence</h3>
                  <p className="text-sm text-muted-foreground">Students at our well-equipped Resource Centre</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/lovable-uploads/65925656-1a63-4407-905f-36804319c837.png" 
                  alt="Diverse group of students in different colored uniforms"
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-primary mb-2">Diverse Programs</h3>
                  <p className="text-sm text-muted-foreground">Students from various healthcare programs</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/lovable-uploads/cecbbf59-eef7-404e-a411-5e9312d678e0.png" 
                  alt="Mixed group with instructors in blue and yellow uniforms"
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-primary mb-2">Lab Seniors</h3>
                  <p className="text-sm text-muted-foreground">Senior students from our Laboratory Techniques program mentoring junior colleagues</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/lovable-uploads/524f7fa6-8262-4d4e-b8bb-988af483e04f.png" 
                  alt="Laboratory Techniques students in white polo shirts with green trim"
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-primary mb-2">Nursing & Midwifery Seniors</h3>
                  <p className="text-sm text-muted-foreground">Advanced students preparing for their final clinical rotations in maternal and general healthcare</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accreditation */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Award className="h-16 w-16 mx-auto mb-6 text-primary" />
          <h2 className="text-3xl font-bold text-primary mb-4">Accreditation & Recognition</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Kiwoko Health Training Institute is fully accredited by the Ministry of Education and Sports 
            and the Ministry of Health, Republic of Uganda. Our programs meet international standards 
            and are recognized throughout the East African region.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-primary mb-2">Ministry of Education</h3>
              <p className="text-sm text-muted-foreground">Accredited Programs</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-primary mb-2">Ministry of Health</h3>
              <p className="text-sm text-muted-foreground">Licensed Institution</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-primary mb-2">EAC Recognition</h3>
              <p className="text-sm text-muted-foreground">Regional Standards</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;