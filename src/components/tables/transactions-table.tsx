import { useState } from 'react';

export default function TransactionsTable() {
  // État pour la pagination
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 3;

  // Données du tableau
  const tableData = [
    {
      id: 1,
      date: "15/01/2024 14:30",
      pompe: "Pompe A",
      buse: "Buse 1",
      transaction: "TRX001",
      volumeDistribue: "45.50",
      montantRempli: "45,750",
      prix: "1,005",
      volumeTotal: "1,245.50",
      montantTotal: "1,251,727",
      utilisateur: "Jean D."
    },
    {
      id: 2,
      date: "15/01/2024 15:45",
      pompe: "Pompe B",
      buse: "Buse 2",
      transaction: "TRX002",
      volumeDistribue: "32.25",
      montantRempli: "32,411",
      prix: "1,005",
      volumeTotal: "1,277.75",
      montantTotal: "1,284,138",
      utilisateur: "Marie L."
    },
    {
      id: 3,
      date: "15/01/2024 16:20",
      pompe: "Pompe A",
      buse: "Buse 3",
      transaction: "TRX003",
      volumeDistribue: "60.00",
      montantRempli: "60,300",
      prix: "1,005",
      volumeTotal: "1,337.75",
      montantTotal: "1,344,438",
      utilisateur: "Pierre M."
    },
    {
      id: 4,
      date: "15/01/2024 17:10",
      pompe: "Pompe C",
      buse: "Buse 1",
      transaction: "TRX004",
      volumeDistribue: "28.75",
      montantRempli: "28,894",
      prix: "1,005",
      volumeTotal: "1,366.50",
      montantTotal: "1,373,332",
      utilisateur: "Sophie K."
    },
    {
      id: 5,
      date: "15/01/2024 18:30",
      pompe: "Pompe B",
      buse: "Buse 3",
      transaction: "TRX005",
      volumeDistribue: "55.25",
      montantRempli: "55,526",
      prix: "1,005",
      volumeTotal: "1,421.75",
      montantTotal: "1,428,858",
      utilisateur: "Paul R."
    },
    {
      id: 6,
      date: "15/01/2024 19:15",
      pompe: "Pompe A",
      buse: "Buse 2",
      transaction: "TRX006",
      volumeDistribue: "40.80",
      montantRempli: "41,004",
      prix: "1,005",
      volumeTotal: "1,462.55",
      montantTotal: "1,469,862",
      utilisateur: "Lucie T."
    }
  ];

  // Calcul de la pagination
  const totalPages = Math.ceil(tableData.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentData = tableData.slice(startIndex, startIndex + rowsPerPage);

  // Fonctions de navigation
  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  const goToPreviousPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  const goToNextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  };

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

      {/* Tableau avec scrollbar personnalisée */}
      <div className="flex-1 overflow-auto custom-scrollbar">
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
            {currentData.map((row, index) => (
              <tr 
                key={row.id}
                className={`${index % 2 === 0 ? 'bg-[#202226]' : 'bg-[#25282d]'} hover:bg-[#2a2d32] transition-colors`}
              >
                <td className="p-2 border-b border-[#2c3235]">{row.id}</td>
                <td className="p-2 border-b border-[#2c3235]">{row.date}</td>
                <td className="p-2 border-b border-[#2c3235]">{row.pompe}</td>
                <td className="p-2 border-b border-[#2c3235]">{row.buse}</td>
                <td className="p-2 border-b border-[#2c3235]">{row.transaction}</td>
                <td className="p-2 border-b border-[#2c3235]">{row.volumeDistribue}</td>
                <td className="p-2 border-b border-[#2c3235]">{row.montantRempli}</td>
                <td className="p-2 border-b border-[#2c3235]">{row.prix}</td>
                <td className="p-2 border-b border-[#2c3235]">{row.volumeTotal}</td>
                <td className="p-2 border-b border-[#2c3235]">{row.montantTotal}</td>
                <td className="p-2 border-b border-[#2c3235]">{row.utilisateur}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center p-4 border-t border-[#2c3235] bg-[#202226]">
        <div className="text-xs text-[#8e9297]">
          Affichage de {startIndex + 1} à {Math.min(startIndex + rowsPerPage, tableData.length)} sur {tableData.length} transactions
        </div>
        
        <div className="flex items-center space-x-2">
          {/* Bouton précédent */}
          <button
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            className={`px-3 py-1.5 text-xs rounded-[1px] border border-[#2c3235] transition-colors ${
              currentPage === 1
                ? 'bg-[#2a2d32] text-[#5a5e64] cursor-not-allowed'
                : 'bg-[#2a2d32] text-[#8e9297] hover:bg-[#32353b] hover:text-[#58b3ea]'
            }`}
          >
            Précédent
          </button>

          {/* Numéros de page */}
          <div className="flex space-x-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                onClick={() => goToPage(page)}
                className={`w-8 h-8 text-xs rounded-[1px] border transition-colors ${
                  currentPage === page
                    ? 'bg-[#58b3ea] text-white border-[#58b3ea]'
                    : 'bg-[#2a2d32] text-[#8e9297] border-[#2c3235] hover:bg-[#32353b] hover:text-[#58b3ea]'
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          {/* Bouton suivant */}
          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className={`px-3 py-1.5 text-xs rounded-[1px] border border-[#2c3235] transition-colors ${
              currentPage === totalPages
                ? 'bg-[#2a2d32] text-[#5a5e64] cursor-not-allowed'
                : 'bg-[#2a2d32] text-[#8e9297] hover:bg-[#32353b] hover:text-[#58b3ea]'
            }`}
          >
            Suivant
          </button>
        </div>
      </div>

      
    </div>
  );
}