// components/layout/ImageSection.tsx
import Image from 'next/image';

interface ImageSectionProps {
  src: string;
  alt: string;
  title: string;
  description: string;
  credit?: string;
}

export function ImageSection({ src, alt, title, description, credit }: ImageSectionProps) {
  return (
    <div className="hidden md:block md:w-3/4 relative">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background/30 to-background/0" />
      
      <div className="absolute bottom-10 left-10 text-background max-w-md">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-base">{description}</p>
        {credit && <h4 className="text-2xl font-bold mb-2">{credit}</h4>}
      </div>
    </div>
  );
}