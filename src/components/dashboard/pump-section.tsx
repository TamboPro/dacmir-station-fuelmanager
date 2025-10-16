import Image from 'next/image';
import PumpCards from '@/components/cards/pump-cards';

export default function PumpSection() {
  return (
    <div className="flex gap-[2px]">
      <div className="flex-1 bg-transparent p-4 rounded-[1px] border border-[#2c3235] flex flex-col items-center justify-center">
        <div className="w-full h-full flex items-center justify-center">
          <div className="relative w-42 h-42">
            <Image
              src="/assets/images/Pompe_img.png"
              alt="Pompe à essence"
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
        </div>
      </div>
      <PumpCards />
    </div>
  );
}