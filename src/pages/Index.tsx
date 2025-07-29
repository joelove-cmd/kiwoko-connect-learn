import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GraduationCap, Heart, Users, Award, ArrowRight, BookOpen, Stethoscope, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const features = [
    {
      icon: <Heart className="h-8 w-8 text-secondary" />,
      title: "Healthcare Excellence",
      description: "Leading healthcare education with modern facilities and experienced faculty."
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-secondary" />,
      title: "Quality Education",
      description: "Comprehensive programs designed to produce skilled healthcare professionals."
    },
    {
      icon: <Users className="h-8 w-8 text-secondary" />,
      title: "Community Impact",
      description: "Training healthcare workers who serve communities across Uganda and beyond."
    },
    {
      icon: <Award className="h-8 w-8 text-secondary" />,
      title: "Accredited Programs",
      description: "All our programs are accredited by the Ministry of Education and Health."
    }
  ];

  const programs = [
    {
      title: "Nursing",
      duration: "3 Years",
      description: "Comprehensive nursing education preparing compassionate caregivers.",
      icon: <Heart className="h-6 w-6" />
    },
    {
      title: "Midwifery",
      duration: "2 Years",
      description: "Specialized training in maternal and newborn care.",
      icon: <Users className="h-6 w-6" />
    },
    {
      title: "Clinical Medicine",
      duration: "3 Years",
      description: "Training clinical officers for primary healthcare delivery.",
      icon: <Stethoscope className="h-6 w-6" />
    },
    {
      title: "Laboratory Technology",
      duration: "3 Years",
      description: "Medical laboratory science and diagnostic technology.",
      icon: <BookOpen className="h-6 w-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary via-primary to-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Kiwoko Health Training Institute
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
              Shaping the future of healthcare through excellence in medical education and training
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/apply">
                  Apply Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                <Link to="/courses">
                  Explore Programs
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Why Choose Kiwoko Health?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We are committed to providing world-class healthcare education that transforms lives and communities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Programs</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our comprehensive range of healthcare education programs designed to meet industry demands.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="p-2 bg-secondary/10 rounded-lg mr-3">
                      {program.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold">{program.title}</h3>
                      <p className="text-sm text-secondary">{program.duration}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">{program.description}</p>
                  <Button variant="outline" size="sm" className="w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button asChild>
              <Link to="/courses">
                View All Programs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-secondary to-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Globe className="h-16 w-16 mx-auto mb-6 text-white/80" />
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Healthcare Career?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join thousands of successful graduates who are making a difference in healthcare across Uganda and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/apply">
                Apply Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <Link to="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
