import { Link } from "wouter";
import { Leaf, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-forest-green text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-fresh-green rounded-full flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-2xl">{siteConfig.businessName}</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Professional landscaping services that transform your outdoor space into a 
              beautiful, sustainable environment. Licensed, insured, and committed to excellence.
            </p>
            <div className="flex space-x-4">
              <a 
                href={siteConfig.socialMedia.facebook}
                className="w-10 h-10 bg-fresh-green rounded-full flex items-center justify-center hover:bg-sage-green transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href={siteConfig.socialMedia.instagram}
                className="w-10 h-10 bg-fresh-green rounded-full flex items-center justify-center hover:bg-sage-green transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href={siteConfig.socialMedia.twitter}
                className="w-10 h-10 bg-fresh-green rounded-full flex items-center justify-center hover:bg-sage-green transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href={siteConfig.socialMedia.linkedin}
                className="w-10 h-10 bg-fresh-green rounded-full flex items-center justify-center hover:bg-sage-green transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-xl mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-fresh-green transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-fresh-green transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-fresh-green transition-colors duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-300 hover:text-fresh-green transition-colors duration-300">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-fresh-green transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="font-semibold text-xl mb-6">Services</h3>
            <ul className="space-y-3">
              {siteConfig.services.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link 
                    href="/services" 
                    className="text-gray-300 hover:text-fresh-green transition-colors duration-300"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-600 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            &copy; {currentYear} {siteConfig.businessName}. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-300 hover:text-fresh-green text-sm transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-300 hover:text-fresh-green text-sm transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-gray-300 hover:text-fresh-green text-sm transition-colors duration-300">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
