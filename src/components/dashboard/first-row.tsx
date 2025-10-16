import MapCard from '@/components/cards/map-card';
import CameraCard from '@/components/cards/camera-card';

export default function FirstRow() {
  return (
    <div className="h-1/3 grid grid-cols-1 md:grid-cols-3 gap-[2px]">
      <MapCard />
      <CameraCard 
        title="Caméra 1 - Entrée"
        imageSrc="/assets/images/camera1.png"
        alt="Vue caméra entrée"
      />
      <CameraCard 
        title="Caméra 2 - Station"
        imageSrc="/assets/images/camera2.png"
        alt="Vue caméra station"
      />
    </div>
  );
}