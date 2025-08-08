import { useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LightboxProps {
  src: string;
  alt: string;
  title: string;
  onClose: () => void;
}

export default function Lightbox({ src, alt, title, onClose }: LightboxProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-4 right-4 text-white hover:bg-white/20 z-10"
        onClick={onClose}
      >
        <X className="w-8 h-8" />
      </Button>
      
      <div className="relative max-w-5xl max-h-full" onClick={(e) => e.stopPropagation()}>
        <img 
          src={src}
          alt={alt}
          className="max-w-full max-h-[90vh] object-contain"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4 text-center">
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
      </div>
    </div>
  );
}
