// src/components/common/SectionTitle.tsx
type Props = {
  title: string;
};

export default function SectionTitle({ title }: Props) {
  return (
    <h1 className="text-2xl font-semibold mb-4 border-b pb-2 border-gray-300">
      {title}
    </h1>
  );
}
