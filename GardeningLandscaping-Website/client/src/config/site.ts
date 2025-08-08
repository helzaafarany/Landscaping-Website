export const siteConfig = {
  businessName: "Green Vista Landscaping",
  tagline: "Transform Your Outdoor Space",
  heroHeadline: "Transform Your Outdoor Space",
  heroSubtext: "Professional landscaping services that bring your vision to life. From design to maintenance, we create stunning outdoor environments.",
  
  contact: {
    phone: "(555) 123-4567",
    email: "info@greenvista.com",
    address: {
      street: "123 Garden Lane",
      city: "Springfield",
      state: "State",
      zip: "12345"
    }
  },
  
  services: [
    {
      id: "landscape-design",
      name: "Landscape Design",
      description: "Custom landscape designs that maximize your outdoor space's potential and beauty.",
      icon: "drafting-compass",
      featured: true
    },
    {
      id: "garden-installation",
      name: "Garden Installation", 
      description: "Professional planting and installation services for all types of gardens and landscapes.",
      icon: "seedling",
      featured: true
    },
    {
      id: "lawn-care",
      name: "Lawn Care",
      description: "Regular maintenance services to keep your lawn healthy, green, and beautiful year-round.",
      icon: "cut",
      featured: true
    },
    {
      id: "tree-services",
      name: "Tree Services",
      description: "Expert tree pruning, removal, and care to maintain the health and safety of your trees.",
      icon: "tree",
      featured: true
    },
    {
      id: "garden-maintenance",
      name: "Garden Maintenance",
      description: "Ongoing care and maintenance to keep your garden looking its best throughout the seasons.",
      icon: "leaf",
      featured: false
    },
    {
      id: "irrigation",
      name: "Irrigation Systems",
      description: "Professional irrigation system design and installation for efficient watering.",
      icon: "tint",
      featured: false
    }
  ],
  
  projects: [
    {
      id: 1,
      title: "Modern Garden Design",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      category: "Design"
    },
    {
      id: 2,
      title: "Patio & Outdoor Living",
      image: "https://images.unsplash.com/photo-1574958269340-fa927503f3dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      category: "Installation"
    },
    {
      id: 3,
      title: "Landscape Installation",
      image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      category: "Installation"
    },
    {
      id: 4,
      title: "Flower Gardens",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      category: "Garden"
    },
    {
      id: 5,
      title: "Front Yard Design",
      image: "https://images.unsplash.com/photo-1574958269340-fa927503f3dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      category: "Design"
    },
    {
      id: 6,
      title: "Water Features",
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      category: "Features"
    }
  ],
  
  testimonials: [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Homeowner, Springfield",
      content: "Green Vista transformed our backyard into an absolute paradise. The attention to detail and professionalism was outstanding. Highly recommend!",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Business Owner",
      content: "Professional, reliable, and creative. They exceeded our expectations and delivered exactly what we envisioned for our garden.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
      rating: 5
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Homeowner, Riverside",
      content: "The team was fantastic from start to finish. Our new landscape has increased our property value and we couldn't be happier.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b047?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
      rating: 5
    }
  ],
  
  socialMedia: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com", 
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com"
  },
  
  stats: {
    projectsCompleted: "500+",
    yearsExperience: "15+",
    satisfactionRate: "100%",
    supportAvailable: "24/7"
  }
};

export type SiteConfig = typeof siteConfig;
