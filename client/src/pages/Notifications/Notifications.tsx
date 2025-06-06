// src/pages/Notifications/Notifications.tsx
import { useState } from "react";
import NotificationForm from "./NotificationForm";
import NotificationTable from "./NotificationTable";
import SectionTitle from "../../components/common/SectionTitle";

export default function Notifications() {
  const [selectedNotificationId, setSelectedNotificationId] = useState<
    number | null
  >(null);

  return (
    <div className="space-y-6">
      <SectionTitle title="Notification Management" />
      <NotificationForm
        selectedNotificationId={selectedNotificationId}
        setSelectedNotificationId={setSelectedNotificationId}
      />
      <NotificationTable
        setSelectedNotificationId={setSelectedNotificationId}
      />
    </div>
  );
}
