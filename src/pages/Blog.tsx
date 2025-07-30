import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const posts = [
    {
      title: "The Future of Healthcare Education in Uganda",
      excerpt: "Exploring how technology and innovation are shaping the next generation of healthcare professionals in Uganda.",
      author: "Dr. Sarah Nakamya",
      date: "January 15, 2024",
      category: "Education",
      readTime: "5 min read",
      featured: true
    },
    {
      title: "Career Opportunities for Certified Nurses",
      excerpt: "Discover the diverse career paths available for nursing graduates and how to advance your nursing career.",
      author: "Nurse Mary Amongi",
      date: "January 10, 2024",
      category: "Career",
      readTime: "4 min read",
      featured: false
    },
    {
      title: "Importance of Midwifery in Rural Healthcare",
      excerpt: "How trained midwives are making a difference in maternal and infant health outcomes in rural communities.",
      author: "Midwife Grace Atim",
      date: "January 5, 2024",
      category: "Healthcare",
      readTime: "6 min read",
      featured: false
    },
    {
      title: "Laboratory Technology: Advancing Medical Diagnosis",
      excerpt: "The crucial role of medical laboratory technicians in accurate diagnosis and patient care.",
      author: "Lab Tech John Okello",
      date: "December 28, 2023",
      category: "Technology",
      readTime: "4 min read",
      featured: false
    },
    {
      title: "Student Success Stories: From Classroom to Career",
      excerpt: "Inspiring stories of our graduates who are making significant contributions to healthcare in Uganda.",
      author: "Alumni Office",
      date: "December 20, 2023",
      category: "Success Stories",
      readTime: "7 min read",
      featured: false
    },
    {
      title: "Preparing for Your Healthcare Career",
      excerpt: "Essential tips and advice for students beginning their journey in healthcare education.",
      author: "Academic Office",
      date: "December 15, 2023",
      category: "Student Life",
      readTime: "5 min read",
      featured: false
    }
  ];

  const categories = ["All", "Education", "Career", "Healthcare", "Technology", "Success Stories", "Student Life"];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <BookOpen className="h-16 w-16 mx-auto mb-6 text-white/80" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Latest News & Insights</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Stay updated with the latest developments in healthcare education, career insights, and success stories from our community.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Categories Filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (
              <Badge key={category} variant="outline" className="cursor-pointer hover:bg-primary hover:text-white transition-colors">
                {category}
              </Badge>
            ))}
          </div>

          {/* Featured Post */}
          {posts.filter(post => post.featured).map((post, index) => (
            <Card key={index} className="mb-12 border-2 border-primary/20">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-primary text-white">Featured</Badge>
                  <Badge variant="outline">{post.category}</Badge>
                </div>
                <CardTitle className="text-2xl md:text-3xl mb-4">{post.title}</CardTitle>
                <p className="text-lg text-muted-foreground mb-4">{post.excerpt}</p>
                <div className="flex items-center text-sm text-muted-foreground space-x-4">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {post.date}
                  </div>
                  <span>{post.readTime}</span>
                </div>
              </CardHeader>
              <CardContent>
                <Button className="group">
                  Read More
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}

          {/* Regular Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.filter(post => !post.featured).map((post, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{post.category}</Badge>
                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                  </div>
                  <CardTitle className="text-lg mb-3">{post.title}</CardTitle>
                  <p className="text-sm text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex items-center text-xs text-muted-foreground space-x-3">
                    <div className="flex items-center">
                      <User className="h-3 w-3 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {post.date}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" className="w-full group">
                    Read More
                    <ArrowRight className="h-3 w-3 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;