import { useState } from "react";
import ComplaintForm from "./ComplaintForm";
import ComplaintTable from "./ComplaintTable";
import SectionTitle from "../../components/common/SectionTitle";

export default function Complaints() {
  const [selectedComplaintId, setSelectedComplaintId] = useState<number | null>(
    null
  );
  const [refresh, setRefresh] = useState(0);
  const handleRefresh = () => setRefresh((r) => r + 1);

  return (
    <div className="space-y-6">
      <SectionTitle title="Complaint Management" />
      <ComplaintForm
        selectedComplaintId={selectedComplaintId}
        setSelectedComplaintId={setSelectedComplaintId}
        onComplaintChange={handleRefresh}
      />
      <ComplaintTable
        setSelectedComplaintId={setSelectedComplaintId}
        refreshTrigger={refresh}
      />
    </div>
  );
}
