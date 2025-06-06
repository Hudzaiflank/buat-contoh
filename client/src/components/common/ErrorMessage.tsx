// src/components/common/ErrorMessage.tsx
type Props = {
  message: string;
};

export default function ErrorMessage({ message }: Props) {
  return (
    <div className="p-3 bg-red-100 text-red-700 border border-red-300 rounded">
      ⚠️ {message}
    </div>
  );
}
