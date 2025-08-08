import { useEffect } from "react";
import Services from "@/components/Services";

export default function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleServiceClick = (serviceId: string) => {
    // Could implement service detail modal or navigation
    console.log("Service clicked:", serviceId);
  };

  return (
    <div className="pt-20">
      <Services showAll={true} onServiceClick={handleServiceClick} />
    </div>
  );
}
