import TankSection from '@/components/dashboard/tank-section';
import PumpSection from '@/components/dashboard/pump-section';
import SalesChart from '@/components/charts/sales-chart';

export default function SecondRow() {
  return (
    <div className="h-1/3 grid grid-cols-1 md:grid-cols-3 gap-[2px]">
      <TankSection />
      <PumpSection />
      <SalesChart />
    </div>
  );
}