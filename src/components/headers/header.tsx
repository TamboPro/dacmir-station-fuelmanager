// components/Header.tsx
import React from 'react';

interface HeaderProps {
  title: string;
  menuItems: string[];
}

const header: React.FC<HeaderProps> = ({ title, menuItems }) => {
  return (
    <header className="storm-header">
      <div className="flex items-center">
        <span className="font-semibold text-sm">{title}</span>
      </div>
      <div className="flex items-center space-x-3">
        {menuItems.map((item) => (
          <button key={item} className="text-xs hover:text-[#58b3ea]">
            {item}
          </button>
        ))}
      </div>
    </header>
  );
};

export default header;