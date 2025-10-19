import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function FuelCards() {
  const stationData = useSelector((state: RootState) => state.stationData);
  const [previousData, setPreviousData] = useState(stationData.fuels);
  const [isClient, setIsClient] = useState(false);

  // Calcul des pourcentages basés sur les données réelles
  const calculatePercentage = (current: number, capacity: number) => {
    return Math.min(Math.max((current / capacity) * 100, 0), 100);
  };

  // Capacités maximales pour chaque type de carburant (en litres)
  const capacities = {
    essence1: 20000,
    essence2: 20000,
    petrol: 20000,
    gazoil: 20000
  };

  // Données des carburants avec les nouveaux niveaux demandés :
  const fuels = [
    {
      type: 'essence1',
      name: 'Essence1',
      currentValue: stationData.fuels.essence1,
      capacity: capacities.essence1,
      percentage: calculatePercentage(stationData.fuels.essence1, capacities.essence1),
      simulatedValue: 14500 // 72.5% de 20000 → JAUNE
    },
    {
      type: 'essence2',
      name: 'Essence2',
      currentValue: stationData.fuels.essence2,
      capacity: capacities.essence2,
      percentage: calculatePercentage(stationData.fuels.essence2, capacities.essence2),
      simulatedValue: 4500 // 22.5% de 20000 → ORANGE
    },
    {
      type: 'petrol',
      name: 'Petrole',
      currentValue: stationData.fuels.petrol,
      capacity: capacities.petrol,
      percentage: calculatePercentage(stationData.fuels.petrol, capacities.petrol),
      simulatedValue: 18000 // 90% de 20000 → VERT
    },
    {
      type: 'gazoil',
      name: 'Gazoil',
      currentValue: stationData.fuels.gazoil,
      capacity: capacities.gazoil,
      percentage: calculatePercentage(stationData.fuels.gazoil, capacities.gazoil),
      simulatedValue: 16500 // 82.5% de 20000 → VERT
    }
  ];

  // Fonction pour déterminer la couleur en fonction du pourcentage
  const getBarColor = (percentage: number) => {
    if (percentage >= 75) return 'bg-green-500';
    if (percentage >= 50) return 'bg-yellow-500';
    if (percentage >= 25) return 'bg-orange-500';
    return 'bg-red-500';
  };

  // Fonction pour déterminer la couleur du texte du pourcentage
  const getPercentageColor = (percentage: number) => {
    if (percentage >= 75) return 'text-green-400';
    if (percentage >= 50) return 'text-yellow-400';
    if (percentage >= 25) return 'text-orange-400';
    return 'text-red-400';
  };

  // Fonction pour obtenir le statut textuel
  const getStatusText = (percentage: number) => {
    if (percentage >= 75) return 'Élevé';
    if (percentage >= 50) return 'Bon';
    if (percentage >= 25) return 'Faible';
    return 'Critique';
  };

  // Fonction pour obtenir la couleur du statut
  const getStatusColor = (percentage: number) => {
    if (percentage >= 75) return 'text-green-400';
    if (percentage >= 50) return 'text-yellow-400';
    if (percentage >= 25) return 'text-orange-400';
    return 'text-red-400';
  };

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

  // Mettre à jour les données précédentes quand les données changent
  useEffect(() => {
    const timer = setTimeout(() => {
      setPreviousData(stationData.fuels);
    }, 1000);

    return () => clearTimeout(timer);
  }, [stationData.fuels]);

  // Détecter si on est côté client
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="h-full w-full grid grid-cols-2 grid-rows-2 gap-[2px] min-h-0">
      {fuels.map((fuel) => {
        // Utiliser la valeur simulée pour démonstration, ou la valeur réelle si disponible
        const displayValue = fuel.currentValue > 0 ? fuel.currentValue : fuel.simulatedValue;
        const displayPercentage = calculatePercentage(displayValue, fuel.capacity);

        return (
          <div 
            key={fuel.type} 
            className="bg-[#2a2d32] rounded-[1px] flex flex-col p-2 relative min-h-0 overflow-hidden"
          >
            {/* Indicateur de tendance */}
            <div className="absolute top-1.5 right-1.5">
              {getTrendIndicator(
                stationData.fuels[fuel.type as keyof typeof stationData.fuels] || displayValue,
                previousData[fuel.type as keyof typeof previousData] || displayValue
              )}
            </div>

            {/* En-tête avec nom du carburant et pourcentage */}
            <div className="flex justify-between items-center mb-1">
              <span className="text-[#58b3ea] text-[10px] font-semibold truncate flex-1 mr-1">
                {fuel.name}
              </span>
              <div className="flex items-center space-x-1">
                <span className={`text-[8px] font-medium ${getStatusColor(displayPercentage)}`}>
                  {getStatusText(displayPercentage)}
                </span>
                <span className={`text-[10px] font-semibold ${getPercentageColor(displayPercentage)} whitespace-nowrap`}>
                  {Math.round(displayPercentage)}%
                </span>
              </div>
            </div>
            
            {/* Contenu principal avec la valeur actuelle */}
            <div className="flex-1 flex flex-col justify-center items-center mb-1 min-h-0">
              <span className="text-[#8e9297] text-[9px] mb-0.5 text-center">Niveau actuel</span>
              <span className="text-white text-sm font-semibold text-center leading-tight">
                {formatNumber(displayValue)}
                <span className="text-[#8e9297] text-xs ml-0.5">L</span>
              </span>
              <span className="text-[#8e9297] text-[9px] mt-0.5 text-center leading-none">
                Cap: {formatNumber(fuel.capacity)} L
              </span>
            </div>
            
            {/* Barre de progression */}
            <div className="w-full bg-[#202226] rounded-full h-1.5 mb-0.5">
              <div 
                className={`h-1.5 rounded-full transition-all duration-500 ${getBarColor(displayPercentage)}`}
                style={{ width: `${displayPercentage}%` }}
              ></div>
            </div>

            {/* Informations supplémentaires */}
            <div className="flex justify-between items-center text-[8px] text-[#8e9297] leading-none">
              <span className="whitespace-nowrap">0 L</span>
              <span className="text-center whitespace-nowrap">
                Restant: {formatNumber(fuel.capacity - displayValue)} L
              </span>
              <span className="whitespace-nowrap">{formatNumber(fuel.capacity)} L</span>
            </div>

            {/* Indicateur de niveau */}
            <div className="flex justify-center mt-0.5">
              <div className={`text-[7px] px-1 py-0.5 rounded ${getBarColor(displayPercentage)} text-white font-medium`}>
                {getStatusText(displayPercentage).toUpperCase()}
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