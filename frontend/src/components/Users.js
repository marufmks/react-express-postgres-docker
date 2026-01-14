import { useEffect, useState } from "react";
import axios from "axios";

const API = `${process.env.REACT_APP_API_URL || "http://localhost:5001"}/users`;

function Users() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ name: "", email: "", age: "" });

  const fetchUsers = async () => {
    const res = await axios.get(API);
    setUsers(res.data);
  };

  const createUser = async (e) => {
    e.preventDefault();
    await axios.post(API, form);
    setForm({ name: "", email: "", age: "" });
    fetchUsers();
  };

  const deleteUser = async (id) => {
    await axios.delete(`${API}/${id}`);
    fetchUsers();
  };

  const updateUser = async (id) => {
    const newName = prompt("Enter new name:");
    const newEmail = prompt("Enter new email:");
    const newAge = prompt("Enter new age:");
    await axios.put(`${API}/${id}`, {
      name: newName,
      email: newEmail,
      age: newAge,
    });
    fetchUsers();
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <form onSubmit={createUser} style={{ marginBottom: "20px" }}>
        <input
          placeholder="name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />{" "}
        <input
          placeholder="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />{" "}
        <input
          placeholder="age"
          value={form.age}
          onChange={(e) => setForm({ ...form, age: e.target.value })}
        />{" "}
        <button type="submit">Create</button>
      </form>

      {users.map((u) => (
        <div key={u.id} style={{ marginBottom: "12px" }}>
          {u.name} — {u.email} — {u.age} {" "}
          <button onClick={() => updateUser(u.id)}>Edit</button>{" "}
          <button onClick={() => deleteUser(u.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default Users;
