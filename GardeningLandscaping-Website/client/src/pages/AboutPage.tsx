import { useEffect } from "react";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate to home page contact section
      window.location.href = "/#contact";
    }
  };

  return (
    <div className="pt-20">
      <About onContactClick={scrollToContact} />
      <Testimonials />
    </div>
  );
}
