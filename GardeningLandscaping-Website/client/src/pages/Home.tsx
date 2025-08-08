import { useLocation } from "wouter";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Contact from "@/components/Contact";

interface HomeProps {
  onImageClick?: (src: string, alt: string, title: string) => void;
}

export default function Home({ onImageClick }: HomeProps) {
  const [, setLocation] = useLocation();

  const scrollToContact = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToGallery = () => {
    const gallerySection = document.querySelector("#gallery");
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleServiceClick = (serviceId: string) => {
    setLocation("/services");
  };

  return (
    <>
      <Hero 
        onQuoteClick={scrollToContact}
        onGalleryClick={scrollToGallery}
      />
      <Services onServiceClick={handleServiceClick} />
      <Gallery onImageClick={onImageClick} />
      <Testimonials />
      <About onContactClick={scrollToContact} />
      <Contact />
    </>
  );
}
