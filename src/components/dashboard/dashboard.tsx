'use client';

import Header from '@/components/headers/header';
import Sidebar from '@/components/sidebars/sidebar';
import DashboardContent from '@/components/dashboard/dashboard-content';
import IdeContent from '@/components/dashboard/ide-content';
import IotContent from '@/components/dashboard/iot-content';
import SettingsContent from '@/components/dashboard/settings-content';
import AccountContent from '@/components/dashboard/account-content';

interface DashboardProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
}

export default function Dashboard({ activeTab, setActiveTab, theme, setTheme }: DashboardProps) {
  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardContent />;
      case 'ide':
        return <IdeContent />;
      case 'iot':
        return <IotContent />;
      case 'parametres':
        return <SettingsContent />;
      case 'compte':
        return <AccountContent />;
      default:
        return <DashboardContent />;
    }
  };

  return (
    <>
      <Header 
        title="DACMIR Station Fuel Manager"
        stationName="Petrolex Bonaberi"
        theme={theme}
        setTheme={setTheme}
      />
      
      <div className="flex flex-1 overflow-hidden">
        <Sidebar 
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        
        <main className="flex-1 bg-[#131416] overflow-hidden flex flex-col">
          {renderContent()}
        </main>
      </div>
    </>
  );
}