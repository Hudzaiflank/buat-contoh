// src/pages/Orders/Orders.tsx
import { useState } from "react";
import OrderForm from "./OrderForm";
import OrderTable from "./OrderTable";
import SectionTitle from "../../components/common/SectionTitle";

export default function Orders() {
  const [selectedOrderId, setSelectedOrderId] = useState<number | null>(null);

  return (
    <div className="space-y-6">
      <SectionTitle title="Order Management" />
      <OrderForm
        selectedOrderId={selectedOrderId}
        setSelectedOrderId={setSelectedOrderId}
      />
      <OrderTable setSelectedOrderId={setSelectedOrderId} />
    </div>
  );
}
