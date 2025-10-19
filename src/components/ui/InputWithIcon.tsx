// components/ui/InputWithIcon.tsx
import { LucideIcon, Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';

interface InputWithIconProps {
  icon: LucideIcon;
  type: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  autoComplete?: string;
  showPasswordToggle?: boolean;
}

export function InputWithIcon({
  icon: Icon,
  type,
  placeholder,
  value,
  onChange,
  required = false,
  autoComplete,
  showPasswordToggle = false
}: InputWithIconProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Icon className="h-5 w-5 text-blue-300" />
      </div>
      <input
        type={showPasswordToggle && showPassword ? "text" : type}
        autoComplete={autoComplete}
        required={required}
        className="block w-full pl-10 pr-10 py-3 border border-blue-500/30 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-[#1C4668]/80 text-white placeholder-blue-300 text-sm transition-all duration-200"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {showPasswordToggle && (
        <button
          type="button"
          className="absolute inset-y-0 right-0 pr-3 flex items-center hover:text-blue-200 transition-colors"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <EyeOff className="h-5 w-5 text-blue-300" />
          ) : (
            <Eye className="h-5 w-5 text-blue-300" />
          )}
        </button>
      )}
    </div>
  );
}