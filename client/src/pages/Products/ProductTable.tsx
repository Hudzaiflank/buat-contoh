// src/pages/Products/ProductTable.tsx
import { useEffect, useState } from "react";
import { getAllProducts, deleteProduct } from "../../services/productService";
import Swal from "sweetalert2";
import ActionButton from "../../components/common/ActionButton";

type Props = {
  setSelectedProductId: (id: number) => void;
};

export default function ProductTable({ setSelectedProductId }: Props) {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const data = await getAllProducts();
      setProducts(data);
    } catch (err) {
      console.error("Error fetching products", err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id: number) => {
    const confirm = await Swal.fire({
      title: "Delete?",
      text: "This will delete the product permanently.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes",
    });

    if (confirm.isConfirmed) {
      await deleteProduct(id);
      fetchProducts();
      Swal.fire("Deleted", "Product deleted", "success");
    }
  };

  return (
    <div className="overflow-x-auto bg-white p-4 rounded shadow">
      <table className="table-auto w-full border">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Type</th>
            <th className="px-4 py-2">Location</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Description</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p: any) => (
            <tr key={p.product_id}>
              <td className="border px-4 py-2">{p.product_id}</td>
              <td className="border px-4 py-2">{p.name}</td>
              <td className="border px-4 py-2">{p.type}</td>
              <td className="border px-4 py-2">{p.location}</td>
              <td className="border px-4 py-2">{p.status}</td>
              <td className="border px-4 py-2">{p.description}</td>
              <td className="border px-4 py-2 space-x-2">
                <ActionButton
                  label="Edit"
                  onClick={() => setSelectedProductId(p.product_id)}
                />
                <ActionButton
                  label="Delete"
                  onClick={() => handleDelete(p.product_id)}
                  color="red"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
