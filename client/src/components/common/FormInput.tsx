// src/components/common/FormInput.tsx
type Props = {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  required?: boolean;
};

export default function FormInput({
  label,
  name,
  value,
  onChange,
  type = "text",
  required = true,
}: Props) {
  return (
    <div className="mb-4">
      <label className="block font-medium mb-1">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full border border-gray-300 px-3 py-2 rounded"
      />
    </div>
  );
}
