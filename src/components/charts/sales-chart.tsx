export default function SalesChart() {
  return (
    <div className="bg-[#202226] p-4 rounded-[1px] border border-[#2c3235] flex flex-col">
      <h3 className="text-[#58b3ea] text-sm font-semibold mb-4">Ventes par Heure - Aujourd&apos;hui</h3>
      
      {/* Graphique manuel avec barres */}
      <div className="flex-1 flex flex-col">
        {/* Légende et axes */}
        <div className="flex-1 relative min-h-[120px] mb-2">
          {/* Lignes de grille horizontales */}
          <div className="absolute inset-0 flex flex-col justify-between">
            {[0, 1, 2, 3, 4].map((i) => (
              <div key={i} className="border-t border-[#2c3235]"></div>
            ))}
          </div>
          
          {/* Barres des ventes */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-between items-end px-2 h-full">
            {[
              { hour: '06h', sales: 12, height: '30%' },
              { hour: '08h', sales: 25, height: '62%' },
              { hour: '10h', sales: 18, height: '45%' },
              { hour: '12h', sales: 32, height: '80%' },
              { hour: '14h', sales: 28, height: '70%' },
              { hour: '16h', sales: 35, height: '87%' },
              { hour: '18h', sales: 42, height: '100%' },
              { hour: '20h', sales: 30, height: '75%' },
              { hour: '22h', sales: 22, height: '55%' }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center flex-1 mx-[2px] group">
                {/* Barre */}
                <div 
                  className="w-full bg-gradient-to-t from-[#58b3ea] to-[#58b3ea]/80 rounded-t-[2px] transition-all duration-300 hover:from-[#58b3ea] hover:to-[#58b3ea] cursor-pointer"
                  style={{ height: item.height }}
                  title={`${item.hour}: ${item.sales}K FCFA`}
                ></div>
                
                {/* Valeur au-dessus de la barre */}
                <div className="absolute -top-6 text-[#58b3ea] text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  {item.sales}K
                </div>
              </div>
            ))}
          </div>
          
          {/* Axe Y */}
          <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-[#8e9297] text-xs py-1">
            <span>40K</span>
            <span>30K</span>
            <span>20K</span>
            <span>10K</span>
            <span>0K</span>
          </div>
        </div>
        
        {/* Axe X - Heures */}
        <div className="flex justify-between px-2 text-[#8e9297] text-xs">
          <span>06h</span>
          <span>08h</span>
          <span>10h</span>
          <span>12h</span>
          <span>14h</span>
          <span>16h</span>
          <span>18h</span>
          <span>20h</span>
          <span>22h</span>
        </div>
      </div>
      
      {/* Légende */}
      <div className="flex justify-between items-center mt-3 pt-2 border-t border-[#2c3235]">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-gradient-to-t from-[#58b3ea] to-[#58b3ea]/80 rounded-[1px]"></div>
          <span className="text-[#8e9297] text-xs">Ventes horaires (K FCFA)</span>
        </div>
        <div className="text-[#8e9297] text-xs">
          Total: <span className="text-[#58b3ea] font-semibold">244K FCFA</span>
        </div>
      </div>
    </div>
  );
}