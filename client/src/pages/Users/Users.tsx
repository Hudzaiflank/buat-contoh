import { useState } from "react";
import UserForm from "./UserForm";
import UserTable from "./UserTable";
import SectionTitle from "../../components/common/SectionTitle";

export default function Users() {
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);

  return (
    <div className="space-y-6">
      <SectionTitle title="User Management" />
      <UserForm
        selectedUserId={selectedUserId}
        setSelectedUserId={setSelectedUserId}
      />
      <UserTable setSelectedUserId={setSelectedUserId} />
    </div>
  );
}
