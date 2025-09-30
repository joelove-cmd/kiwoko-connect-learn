import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar } from "lucide-react";

const Events = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Upcoming Events
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
              Stay updated with our latest events and activities.
            </p>
          </div>
        </div>
      </section>

      {/* Events List Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Event Calendar</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join us for workshops, seminars, and community health drives.
            </p>
          </div>

          <div className="space-y-8">
            {/* Placeholder for events */}
            <div className="flex items-center p-6 bg-muted/50 rounded-lg">
              <Calendar className="h-8 w-8 text-secondary mr-6" />
              <div>
                <h3 className="text-xl font-semibold">Annual Health Conference</h3>
                <p className="text-muted-foreground">October 25, 2024</p>
              </div>
            </div>
            <div className="flex items-center p-6 bg-muted/50 rounded-lg">
              <Calendar className="h-8 w-8 text-secondary mr-6" />
              <div>
                <h3 className="text-xl font-semibold">Community Health Drive</h3>
                <p className="text-muted-foreground">November 12, 2024</p>
              </div>
            </div>
            <div className="flex items-center p-6 bg-muted/50 rounded-lg">
              <Calendar className="h-8 w-8 text-secondary mr-6" />
              <div>
                <h3 className="text-xl font-semibold">Graduation Ceremony</h3>
                <p className="text-muted-foreground">December 15, 2024</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;
