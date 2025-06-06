// src/pages/Orders/OrderForm.tsx
import { useEffect, useState } from "react";
import {
  addOrder,
  getOrderById,
  updateOrder,
} from "../../services/orderService";
import { getAllUsers } from "../../services/userService";
import { getAllProducts } from "../../services/productService";
import Swal from "sweetalert2";

type Props = {
  selectedOrderId: number | null;
  setSelectedOrderId: (id: number | null) => void;
};

export default function OrderForm({
  selectedOrderId,
  setSelectedOrderId,
}: Props) {
  const [userId, setUserId] = useState("");
  const [productId, setProductId] = useState("");
  const [requestType, setRequestType] = useState("");
  const [status, setStatus] = useState("Pending");

  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllUsers().then(setUsers);
    getAllProducts().then(setProducts);

    if (selectedOrderId) {
      getOrderById(selectedOrderId).then((data) => {
        setUserId(data.user_id);
        setProductId(data.product_id);
        setRequestType(data.request_type);
        setStatus(data.status);
      });
    }
  }, [selectedOrderId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedOrderId) {
      await updateOrder(selectedOrderId, {
        userId: +userId,
        productId: +productId,
        requestType,
        status,
      });
      Swal.fire("Updated", "Order updated successfully", "success");
    } else {
      await addOrder({
        userId: +userId,
        productId: +productId,
        requestType,
        status,
      });
      Swal.fire("Added", "Order added successfully", "success");
    }

    setUserId("");
    setProductId("");
    setRequestType("");
    setStatus("Pending");
    setSelectedOrderId(null);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <select
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        className="border p-2 w-full rounded"
        required
      >
        <option value="">Select User</option>
        {users.map((u: any) => (
          <option key={u.user_id} value={u.user_id}>
            {u.name}
          </option>
        ))}
      </select>

      <select
        value={productId}
        onChange={(e) => setProductId(e.target.value)}
        className="border p-2 w-full rounded"
        required
      >
        <option value="">Select Product</option>
        {products.map((p: any) => (
          <option key={p.product_id} value={p.product_id}>
            {p.name}
          </option>
        ))}
      </select>

      <input
        type="text"
        placeholder="Request Type"
        value={requestType}
        onChange={(e) => setRequestType(e.target.value)}
        className="border p-2 w-full rounded"
        required
      />

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="border p-2 w-full rounded"
      >
        <option value="Pending">Pending</option>
        <option value="In-progress">In-progress</option>
        <option value="Resolved">Resolved</option>
      </select>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        {selectedOrderId ? "Update Order" : "Add Order"}
      </button>
    </form>
  );
}
