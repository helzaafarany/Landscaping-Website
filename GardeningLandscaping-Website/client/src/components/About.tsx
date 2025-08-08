import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

interface AboutProps {
  onContactClick?: () => void;
}

export default function About({ onContactClick }: AboutProps) {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-bold text-4xl md:text-5xl text-forest-green mb-8">
              About {siteConfig.businessName.split(' ')[0]} {siteConfig.businessName.split(' ')[1]}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              With over <span className="font-semibold text-fresh-green">15 years of experience</span> in 
              landscaping and garden design, we've been transforming outdoor spaces throughout the region.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Our passion for creating beautiful, sustainable landscapes drives everything we do. 
              From initial consultation to final installation, we work closely with our clients to 
              bring their vision to life while respecting their budget and timeline.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-fresh-green mb-2">
                  {siteConfig.stats.projectsCompleted}
                </div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-fresh-green mb-2">
                  {siteConfig.stats.yearsExperience}
                </div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-fresh-green mb-2">
                  {siteConfig.stats.satisfactionRate}
                </div>
                <div className="text-gray-600">Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-fresh-green mb-2">
                  {siteConfig.stats.supportAvailable}
                </div>
                <div className="text-gray-600">Support Available</div>
              </div>
            </div>
            
            <Button 
              className="cta-button text-white px-8 py-4 text-lg"
              onClick={onContactClick}
            >
              Learn More About Us
            </Button>
          </div>
          
          <div className="space-y-6">
            <img 
              src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Professional landscaping team"
              className="rounded-xl shadow-lg w-full"
            />
            
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
                alt="Garden design planning"
                className="rounded-lg shadow-md w-full h-32 object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
                alt="Professional garden tools"
                className="rounded-lg shadow-md w-full h-32 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
