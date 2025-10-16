import { Fuel } from 'lucide-react';

export default function PumpCards() {
  return (
    <div className="flex-1 grid grid-cols-2 gap-[2px]">
      {/* Pompe 1 */}
      <div className="bg-[#2a2d32] rounded-[1px] flex flex-col p-3">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-2">
            <Fuel className="w-4 h-4 text-[#58b3ea]" />
            <span className="text-[#58b3ea] text-sm font-medium">Pompe 1</span>
          </div>
        </div>
        
        <div className="flex-1 flex flex-col justify-center items-center mb-2">
          <span className="text-white text-lg font-semibold">1,245 L</span>
          <span className="text-[#8e9297] text-xs mt-1">Quantité servie</span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-[#8e9297] text-xs">Statut</span>
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span className="text-green-500 text-xs font-medium">Active</span>
          </div>
        </div>
      </div>

      {/* Pompe 2 */}
      <div className="bg-[#2a2d32] rounded-[1px] flex flex-col p-3">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-2">
            <Fuel className="w-4 h-4 text-[#58b3ea]" />
            <span className="text-[#58b3ea] text-sm font-medium">Pompe 2</span>
          </div>
        </div>
        
        <div className="flex-1 flex flex-col justify-center items-center mb-2">
          <span className="text-white text-lg font-semibold">892 L</span>
          <span className="text-[#8e9297] text-xs mt-1">Quantité servie</span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-[#8e9297] text-xs">Statut</span>
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 rounded-full bg-red-500"></div>
            <span className="text-red-500 text-xs font-medium">Inactive</span>
          </div>
        </div>
      </div>

      {/* Pompe 3 */}
      <div className="bg-[#2a2d32] rounded-[1px] flex flex-col p-3">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-2">
            <Fuel className="w-4 h-4 text-[#58b3ea]" />
            <span className="text-[#58b3ea] text-sm font-medium">Pompe 3</span>
          </div>
        </div>
        
        <div className="flex-1 flex flex-col justify-center items-center mb-2">
          <span className="text-white text-lg font-semibold">2,156 L</span>
          <span className="text-[#8e9297] text-xs mt-1">Quantité servie</span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-[#8e9297] text-xs">Statut</span>
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span className="text-green-500 text-xs font-medium">Active</span>
          </div>
        </div>
      </div>

      {/* Pompe 4 */}
      <div className="bg-[#2a2d32] rounded-[1px] flex flex-col p-3">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-2">
            <Fuel className="w-4 h-4 text-[#58b3ea]" />
            <span className="text-[#58b3ea] text-sm font-medium">Pompe 4</span>
          </div>
        </div>
        
        <div className="flex-1 flex flex-col justify-center items-center mb-2">
          <span className="text-white text-lg font-semibold">1,734 L</span>
          <span className="text-[#8e9297] text-xs mt-1">Quantité servie</span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-[#8e9297] text-xs">Statut</span>
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span className="text-green-500 text-xs font-medium">Active</span>
          </div>
        </div>
      </div>
    </div>
  );
}