import { Fuel, TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { useState, useEffect } from 'react';

export default function PumpCards() {
  const stationData = useSelector((state: RootState) => state.stationData);
  const [previousData, setPreviousData] = useState(stationData.pumps);
  const [isClient, setIsClient] = useState(false);

  // Formatage des nombres
  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('fr-FR').format(num);
  };

  // Détection des changements pour les indicateurs de tendance
  const getTrendIndicator = (current: number, previous: number) => {
    if (current > previous) {
      return <TrendingUp className="w-3 h-3 text-green-400" />;
    } else if (current < previous) {
      return <TrendingDown className="w-3 h-3 text-red-400" />;
    } else {
      return <Minus className="w-3 h-3 text-gray-400" />;
    }
  };

  // Formater l'heure de manière sécurisée
  const formatTimeSafe = (timestamp: number) => {
    if (!isClient) return '--:--:--';
    return new Date(timestamp).toLocaleTimeString();
  };

  // Données des pompes avec 2 actives et 2 inactives
  const pumps = [
    {
      type: 'pompe1',
      name: 'Pompe 1',
      currentValue: stationData.pumps.pompe1,
      previousValue: previousData.pompe1,
      simulatedValue: 1245,
      status: 'active', // POMPE ACTIVE
    },
    {
      type: 'pompe2',
      name: 'Pompe 2',
      currentValue: stationData.pumps.pompe2,
      previousValue: previousData.pompe2,
      simulatedValue: 892,
      status: 'inactive', // POMPE INACTIVE
    },
    {
      type: 'pompe3',
      name: 'Pompe 3',
      currentValue: stationData.pumps.pompe3,
      previousValue: previousData.pompe3,
      simulatedValue: 2156,
      status: 'active', // POMPE ACTIVE
    },
    {
      type: 'pompe4',
      name: 'Pompe 4',
      currentValue: stationData.pumps.pompe4,
      previousValue: previousData.pompe4,
      simulatedValue: 1734,
      status: 'inactive', // POMPE INACTIVE
    }
  ];

  // Mettre à jour les données précédentes quand les données changent
  useEffect(() => {
    const timer = setTimeout(() => {
      setPreviousData(stationData.pumps);
    }, 2000);

    return () => clearTimeout(timer);
  }, [stationData.pumps]);

  // Détecter si on est côté client
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="h-full w-full grid grid-cols-2 grid-rows-2 gap-[2px] min-h-0">
      {pumps.map((pump) => {
        // Utiliser la valeur simulée pour démonstration, ou la valeur réelle si disponible
        const displayValue = pump.currentValue > 0 ? pump.currentValue : pump.simulatedValue;

        return (
          <div 
            key={pump.type} 
            className="bg-[#2a2d32] rounded-[1px] flex flex-col p-2 relative min-h-0 overflow-hidden"
          >
            {/* Indicateur de tendance */}
            <div className="absolute top-1.5 right-1.5">
              {getTrendIndicator(
                stationData.pumps[pump.type as keyof typeof stationData.pumps] || displayValue,
                previousData[pump.type as keyof typeof previousData] || displayValue
              )}
            </div>

            {/* En-tête avec nom de la pompe */}
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center space-x-1.5">
                <Fuel className="w-3.5 h-3.5 text-[#58b3ea]" />
                <span className="text-[#58b3ea] text-[11px] font-medium truncate">
                  {pump.name}
                </span>
              </div>
            </div>
            
            {/* Contenu principal avec la quantité servie */}
            <div className="flex-1 flex flex-col justify-center items-center mb-1 min-h-0">
              <span className="text-white text-sm font-semibold text-center leading-tight">
                {formatNumber(displayValue)}
                <span className="text-[#8e9297] text-xs ml-0.5">L</span>
              </span>
              <span className="text-[#8e9297] text-[9px] mt-0.5 text-center leading-none">
                Quantité servie
              </span>
            </div>
            
            {/* Statut de la pompe */}
            <div className="flex items-center justify-between">
              <span className="text-[#8e9297] text-[10px]">Statut</span>
              <div className="flex items-center space-x-1">
                <div className={`w-1.5 h-1.5 rounded-full ${
                  pump.status === 'active' ? 'bg-green-500 animate-pulse' : 'bg-red-500'
                }`}></div>
                <span className={`text-[10px] font-medium ${
                  pump.status === 'active' ? 'text-green-500' : 'text-red-500'
                }`}>
                  {pump.status === 'active' ? 'Active' : 'Inactive'}
                </span>
              </div>
            </div>

            {/* Dernière mise à jour */}
            <div className="text-[7px] text-[#5a5e64] text-center mt-0.5 leading-none">
              MAJ: {formatTimeSafe(stationData.lastUpdate)}
            </div>
          </div>
        );
      })}
    </div>
  );
}