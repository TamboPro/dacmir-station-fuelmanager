import FirstRow from '@/components/dashboard/first-row';
import SecondRow from '@/components/dashboard/second-row';
import ThirdRow from '@/components/dashboard/third-row';

export default function DashboardContent() {
  return (
    <div className="flex-1 flex flex-col p-0.5 gap-[2px]">
      <FirstRow />
      <SecondRow />
      <ThirdRow />
    </div>
  );
}