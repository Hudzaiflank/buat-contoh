// src/pages/Notifications/NotificationForm.tsx
import { useEffect, useState } from "react";
import {
  addNotification,
  getNotificationById,
  updateNotification,
} from "../../services/notificationService";
import { getAllUsers } from "../../services/userService";
import { getAllComplaints } from "../../services/complaintService";
import Swal from "sweetalert2";

type Props = {
  selectedNotificationId: number | null;
  setSelectedNotificationId: (id: number | null) => void;
};

export default function NotificationForm({
  selectedNotificationId,
  setSelectedNotificationId,
}: Props) {
  const [userId, setUserId] = useState("");
  const [complaintId, setComplaintId] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("Sent");

  const [users, setUsers] = useState([]);
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    getAllUsers().then(setUsers);
    getAllComplaints().then(setComplaints);

    if (selectedNotificationId) {
      getNotificationById(selectedNotificationId).then((data) => {
        setUserId(data.user_id);
        setComplaintId(data.complaint_id);
        setMessage(data.message);
        setStatus(data.status);
      });
    }
  }, [selectedNotificationId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedNotificationId) {
      await updateNotification(selectedNotificationId, {
        userId: +userId,
        complaintId: +complaintId,
        message,
        status,
      });
      Swal.fire("Updated", "Notification updated successfully", "success");
    } else {
      await addNotification({
        userId: +userId,
        complaintId: +complaintId,
        message,
        status,
      });
      Swal.fire("Added", "Notification added successfully", "success");
    }

    setUserId("");
    setComplaintId("");
    setMessage("");
    setStatus("Sent");
    setSelectedNotificationId(null);
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
        value={complaintId}
        onChange={(e) => setComplaintId(e.target.value)}
        className="border p-2 w-full rounded"
        required
      >
        <option value="">Select Complaint</option>
        {complaints.map((c: any) => (
          <option key={c.complaint_id} value={c.complaint_id}>
            {c.complaint_text}
          </option>
        ))}
      </select>

      <input
        type="text"
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="border p-2 w-full rounded"
        required
      />

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="border p-2 w-full rounded"
      >
        <option value="Sent">Sent</option>
        <option value="Pending">Pending</option>

        <option value="Resolved">Resolved</option>
      </select>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        {selectedNotificationId ? "Update Notification" : "Add Notification"}
      </button>
    </form>
  );
}
