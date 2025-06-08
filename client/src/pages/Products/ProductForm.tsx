import { useEffect, useState } from "react";
import {
  addProduct,
  getProductById,
  updateProduct,
} from "../../services/productService";
import Swal from "sweetalert2";

interface Props {
  selectedProductId: number | null;
  setSelectedProductId: (id: number | null) => void;
  onProductChange: () => void;
}

export default function ProductForm({
  selectedProductId,
  setSelectedProductId,
  onProductChange,
}: Props) {
  const [form, setForm] = useState({
    name: "",
    type: "",
    location: "",
    status: "",
    description: "",
  });

  useEffect(() => {
    if (selectedProductId) {
      getProductById(selectedProductId).then((data) =>
        setForm({
          name: data.name,
          type: data.type,
          location: data.location,
          status: data.status,
          description: data.description,
        })
      );
    }
  }, [selectedProductId]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (selectedProductId) {
        await updateProduct(selectedProductId, form);
        Swal.fire("Success", "Product updated successfully", "success");
      } else {
        await addProduct(form);
        Swal.fire("Success", "Product added successfully", "success");
      }
      setForm({
        name: "",
        type: "",
        location: "",
        status: "",
        description: "",
      });
      setSelectedProductId(null);
      onProductChange(); // ganti window reload
    } catch (err) {
      Swal.fire("Error", "Operation failed", "error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-white p-4 rounded shadow"
    >
      <div>
        <label>Name:</label>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          required
        />
      </div>
      <div>
        <label>Type:</label>
        <input
          name="type"
          value={form.type}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          required
        />
      </div>
      <div>
        <label>Location:</label>
        <input
          name="location"
          value={form.location}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          required
        />
      </div>
      <div>
        <label>Status:</label>
        <input
          name="status"
          value={form.status}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          required
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {selectedProductId ? "Update Product" : "Add Product"}
      </button>
    </form>
  );
}
