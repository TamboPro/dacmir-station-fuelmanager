import Image from 'next/image';

export default function MapCard() {
  return (
    <div className="bg-[#202226] rounded-[1px] border border-[#2c3235] flex flex-col">
      <div className="flex-1 relative">
        <Image
          src="/assets/images/Map_dark2.png"
          alt="Carte"
          fill
          style={{ objectFit: "fill" }}
          className="rounded-[1px]"
          priority
        />
      </div>
    </div>
  );
}