import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Compass, Sprout, Scissors, Trees } from "lucide-react";
import { siteConfig } from "@/config/site";

const iconMap = {
  "drafting-compass": Compass,
  "seedling": Sprout,
  "cut": Scissors,
  "tree": Trees,
};

interface ServicesProps {
  showAll?: boolean;
  onServiceClick?: (serviceId: string) => void;
}

export default function Services({ showAll = false, onServiceClick }: ServicesProps) {
  const services = showAll 
    ? siteConfig.services 
    : siteConfig.services.filter(service => service.featured);

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-cream-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-bold text-4xl md:text-5xl text-forest-green mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From concept to completion, we offer comprehensive landscaping solutions 
            tailored to your needs and budget.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Sprout;
            
            return (
              <Card 
                key={service.id}
                className="service-card transition-all duration-300 cursor-pointer hover:shadow-xl"
                onClick={() => onServiceClick?.(service.id)}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-fresh-green/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <IconComponent className="w-8 h-8 text-fresh-green" />
                  </div>
                  <h3 className="font-semibold text-xl text-forest-green mb-4">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <span className="text-fresh-green font-semibold hover:underline">
                    Learn More →
                  </span>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {!showAll && (
          <div className="text-center mt-12">
            <Button className="cta-button text-white px-8 py-4 text-lg">
              View All Services
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
