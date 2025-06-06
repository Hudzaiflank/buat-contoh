// src/pages/Complaints/ComplaintForm.tsx
import { useEffect, useState } from "react";
import {
  addComplaint,
  getComplaintById,
  updateComplaint,
} from "../../services/complaintService";
import { getAllUsers } from "../../services/userService";
import { getAllProducts } from "../../services/productService";
import Swal from "sweetalert2";

type Props = {
  selectedComplaintId: number | null;
  setSelectedComplaintId: (id: number | null) => void;
};

export default function ComplaintForm({
  selectedComplaintId,
  setSelectedComplaintId,
}: Props) {
  const [userId, setUserId] = useState("");
  const [productId, setProductId] = useState("");
  const [complaintText, setComplaintText] = useState("");
  const [status, setStatus] = useState("Pending");

  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllUsers().then(setUsers);
    getAllProducts().then(setProducts);

    if (selectedComplaintId) {
      getComplaintById(selectedComplaintId).then((data) => {
        setUserId(data.user_id);
        setProductId(data.product_id);
        setComplaintText(data.complaint_text);
        setStatus(data.status);
      });
    }
  }, [selectedComplaintId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedComplaintId) {
      await updateComplaint(selectedComplaintId, status);
      Swal.fire("Updated", "Complaint updated successfully", "success");
    } else {
      await addComplaint({
        userId: +userId,
        productId: +productId,
        complaintText,
        status,
      });
      Swal.fire("Added", "Complaint added successfully", "success");
    }

    setUserId("");
    setProductId("");
    setComplaintText("");
    setStatus("Pending");
    setSelectedComplaintId(null);
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
        placeholder="Complaint Text"
        value={complaintText}
        onChange={(e) => setComplaintText(e.target.value)}
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
        {selectedComplaintId ? "Update Complaint" : "Add Complaint"}
      </button>
    </form>
  );
}
