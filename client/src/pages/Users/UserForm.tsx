import { useEffect, useState } from "react";
import { addUser, getUserById, updateUser } from "../../services/userService";
import Swal from "sweetalert2";

interface Props {
  selectedUserId: number | null;
  setSelectedUserId: (id: number | null) => void;
}

export default function UserForm({ selectedUserId, setSelectedUserId }: Props) {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  useEffect(() => {
    if (selectedUserId) {
      getUserById(selectedUserId).then((data) =>
        setForm({ name: data.name, email: data.email, password: "" })
      );
    }
  }, [selectedUserId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (selectedUserId) {
        await updateUser(selectedUserId, {
          name: form.name,
          email: form.email,
        });
        Swal.fire("Success", "User updated successfully", "success");
      } else {
        await addUser(form);
        Swal.fire("Success", "User added successfully", "success");
      }
      setForm({ name: "", email: "", password: "" });
      setSelectedUserId(null);
      window.location.reload();
    } catch (err) {
      Swal.fire("Error", "Operation failed", "error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-white p-4 rounded shadow"
    >
      <div>
        <label>Name:</label>
        <input
          name="name"
          onChange={handleChange}
          value={form.name}
          className="w-full border px-3 py-2 rounded"
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          name="email"
          onChange={handleChange}
          value={form.email}
          type="email"
          className="w-full border px-3 py-2 rounded"
          required
        />
      </div>
      {!selectedUserId && (
        <div>
          <label>Password:</label>
          <input
            name="password"
            onChange={handleChange}
            value={form.password}
            type="password"
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>
      )}
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {selectedUserId ? "Update User" : "Add User"}
      </button>
    </form>
  );
}
