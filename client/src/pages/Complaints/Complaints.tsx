// src/pages/Complaints/Complaints.tsx
import { useState } from "react";
import ComplaintForm from "./ComplaintForm";
import ComplaintTable from "./ComplaintTable";
import SectionTitle from "../../components/common/SectionTitle";

export default function Complaints() {
  const [selectedComplaintId, setSelectedComplaintId] = useState<number | null>(
    null
  );

  return (
    <div className="space-y-6">
      <SectionTitle title="Complaint Management" />
      <ComplaintForm
        selectedComplaintId={selectedComplaintId}
        setSelectedComplaintId={setSelectedComplaintId}
      />
      <ComplaintTable setSelectedComplaintId={setSelectedComplaintId} />
    </div>
  );
}
