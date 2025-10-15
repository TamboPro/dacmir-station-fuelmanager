'use client';

import { useState } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import Header from '@/components/headers/header';
import Sidebar from '@/components/sidebars/sidebar';
import { Fuel } from 'lucide-react';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function Home() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [currentView, setCurrentView] = useState('design');
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  return (
    <div className={`storm-interface ${theme === 'dark' ? 'dark' : 'light'}`}>
      <Header 
        title="DACMIR Station Fuel Manager"
        menuItems={['Fichier', 'Édition', 'Affichage', 'Outils', 'Aide']}
      />
      
      <div className="flex flex-1 overflow-hidden">
        <Sidebar 
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        
        <main className="flex-1 bg-[#131416] overflow-hidden flex flex-col">
          {activeTab === 'dashboard' && (
            <div className="flex-1 flex flex-col p-0.5 gap-[2px]">
              {/* Première ligne - 1/3 de l'espace */}
              <div className="h-1/3 grid grid-cols-1 md:grid-cols-3 gap-[2px]">
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
                <div className="bg-[#202226]  rounded-[1px] border border-[#2c3235] flex flex-col">
                  <div className="flex-1 relative min-h-[150px] bg-[#2a2d32] rounded-[1px] flex items-center justify-center">
      <Image
        src="/assets/images/camera1.png"
        alt="Vue caméra entrée"
        fill
        style={{ objectFit: "cover" }}
        className="rounded-[1px]"
      />
      {/* Overlay statut */}
      <div className="absolute top-2 right-2 flex items-center space-x-1">
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
        <span className="text-green-500 text-xs font-medium">En direct</span>
      </div>
    </div>
                </div>
                <div className="bg-[#202226] rounded-[1px] border border-[#2c3235] flex flex-col">
                  
                <div className="flex-1 relative min-h-[150px] bg-[#2a2d32] rounded-[1px] flex items-center justify-center">
                      <Image
                        src="/assets/images/camera2.png"
                        alt="Vue caméra station"
                        fill
                        style={{ objectFit: "cover" }}
                        className="rounded-[1px]"
                      />
                      {/* Overlay statut */}
                      <div className="absolute top-2 right-2 flex items-center space-x-1">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                        <span className="text-green-500 text-xs font-medium">En direct</span>
                      </div>
                    </div>


                </div>
              </div>

              {/* Deuxième ligne - 1/3 de l'espace */}
              <div className="h-1/3 grid grid-cols-1 md:grid-cols-3 gap-[2px]">
                {/* Card 4 divisé en 2 parties horizontales */}
                <div className="flex gap-[2px]">
                  {/* Partie 2 normale */}
                  <div className="flex-1 bg-transparent p-4 rounded-[1px] border border-[#2c3235] flex flex-col">
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="relative w-42 h-42"> {/* Taille ajustable selon vos besoins */}
                        <Image
                          src="/assets/images/Tank.png"
                          alt="Image de pompe à essence"
                          fill
                          style={{ objectFit: "contain" }}
                          priority
                        />
                      </div>
                    </div>
                  </div>
                  {/* Partie 1 avec 4 cards carrés */}                
                   
                    <div className="flex-1 grid grid-cols-2 gap-[2px]">
  {/* Carré 1 */}
  <div className="bg-[#2a2d32] rounded-[1px] flex flex-col p-3">
    {/* Header */}
    <div className="flex justify-between items-center mb-2">
      <span className="text-[#58b3ea] text-xs font-semibold">Essence1</span>
      <span className="text-[#8e9297] text-xs">75%</span>
    </div>
    
    {/* Center */}
    <div className="flex-1 flex flex-col justify-center items-center mb-2">
      <span className="text-[#8e9297] text-xs mb-1">Capacité en litre (L)</span>
      <span className="text-white text-lg font-semibold">15,000</span>
    </div>
    
    {/* Footer - Progressbar */}
    <div className="w-full bg-[#202226] rounded-full h-2">
      <div 
        className="bg-green-500 h-2 rounded-full transition-all duration-300"
        style={{ width: '75%' }}
      ></div>
    </div>
  </div>

  {/* Carré 2 */}
  <div className="bg-[#2a2d32] rounded-[1px] flex flex-col p-3">
    {/* Header */}
    <div className="flex justify-between items-center mb-2">
      <span className="text-[#58b3ea] text-xs font-semibold">Essence2</span>
      <span className="text-[#8e9297] text-xs">45%</span>
    </div>
    
    {/* Center */}
    <div className="flex-1 flex flex-col justify-center items-center mb-2">
      <span className="text-[#8e9297] text-xs mb-1">Capacité en litre (L)</span>
      <span className="text-white text-lg font-semibold">9,000</span>
    </div>
    
    {/* Footer - Progressbar */}
    <div className="w-full bg-[#202226] rounded-full h-2">
      <div 
        className="bg-red-500 h-2 rounded-full transition-all duration-300"
        style={{ width: '45%' }}
      ></div>
    </div>
  </div>

  {/* Carré 3 */}
  <div className="bg-[#2a2d32] rounded-[1px] flex flex-col p-3">
    {/* Header */}
    <div className="flex justify-between items-center mb-2">
      <span className="text-[#58b3ea] text-xs font-semibold">Petrole</span>
      <span className="text-[#8e9297] text-xs">60%</span>
    </div>
    
    {/* Center */}
    <div className="flex-1 flex flex-col justify-center items-center mb-2">
      <span className="text-[#8e9297] text-xs mb-1">Capacité en litre (L)</span>
      <span className="text-white text-lg font-semibold">12,000</span>
    </div>
    
    {/* Footer - Progressbar */}
    <div className="w-full bg-[#202226] rounded-full h-2">
      <div 
        className="bg-orange-500 h-2 rounded-full transition-all duration-300"
        style={{ width: '60%' }}
      ></div>
    </div>
  </div>

  {/* Carré 4 */}
  <div className="bg-[#2a2d32] rounded-[1px] flex flex-col p-3">
    {/* Header */}
    <div className="flex justify-between items-center mb-2">
      <span className="text-[#58b3ea] text-xs font-semibold">Gazoil</span>
      <span className="text-[#8e9297] text-xs">85%</span>
    </div>
    
    {/* Center */}
    <div className="flex-1 flex flex-col justify-center items-center mb-2">
      <span className="text-[#8e9297] text-xs mb-1">Capacité en litre (L)</span>
      <span className="text-white text-lg font-semibold">17,000</span>
    </div>
    
    {/* Footer - Progressbar */}
    <div className="w-full bg-[#202226] rounded-full h-2">
      <div 
        className="bg-green-500 h-2 rounded-full transition-all duration-300"
        style={{ width: '85%' }}
      ></div>
    </div>
  </div>
</div>
                 
                  
                </div>

                {/* Card 5 divisé en 2 parties horizontales */}
                <div className="flex gap-[2px]">
                  <div className="flex-1 bg-transparent p-4 rounded-[1px] border border-[#2c3235] flex flex-col items-center justify-center">
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="relative w-42 h-42"> {/* Taille ajustable selon vos besoins */}
                        <Image
                          src="/assets/images/Pompe_img.png"
                          alt="Image de pompe à essence"
                          fill
                          style={{ objectFit: "contain" }}
                          priority
                        />
                      </div>
                    </div>
                  </div>
                     <div className="flex-1 grid grid-cols-2 gap-[2px]">
  {/* Pompe 1 */}
  <div className="bg-[#2a2d32] rounded-[1px] flex flex-col p-3">
    {/* Header */}
    <div className="flex items-center justify-between mb-2">
      <div className="flex items-center space-x-2">
        <Fuel className="w-4 h-4 text-[#58b3ea]" />
        <span className="text-[#58b3ea] text-sm font-medium">Pompe 1</span>
      </div>
    </div>
    
    {/* Center */}
    <div className="flex-1 flex flex-col justify-center items-center mb-2">
      <span className="text-white text-lg font-semibold">1,245 L</span>
      <span className="text-[#8e9297] text-xs mt-1">Quantité servie</span>
    </div>
    
    {/* Footer */}
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
    {/* Header */}
    <div className="flex items-center justify-between mb-2">
      <div className="flex items-center space-x-2">
        <Fuel className="w-4 h-4 text-[#58b3ea]" />
        <span className="text-[#58b3ea] text-sm font-medium">Pompe 2</span>
      </div>
    </div>
    
    {/* Center */}
    <div className="flex-1 flex flex-col justify-center items-center mb-2">
      <span className="text-white text-lg font-semibold">892 L</span>
      <span className="text-[#8e9297] text-xs mt-1">Quantité servie</span>
    </div>
    
    {/* Footer */}
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
    {/* Header */}
    <div className="flex items-center justify-between mb-2">
      <div className="flex items-center space-x-2">
        <Fuel className="w-4 h-4 text-[#58b3ea]" />
        <span className="text-[#58b3ea] text-sm font-medium">Pompe 3</span>
      </div>
    </div>
    
    {/* Center */}
    <div className="flex-1 flex flex-col justify-center items-center mb-2">
      <span className="text-white text-lg font-semibold">2,156 L</span>
      <span className="text-[#8e9297] text-xs mt-1">Quantité servie</span>
    </div>
    
    {/* Footer */}
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
    {/* Header */}
    <div className="flex items-center justify-between mb-2">
      <div className="flex items-center space-x-2">
        <Fuel className="w-4 h-4 text-[#58b3ea]" />
        <span className="text-[#58b3ea] text-sm font-medium">Pompe 4</span>
      </div>
    </div>
    
    {/* Center */}
    <div className="flex-1 flex flex-col justify-center items-center mb-2">
      <span className="text-white text-lg font-semibold">1,734 L</span>
      <span className="text-[#8e9297] text-xs mt-1">Quantité servie</span>
    </div>
    
    {/* Footer */}
    <div className="flex items-center justify-between">
      <span className="text-[#8e9297] text-xs">Statut</span>
      <div className="flex items-center space-x-1">
        <div className="w-2 h-2 rounded-full bg-green-500"></div>
        <span className="text-green-500 text-xs font-medium">Active</span>
      </div>
    </div>
  </div>
</div>
                  
                </div>

                {/* Card 6 normal */}
                <div className="bg-[#202226] p-4 rounded-[1px] border border-[#2c3235] flex flex-col">

  
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
          <div key={index} className="flex flex-col items-center flex-1 mx-[2px]">
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
              </div>

              {/* Troisième ligne - 1/3 de l'espace */}
<div className="h-1/3 bg-[#202226] rounded-[1px] border border-[#2c3235] flex flex-col">
  {/* Header avec boutons et selectbox */}
  <div className="flex justify-between items-center p-4 border-b border-[#2c3235] bg-[#202226]">
    <div className="flex space-x-2">
      {/* Bouton CSV */}
      <button className="px-3 py-1.5 bg-[#2a2d32] text-[#8e9297] text-xs rounded-[1px] border border-[#2c3235] hover:bg-[#32353b] hover:text-[#58b3ea] transition-colors">
        CSV
      </button>
      
      {/* Bouton XSLX */}
      <button className="px-3 py-1.5 bg-[#2a2d32] text-[#8e9297] text-xs rounded-[1px] border border-[#2c3235] hover:bg-[#32353b] hover:text-[#58b3ea] transition-colors">
        XSLX
      </button>
      
      {/* Bouton COPY */}
      <button className="px-3 py-1.5 bg-[#2a2d32] text-[#8e9297] text-xs rounded-[1px] border border-[#2c3235] hover:bg-[#32353b] hover:text-[#58b3ea] transition-colors">
        COPY
      </button>
      
      {/* Bouton IMPRIMER */}
      <button className="px-3 py-1.5 bg-[#2a2d32] text-[#8e9297] text-xs rounded-[1px] border border-[#2c3235] hover:bg-[#32353b] hover:text-[#58b3ea] transition-colors">
        IMPRIMER
      </button>
    </div>
    
    {/* Selectbox à droite */}
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
            </div>
          )}
          
          {activeTab === 'ide' && (
            <div className="h-full flex items-center justify-center text-[#8e9297]">
              <div className="text-center">
                <h2 className="text-lg mb-2">Environnement de développement</h2>
                <p className="text-sm">Fonctionnalité IDE à implémenter</p>
              </div>
            </div>
          )}
          
          {activeTab === 'iot' && (
            <div className="h-full flex items-center justify-center text-[#8e9297]">
              <div className="text-center">
                <h2 className="text-lg mb-2">Plateforme IoT</h2>
                <p className="text-sm">Gestion des appareils IoT</p>
              </div>
            </div>
          )}
          
          {activeTab === 'parametres' && (
            <div className="h-full flex items-center justify-center text-[#8e9297]">
              <div className="text-center">
                <h2 className="text-lg mb-2">Paramètres</h2>
                <p className="text-sm">Configuration de l&apos;application</p>
              </div>
            </div>
          )}
          
          {activeTab === 'compte' && (
            <div className="h-full flex items-center justify-center text-[#8e9297]">
              <div className="text-center">
                <h2 className="text-lg mb-2">Compte utilisateur</h2>
                <p className="text-sm">Gestion du profil</p>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}