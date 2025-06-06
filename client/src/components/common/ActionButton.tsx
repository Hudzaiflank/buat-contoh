// src/components/common/ActionButton.tsx
type Props = {
  label: string;
  onClick: () => void;
  color?: "yellow" | "red";
};

export default function ActionButton({
  label,
  onClick,
  color = "yellow",
}: Props) {
  const colorClass =
    color === "red"
      ? "bg-red-500 hover:bg-red-600"
      : "bg-yellow-500 hover:bg-yellow-600";

  return (
    <button
      onClick={onClick}
      className={`${colorClass} text-white px-3 py-1 rounded`}
    >
      {label}
    </button>
  );
}
