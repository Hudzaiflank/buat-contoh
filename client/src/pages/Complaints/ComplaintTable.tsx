// src/pages/Complaints/ComplaintTable.tsx
import { useEffect, useState } from "react";
import {
  deleteComplaint,
  getAllComplaints,
} from "../../services/complaintService";
import { getAllUsers } from "../../services/userService";
import { getAllProducts } from "../../services/productService";
import Swal from "sweetalert2";
import ActionButton from "../../components/common/ActionButton";

type Props = {
  setSelectedComplaintId: (id: number) => void;
};

export default function ComplaintTable({ setSelectedComplaintId }: Props) {
  const [complaints, setComplaints] = useState([]);
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);

  const loadData = async () => {
    const [cData, uData, pData] = await Promise.all([
      getAllComplaints(),
      getAllUsers(),
      getAllProducts(),
    ]);
    setComplaints(cData);
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
      text: "This will delete the complaint permanently.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes",
    });

    if (confirm.isConfirmed) {
      await deleteComplaint(id);
      loadData();
      Swal.fire("Deleted", "Complaint deleted", "success");
    }
  };

  return (
    <table className="w-full border mt-6 bg-white shadow rounded">
      <thead>
        <tr className="bg-gray-200 text-left">
          <th className="p-2">ID</th>
          <th className="p-2">User</th>
          <th className="p-2">Product</th>
          <th className="p-2">Text</th>
          <th className="p-2">Status</th>
          <th className="p-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {complaints.map((c: any) => (
          <tr key={c.complaint_id} className="border-t">
            <td className="p-2">{c.complaint_id}</td>
            <td className="p-2">{getUserName(c.user_id)}</td>
            <td className="p-2">{getProductName(c.product_id)}</td>
            <td className="p-2">{c.complaint_text}</td>
            <td className="p-2">{c.status}</td>
            <td className="p-2 space-x-2 flex">
              <ActionButton
                label="Edit"
                onClick={() => setSelectedComplaintId(c.complaint_id)}
              />
              <ActionButton
                label="Delete"
                onClick={() => handleDelete(c.complaint_id)}
                color="red"
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
