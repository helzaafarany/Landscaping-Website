import { useEffect } from "react";
import Gallery from "@/components/Gallery";

interface GalleryPageProps {
  onImageClick?: (src: string, alt: string, title: string) => void;
}

export default function GalleryPage({ onImageClick }: GalleryPageProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20">
      <Gallery showAll={true} onImageClick={onImageClick} />
    </div>
  );
}
