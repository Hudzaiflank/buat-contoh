const BASE_URL = import.meta.env.VITE_COMPLAINT_SERVICE_GRAPHQL;

export async function getAllComplaints() {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        query {
          complaints {
            complaint_id
            user_id
            product_id
            complaint_text
            status
          }
        }
      `,
    }),
  });
  const { data } = await res.json();
  return data.complaints;
}

export async function getComplaintById(id: number) {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        query {
          complaint(id: ${id}) {
            complaint_id
            user_id
            product_id
            complaint_text
            status
          }
        }
      `,
    }),
  });
  const { data } = await res.json();
  return data.complaint;
}

export async function addComplaint(data: {
  userId: number;
  productId: number;
  complaintText: string;
  status: string;
}) {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        mutation {
          addComplaint(
            user_id: ${data.userId},
            product_id: ${data.productId},
            complaint_text: "${data.complaintText}",
            status: "${data.status}"
          ) {
            complaint_id
          }
        }
      `,
    }),
  });
  const { data: result } = await res.json();
  return result.addComplaint;
}

export async function updateComplaint(id: number, status: string) {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        mutation {
          updateComplaint(id: ${id}, status: "${status}") {
            complaint_id
          }
        }
      `,
    }),
  });
  const { data } = await res.json();
  return data.updateComplaint;
}

export async function deleteComplaint(id: number) {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        mutation {
          deleteComplaint(id: ${id}) {
            success
          }
        }
      `,
    }),
  });
  const { data } = await res.json();
  return data.deleteComplaint;
}
