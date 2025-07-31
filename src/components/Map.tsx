import React from 'react';
import { MapPin } from 'lucide-react';

const Map = () => {
  // Updated Google Maps link for Kiwoko Hospital
  const embedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15957.076896264998!2d32.544815!3d0.7751245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177d6b3859c2b7c5%3A0x4e35b1b9e8b7c1c5!2sKiwoko%20Hospital!5e0!3m2!1sen!2sug!4v1693910000000!5m2!1sen!2sug";

  return (
    <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg">
      <iframe
        src={embedUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Kiwoko Hospital Location"
        className="rounded-lg"
      />
      <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm rounded-lg p-3 shadow-md">
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium">Kiwoko Hospital</span>
        </div>
        <p className="text-xs text-muted-foreground mt-1">
          P.O. Box 149, Luweero, Uganda
        </p>
      </div>
    </div>
  );
};

export default Map;