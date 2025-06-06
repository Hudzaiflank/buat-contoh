import { useState } from "react";
import ProductForm from "./ProductForm";
import ProductTable from "./ProductTable";
import SectionTitle from "../../components/common/SectionTitle";

export default function Products() {
  const [selectedProductId, setSelectedProductId] = useState<number | null>(
    null
  );

  return (
    <div className="space-y-6">
      <SectionTitle title="Product Management" />
      <ProductForm
        selectedProductId={selectedProductId}
        setSelectedProductId={setSelectedProductId}
      />
      <ProductTable setSelectedProductId={setSelectedProductId} />
    </div>
  );
}
