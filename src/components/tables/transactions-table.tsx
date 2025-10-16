export default function TransactionsTable() {
  return (
    <div className="h-full bg-[#202226] rounded-[1px] border border-[#2c3235] flex flex-col">
      {/* Header avec boutons et selectbox */}
      <div className="flex justify-between items-center p-4 border-b border-[#2c3235] bg-[#202226]">
        <div className="flex space-x-2">
          <button className="px-3 py-1.5 bg-[#2a2d32] text-[#8e9297] text-xs rounded-[1px] border border-[#2c3235] hover:bg-[#32353b] hover:text-[#58b3ea] transition-colors">
            CSV
          </button>
          
          <button className="px-3 py-1.5 bg-[#2a2d32] text-[#8e9297] text-xs rounded-[1px] border border-[#2c3235] hover:bg-[#32353b] hover:text-[#58b3ea] transition-colors">
            XSLX
          </button>
          
          <button className="px-3 py-1.5 bg-[#2a2d32] text-[#8e9297] text-xs rounded-[1px] border border-[#2c3235] hover:bg-[#32353b] hover:text-[#58b3ea] transition-colors">
            COPY
          </button>
          
          <button className="px-3 py-1.5 bg-[#2a2d32] text-[#8e9297] text-xs rounded-[1px] border border-[#2c3235] hover:bg-[#32353b] hover:text-[#58b3ea] transition-colors">
            IMPRIMER
          </button>
        </div>
        
        <div className="flex items-center space-x-2">
          <select className="px-3 py-1.5 bg-[#2a2d32] text-[#8e9297] text-xs rounded-[1px] border border-[#2c3235] hover:bg-[#32353b] focus:outline-none focus:border-[#58b3ea] transition-colors">
            <option value="today">Aujourd&apos;hui</option>
            <option value="yesterday">Hier</option>
            <option value="week">Cette semaine</option>
            <option value="month">Ce mois</option>
            <option value="custom">Période personnalisée</option>
          </select>
        </div>
      </div>

      {/* Tableau */}
      <div className="flex-1 overflow-auto">
        <table className="w-full text-xs text-[#8e9297]">
          {/* En-tête du tableau */}
          <thead className="bg-[#2a2d32] sticky top-0">
            <tr>
              <th className="p-2 text-left border-b border-[#2c3235]">N°</th>
              <th className="p-2 text-left border-b border-[#2c3235]">Date et Heure</th>
              <th className="p-2 text-left border-b border-[#2c3235]">Pompe</th>
              <th className="p-2 text-left border-b border-[#2c3235]">Buse</th>
              <th className="p-2 text-left border-b border-[#2c3235]">Transaction</th>
              <th className="p-2 text-left border-b border-[#2c3235]">Volume distribué (L)</th>
              <th className="p-2 text-left border-b border-[#2c3235]">Montant rempli (F)</th>
              <th className="p-2 text-left border-b border-[#2c3235]">Prix (F)</th>
              <th className="p-2 text-left border-b border-[#2c3235]">Volume total</th>
              <th className="p-2 text-left border-b border-[#2c3235]">Montant total (F)</th>
              <th className="p-2 text-left border-b border-[#2c3235]">Utilisateur</th>
            </tr>
          </thead>
          
          {/* Corps du tableau */}
          <tbody>
            {/* Ligne 1 - couleur sombre */}
            <tr className="bg-[#202226] hover:bg-[#2a2d32] transition-colors">
              <td className="p-2 border-b border-[#2c3235]">1</td>
              <td className="p-2 border-b border-[#2c3235]">15/01/2024 14:30</td>
              <td className="p-2 border-b border-[#2c3235]">Pompe A</td>
              <td className="p-2 border-b border-[#2c3235]">Buse 1</td>
              <td className="p-2 border-b border-[#2c3235]">TRX001</td>
              <td className="p-2 border-b border-[#2c3235]">45.50</td>
              <td className="p-2 border-b border-[#2c3235]">45,750</td>
              <td className="p-2 border-b border-[#2c3235]">1,005</td>
              <td className="p-2 border-b border-[#2c3235]">1,245.50</td>
              <td className="p-2 border-b border-[#2c3235]">1,251,727</td>
              <td className="p-2 border-b border-[#2c3235]">Jean D.</td>
            </tr>
            
            {/* Ligne 2 - couleur plus claire */}
            <tr className="bg-[#25282d] hover:bg-[#2a2d32] transition-colors">
              <td className="p-2 border-b border-[#2c3235]">2</td>
              <td className="p-2 border-b border-[#2c3235]">15/01/2024 15:45</td>
              <td className="p-2 border-b border-[#2c3235]">Pompe B</td>
              <td className="p-2 border-b border-[#2c3235]">Buse 2</td>
              <td className="p-2 border-b border-[#2c3235]">TRX002</td>
              <td className="p-2 border-b border-[#2c3235]">32.25</td>
              <td className="p-2 border-b border-[#2c3235]">32,411</td>
              <td className="p-2 border-b border-[#2c3235]">1,005</td>
              <td className="p-2 border-b border-[#2c3235]">1,277.75</td>
              <td className="p-2 border-b border-[#2c3235]">1,284,138</td>
              <td className="p-2 border-b border-[#2c3235]">Marie L.</td>
            </tr>
            
            {/* Ligne 3 - couleur sombre */}
            <tr className="bg-[#202226] hover:bg-[#2a2d32] transition-colors">
              <td className="p-2 border-b border-[#2c3235]">3</td>
              <td className="p-2 border-b border-[#2c3235]">15/01/2024 16:20</td>
              <td className="p-2 border-b border-[#2c3235]">Pompe A</td>
              <td className="p-2 border-b border-[#2c3235]">Buse 3</td>
              <td className="p-2 border-b border-[#2c3235]">TRX003</td>
              <td className="p-2 border-b border-[#2c3235]">60.00</td>
              <td className="p-2 border-b border-[#2c3235]">60,300</td>
              <td className="p-2 border-b border-[#2c3235]">1,005</td>
              <td className="p-2 border-b border-[#2c3235]">1,337.75</td>
              <td className="p-2 border-b border-[#2c3235]">1,344,438</td>
              <td className="p-2 border-b border-[#2c3235]">Pierre M.</td>
            </tr>
            
            {/* Ligne 4 - couleur plus claire */}
            <tr className="bg-[#25282d] hover:bg-[#2a2d32] transition-colors">
              <td className="p-2 border-b border-[#2c3235]">4</td>
              <td className="p-2 border-b border-[#2c3235]">15/01/2024 17:10</td>
              <td className="p-2 border-b border-[#2c3235]">Pompe C</td>
              <td className="p-2 border-b border-[#2c3235]">Buse 1</td>
              <td className="p-2 border-b border-[#2c3235]">TRX004</td>
              <td className="p-2 border-b border-[#2c3235]">28.75</td>
              <td className="p-2 border-b border-[#2c3235]">28,894</td>
              <td className="p-2 border-b border-[#2c3235]">1,005</td>
              <td className="p-2 border-b border-[#2c3235]">1,366.50</td>
              <td className="p-2 border-b border-[#2c3235]">1,373,332</td>
              <td className="p-2 border-b border-[#2c3235]">Sophie K.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}