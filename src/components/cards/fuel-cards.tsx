export default function FuelCards() {
  return (
    <div className="flex-1 grid grid-cols-2 gap-[2px]">
      {/* Carré 1 */}
      <div className="bg-[#2a2d32] rounded-[1px] flex flex-col p-3">
        <div className="flex justify-between items-center mb-2">
          <span className="text-[#58b3ea] text-xs font-semibold">Essence1</span>
          <span className="text-[#8e9297] text-xs">75%</span>
        </div>
        
        <div className="flex-1 flex flex-col justify-center items-center mb-2">
          <span className="text-[#8e9297] text-xs mb-1">Capacité en litre (L)</span>
          <span className="text-white text-lg font-semibold">15,000</span>
        </div>
        
        <div className="w-full bg-[#202226] rounded-full h-2">
          <div 
            className="bg-green-500 h-2 rounded-full transition-all duration-300"
            style={{ width: '75%' }}
          ></div>
        </div>
      </div>

      {/* Carré 2 */}
      <div className="bg-[#2a2d32] rounded-[1px] flex flex-col p-3">
        <div className="flex justify-between items-center mb-2">
          <span className="text-[#58b3ea] text-xs font-semibold">Essence2</span>
          <span className="text-[#8e9297] text-xs">45%</span>
        </div>
        
        <div className="flex-1 flex flex-col justify-center items-center mb-2">
          <span className="text-[#8e9297] text-xs mb-1">Capacité en litre (L)</span>
          <span className="text-white text-lg font-semibold">9,000</span>
        </div>
        
        <div className="w-full bg-[#202226] rounded-full h-2">
          <div 
            className="bg-red-500 h-2 rounded-full transition-all duration-300"
            style={{ width: '45%' }}
          ></div>
        </div>
      </div>

      {/* Carré 3 */}
      <div className="bg-[#2a2d32] rounded-[1px] flex flex-col p-3">
        <div className="flex justify-between items-center mb-2">
          <span className="text-[#58b3ea] text-xs font-semibold">Petrole</span>
          <span className="text-[#8e9297] text-xs">60%</span>
        </div>
        
        <div className="flex-1 flex flex-col justify-center items-center mb-2">
          <span className="text-[#8e9297] text-xs mb-1">Capacité en litre (L)</span>
          <span className="text-white text-lg font-semibold">12,000</span>
        </div>
        
        <div className="w-full bg-[#202226] rounded-full h-2">
          <div 
            className="bg-orange-500 h-2 rounded-full transition-all duration-300"
            style={{ width: '60%' }}
          ></div>
        </div>
      </div>

      {/* Carré 4 */}
      <div className="bg-[#2a2d32] rounded-[1px] flex flex-col p-3">
        <div className="flex justify-between items-center mb-2">
          <span className="text-[#58b3ea] text-xs font-semibold">Gazoil</span>
          <span className="text-[#8e9297] text-xs">85%</span>
        </div>
        
        <div className="flex-1 flex flex-col justify-center items-center mb-2">
          <span className="text-[#8e9297] text-xs mb-1">Capacité en litre (L)</span>
          <span className="text-white text-lg font-semibold">17,000</span>
        </div>
        
        <div className="w-full bg-[#202226] rounded-full h-2">
          <div 
            className="bg-green-500 h-2 rounded-full transition-all duration-300"
            style={{ width: '85%' }}
          ></div>
        </div>
      </div>
    </div>
  );
}