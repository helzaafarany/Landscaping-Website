import { Button } from "@/components/ui/button";
import { Calculator, Images, Star, Award, Users, ChevronDown } from "lucide-react";
import { siteConfig } from "@/config/site";

interface HeroProps {
  onQuoteClick?: () => void;
  onGalleryClick?: () => void;
}

export default function Hero({ onQuoteClick, onGalleryClick }: HeroProps) {
  const scrollToNext = () => {
    const nextSection = document.querySelector("#services");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
        }}
      />
      <div className="absolute inset-0 hero-overlay" />
      
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="font-bold text-5xl md:text-7xl mb-6 leading-tight">
          Transform Your{" "}
          <span className="text-fresh-green">Outdoor Space</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-100 font-light leading-relaxed">
          {siteConfig.heroSubtext}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            className="cta-button text-white px-8 py-4 text-lg shadow-xl"
            onClick={onQuoteClick}
          >
            <Calculator className="w-5 h-5 mr-3" />
            Get Free Quote
          </Button>
          <Button 
            variant="outline"
            className="bg-white/20 backdrop-blur-sm border-2 border-white text-white px-8 py-4 text-lg hover:bg-white hover:text-forest-green"
            onClick={onGalleryClick}
          >
            <Images className="w-5 h-5 mr-3" />
            View Our Work
          </Button>
        </div>
        
        {/* Trust Indicators */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm text-gray-200">
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 mr-2" />
            <span>4.9/5 Rating</span>
          </div>
          <div className="flex items-center">
            <Award className="w-4 h-4 text-yellow-400 mr-2" />
            <span>Licensed & Insured</span>
          </div>
          <div className="flex items-center">
            <Users className="w-4 h-4 text-yellow-400 mr-2" />
            <span>500+ Happy Clients</span>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce cursor-pointer"
        onClick={scrollToNext}
      >
        <ChevronDown className="w-8 h-8" />
      </div>
    </section>
  );
}
