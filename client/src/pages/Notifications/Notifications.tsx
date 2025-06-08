import { useState } from "react";
import NotificationForm from "./NotificationForm";
import NotificationTable from "./NotificationTable";
import SectionTitle from "../../components/common/SectionTitle";

export default function Notifications() {
  const [selectedNotificationId, setSelectedNotificationId] = useState<
    number | null
  >(null);
  const [refresh, setRefresh] = useState(0);
  const handleRefresh = () => setRefresh((r) => r + 1);

  return (
    <div className="space-y-6">
      <SectionTitle title="Notification Management" />
      <NotificationForm
        selectedNotificationId={selectedNotificationId}
        setSelectedNotificationId={setSelectedNotificationId}
        onNotificationChange={handleRefresh}
      />
      <NotificationTable
        setSelectedNotificationId={setSelectedNotificationId}
        refreshTrigger={refresh}
      />
    </div>
  );
}
