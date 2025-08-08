import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { siteConfig } from "@/config/site";

interface GalleryProps {
  showAll?: boolean;
  onImageClick?: (src: string, alt: string, title: string) => void;
}

export default function Gallery({ showAll = false, onImageClick }: GalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  
  const projects = showAll ? siteConfig.projects : siteConfig.projects.slice(0, 6);
  const categories = ["All", ...Array.from(new Set(siteConfig.projects.map(p => p.category)))];
  
  const filteredProjects = selectedCategory === "All" 
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-bold text-4xl md:text-5xl text-forest-green mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of stunning landscape transformations and garden installations.
          </p>
        </div>
        
        {showAll && (
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={selectedCategory === category ? "bg-fresh-green text-white" : ""}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredProjects.map((project) => (
            <Card 
              key={project.id}
              className="gallery-item group cursor-pointer overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => onImageClick?.(project.image, project.title, project.title)}
            >
              <div className="relative">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center">
                    <Search className="w-8 h-8 mx-auto mb-2" />
                    <p className="font-semibold">{project.title}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        {!showAll && (
          <div className="text-center">
            <Button className="cta-button text-white px-8 py-4 text-lg">
              View Full Gallery
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
