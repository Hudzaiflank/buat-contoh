import { useEffect, useState } from "react";
import {
  deleteNotification,
  getAllNotifications,
} from "../../services/notificationService";
import { getAllUsers } from "../../services/userService";
import { getAllComplaints } from "../../services/complaintService";
import Swal from "sweetalert2";
import ActionButton from "../../components/common/ActionButton";

type Props = {
  setSelectedNotificationId: (id: number) => void;
  refreshTrigger: number;
};

export default function NotificationTable({
  setSelectedNotificationId,
  refreshTrigger,
}: Props) {
  const [notifications, setNotifications] = useState([]);
  const [users, setUsers] = useState([]);
  const [complaints, setComplaints] = useState([]);

  const loadData = async () => {
    const [nData, uData, cData] = await Promise.all([
      getAllNotifications(),
      getAllUsers(),
      getAllComplaints(),
    ]);
    setNotifications(nData);
    setUsers(uData);
    setComplaints(cData);
  };

  useEffect(() => {
    loadData();
  }, [refreshTrigger]);

  const handleDelete = async (id: number) => {
    const confirm = await Swal.fire({
      title: "Delete?",
      text: "This will delete the notification.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes",
    });

    if (confirm.isConfirmed) {
      await deleteNotification(id);
      loadData();
      Swal.fire("Deleted", "Notification deleted", "success");
    }
  };

  const getUserName = (id: number) => {
    const user = users.find((u: any) => u.user_id === id);
    return user ? user.name : `User ${id}`;
  };

  const getComplaintText = (id: number) => {
    const complaint = complaints.find((c: any) => c.complaint_id === id);
    return complaint ? complaint.complaint_text : `Complaint ${id}`;
  };

  return (
    <table className="w-full border mt-6 bg-white shadow rounded">
      <thead className="bg-gray-200">
        <tr>
          <th className="p-2">ID</th>
          <th className="p-2">User</th>
          <th className="p-2">Complaint</th>
          <th className="p-2">Message</th>
          <th className="p-2">Status</th>
          <th className="p-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {notifications.map((n: any) => (
          <tr key={n.notification_id} className="border-t">
            <td className="p-2">{n.notification_id}</td>
            <td className="p-2">{getUserName(n.user_id)}</td>
            <td className="p-2">{getComplaintText(n.complaint_id)}</td>
            <td className="p-2">{n.message}</td>
            <td className="p-2">{n.status}</td>
            <td className="p-2 flex space-x-2">
              <ActionButton
                label="Edit"
                onClick={() => setSelectedNotificationId(n.notification_id)}
              />
              <ActionButton
                label="Delete"
                onClick={() => handleDelete(n.notification_id)}
                color="red"
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
