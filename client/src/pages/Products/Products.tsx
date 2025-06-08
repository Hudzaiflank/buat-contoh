import { useState } from "react";
import ProductForm from "./ProductForm";
import ProductTable from "./ProductTable";
import SectionTitle from "../../components/common/SectionTitle";

export default function Products() {
  const [selectedProductId, setSelectedProductId] = useState<number | null>(
    null
  );
  const [refresh, setRefresh] = useState(0);

  const handleRefresh = () => setRefresh((r) => r + 1);

  return (
    <div className="space-y-6">
      <SectionTitle title="Product Management" />
      <ProductForm
        selectedProductId={selectedProductId}
        setSelectedProductId={setSelectedProductId}
        onProductChange={handleRefresh}
      />
      <ProductTable
        setSelectedProductId={setSelectedProductId}
        refreshTrigger={refresh}
      />
    </div>
  );
}
