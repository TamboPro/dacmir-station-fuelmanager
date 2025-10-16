import Image from 'next/image';
import FuelCards from '@/components/cards/fuel-cards';

export default function TankSection() {
  return (
    <div className="flex gap-[2px]">
      <div className="flex-1 bg-transparent p-4 rounded-[1px] border border-[#2c3235] flex flex-col">
        <div className="w-full h-full flex items-center justify-center">
          <div className="relative w-42 h-42">
            <Image
              src="/assets/images/Tank.png"
              alt="Réservoir"
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
        </div>
      </div>
      <FuelCards />
    </div>
  );
}