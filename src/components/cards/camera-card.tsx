import Image from 'next/image';
import { useState } from 'react';

interface CameraCardProps {
  title: string;
  imageSrc: string;
  alt: string;
  cameras?: string[];
}

export default function CameraCard({ title, imageSrc, alt, cameras = [] }: CameraCardProps) {
  const [selectedCamera, setSelectedCamera] = useState(title);

  const handleCameraChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCamera(event.target.value);
  };

  return (
    <div className="bg-[#202226] rounded-[1px] border border-[#2c3235] flex flex-col">
      {/* Header avec titre et sélecteur */}
      

      {/* Contenu de l'image */}
      <div className="flex-1 relative min-h-[150px] bg-[#2a2d32] rounded-[1px] flex items-center justify-center">
        <Image
          src={imageSrc}
          alt={alt}
          fill
          style={{ objectFit: "cover" }}
          className="rounded-[1px]"
        />
        <div className="absolute top-2 right-2 flex items-center space-x-1">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          <span className="text-green-500 text-xs font-medium">En direct</span>
        </div>
      </div>
    </div>
  );
}