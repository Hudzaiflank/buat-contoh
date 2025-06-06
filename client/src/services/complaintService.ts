// src/services/complaintService.ts
const baseUrl = import.meta.env.VITE_COMPLAINT_SERVICE;

export async function getAllComplaints() {
  const res = await fetch(baseUrl);
  return res.json();
}

export async function getComplaintById(id: number) {
  const res = await fetch(`${baseUrl}/${id}`);
  return res.json();
}

export async function addComplaint(data: {
  userId: number;
  productId: number;
  complaintText: string;
  status: string;
}) {
  const res = await fetch(baseUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function updateComplaint(id: number, status: string) {
  const res = await fetch(`${baseUrl}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status }),
  });
  return res.json();
}

export async function deleteComplaint(id: number) {
  const res = await fetch(`${baseUrl}/${id}`, {
    method: "DELETE",
  });
  return res.json();
}
