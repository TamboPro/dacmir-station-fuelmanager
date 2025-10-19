// components/ui/FormHeader.tsx
interface FormHeaderProps {
  title: string;
  subtitle: string;
  icon?: React.ReactNode;
}

export function FormHeader({ title, subtitle, icon }: FormHeaderProps) {
  return (
    <div className="text-center">
      {icon && (
        <div className="flex justify-center mb-4">
          <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm">
            {icon}
          </div>
        </div>
      )}
      <h1 className="text-2xl font-bold text-white mb-2">{title}</h1>
      <p className="text-blue-200">{subtitle}</p>
    </div>
  );
}