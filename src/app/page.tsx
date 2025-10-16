'use client';

import { useState } from 'react';
import Dashboard from '@/components/dashboard/dashboard';

export default function Home() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  return (
    <div className={`storm-interface ${theme === 'dark' ? 'dark' : 'light'}`}>
      <Dashboard activeTab={activeTab} setActiveTab={setActiveTab} theme={theme} setTheme={setTheme} />
    </div>
  );
}