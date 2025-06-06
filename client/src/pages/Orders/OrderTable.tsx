// src/pages/Orders/OrderTable.tsx
import { useEffect, useState } from "react";
import { deleteOrder, getAllOrders } from "../../services/orderService";
import { getAllUsers } from "../../services/userService";
import { getAllProducts } from "../../services/productService";
import Swal from "sweetalert2";
import ActionButton from "../../components/common/ActionButton";

type Props = {
  setSelectedOrderId: (id: number) => void;
};

export default function OrderTable({ setSelectedOrderId }: Props) {
  const [orders, setOrders] = useState([]);
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);

  const loadData = async () => {
    const [oData, uData, pData] = await Promise.all([
      getAllOrders(),
      getAllUsers(),
      getAllProducts(),
    ]);
    setOrders(oData);
    setUsers(uData);
    setProducts(pData);
  };

  const getUserName = (id: number) => {
    const user = users.find((u: any) => u.user_id === id);
    return user ? user.name : `User ${id}`;
  };

  const getProductName = (id: number) => {
    const product = products.find((p: any) => p.product_id === id);
    return product ? product.name : `Product ${id}`;
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleDelete = async (id: number) => {
    const confirm = await Swal.fire({
      title: "Delete?",
      text: "This will delete the order.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes",
    });

    if (confirm.isConfirmed) {
      await deleteOrder(id);
      loadData();
      Swal.fire("Deleted", "Order deleted", "success");
    }
  };

  return (
    <table className="w-full border mt-6 bg-white shadow rounded">
      <thead className="bg-gray-200">
        <tr>
          <th className="p-2">ID</th>
          <th className="p-2">User</th>
          <th className="p-2">Product</th>
          <th className="p-2">Request Type</th>
          <th className="p-2">Status</th>
          <th className="p-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((o: any) => (
          <tr key={o.order_id} className="border-t">
            <td className="p-2">{o.order_id}</td>
            <td className="p-2">{getUserName(o.user_id)}</td>
            <td className="p-2">{getProductName(o.product_id)}</td>
            <td className="p-2">{o.request_type}</td>
            <td className="p-2">{o.status}</td>
            <td className="p-2 flex space-x-2">
              <ActionButton
                label="Edit"
                onClick={() => setSelectedOrderId(o.order_id)}
              />
              <ActionButton
                label="Delete"
                onClick={() => handleDelete(o.order_id)}
                color="red"
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
