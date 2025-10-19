// components/ui/CustomCheckbox.tsx
interface CustomCheckboxProps {
  id: string;
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export function CustomCheckbox({ id, label, checked, onChange }: CustomCheckboxProps) {
  return (
    <div className="flex items-center">
      <input
        id={id}
        name={id}
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-blue-300 rounded"
      />
      <label htmlFor={id} className="ml-2 block text-sm text-blue-200">
        {label}
      </label>
    </div>
  );
}