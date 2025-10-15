// components/Sidebar.tsx
import React from 'react';
import { LayoutDashboard, Code2, Cpu, Settings, User } from 'lucide-react';

interface SidebarItem {
  id: string;
  icon: React.ReactNode;
  title: string;
}

interface SidebarProps {
  activeTab: string;
  setActiveTab: (id: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  // Items principaux de la sidebar
  const mainItems: SidebarItem[] = [
    { id: 'dashboard', icon: <LayoutDashboard size={18} />, title: 'Dashboard' },
    { id: 'ide', icon: <Code2 size={18} />, title: 'IDE' },
    { id: 'iot', icon: <Cpu size={18} />, title: 'IoT' }
  ];

  // Items du footer de la sidebar
  const footerItems: SidebarItem[] = [
    { id: 'parametres', icon: <Settings size={18} />, title: 'Paramètres' },
    { id: 'compte', icon: <User size={18} />, title: 'Compte' }
  ];

  return (
    <aside className="storm-sidebar flex flex-col justify-between">
      {/* Section principale */}
      <div>
        {mainItems.map((item) => (
          <button
            key={item.id}
            className={`sidebar-button ${
              activeTab === item.id ? 'sidebar-button-active' : 'sidebar-button-inactive'
            }`}
            onClick={() => setActiveTab(item.id)}
            title={item.title}
          >
            {item.icon}
          </button>
        ))}
      </div>
      
      {/* Footer avec paramètres et compte */}
      <div className="border-t border-[#2c3235]">
        {footerItems.map((item) => (
          <button
            key={item.id}
            className={`sidebar-button ${
              activeTab === item.id ? 'sidebar-button-active' : 'sidebar-button-inactive'
            }`}
            onClick={() => setActiveTab(item.id)}
            title={item.title}
          >
            {item.icon}
          </button>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;