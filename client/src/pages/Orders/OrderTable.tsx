// src/pages/Orders/OrderTable.tsx
import { useEffect, useState } from "react";
import { deleteOrder, getAllOrders } from "../../services/orderService";
import { getAllUsers } from "../../services/userService";
import { getAllProducts } from "../../services/productService";
import Swal from "sweetalert2";
import ActionButton from "../../components/common/ActionButton";

type Props = {
  setSelectedOrderId: (id: number) => void;
  refreshTrigger: number;
};

export default function OrderTable({
  setSelectedOrderId,
  refreshTrigger,
}: Props) {
  const [orders, setOrders] = useState([]);
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);

  const loadData = async () => {
    const [orderData, userData, productData] = await Promise.all([
      getAllOrders(),
      getAllUsers(),
      getAllProducts(),
    ]);
    console.log("ORDER - Orders data from API:", orderData);
    console.log("ORDER - Users data from API:", userData);
    console.log("ORDER - Products data from API:", productData);

    // Memastikan data memiliki format yang benar
    if (Array.isArray(orderData)) {
      setOrders(orderData);
    } else {
      console.error("Order data is not an array:", orderData);
      setOrders([]);
    }

    if (Array.isArray(userData)) {
      setUsers(userData);
    } else {
      console.error("User data is not an array:", userData);
      setUsers([]);
    }

    if (Array.isArray(productData)) {
      setProducts(productData);
    } else {
      console.error("Product data is not an array:", productData);
      setProducts([]);
    }
  };

  const getUserName = (id: number) => {
    console.log(`Looking for user with ID: ${id}, Type: ${typeof id}`);
    console.log("Available users:", users);

    // Jika id adalah string, konversikan ke number
    const userId = typeof id === "string" ? parseInt(id) : id;

    // Coba dengan dua cara: strict equality dan loose equality
    const userWithStrict = users.find((u: any) => u.user_id === userId);
    const userWithLoose = users.find((u: any) => u.user_id == userId);

    console.log("Found user with strict equality:", userWithStrict);
    console.log("Found user with loose equality:", userWithLoose);

    // Gunakan hasil yang ditemukan
    const user = userWithStrict || userWithLoose;
    return user ? user.name : `User ${id}`;
  };

  const getProductName = (id: number) => {
    console.log(`Looking for product with ID: ${id}, Type: ${typeof id}`);
    console.log("Available products:", products);

    // Jika id adalah string, konversikan ke number
    const productId = typeof id === "string" ? parseInt(id) : id;

    // Coba dengan dua cara: strict equality dan loose equality
    const productWithStrict = products.find(
      (p: any) => p.product_id === productId
    );
    const productWithLoose = products.find(
      (p: any) => p.product_id == productId
    );

    console.log("Found product with strict equality:", productWithStrict);
    console.log("Found product with loose equality:", productWithLoose);

    // Gunakan hasil yang ditemukan
    const product = productWithStrict || productWithLoose;
    return product ? product.name : `Product ${id}`;
  };

  useEffect(() => {
    loadData();
  }, [refreshTrigger]);

  // Tambahkan effect untuk melihat perubahan state
  useEffect(() => {
    console.log("ORDER - Updated state - Orders:", orders);
    console.log("ORDER - Updated state - Users:", users);
    console.log("ORDER - Updated state - Products:", products);
  }, [orders, users, products]);

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
      <thead className="bg-gray-200 text-left">
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
        {orders.map((o: any) => {
          console.log("Rendering order:", o);
          return (
            <tr key={o.order_id} className="border-t">
              <td className="p-2">{o.order_id}</td>
              <td className="p-2">{getUserName(o.user_id)}</td>
              <td className="p-2">{getProductName(o.product_id)}</td>
              <td className="p-2">{o.request_type}</td>
              <td className="p-2">{o.status}</td>
              <td className="p-2 space-x-2 flex">
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
          );
        })}
      </tbody>
    </table>
  );
}
