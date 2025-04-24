import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  const [user, setUser] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("https://userapp6.onrender.com/users");
      setUser(response.data);
      // console.log(user);
    };
    getData();
  }, [user]);

  const handleSubmit = async () => {
    setRole(role.toLowerCase());
    let password = "some-random-password";
    const newUser = { name, email, password, role };
    const response = await axios.post("https://userapp6.onrender.com/adduser", newUser);
    // console.log(response);
  };

  return (
    <div>
      <h1 id="heading">My User App</h1>
      <h2 id="sub-heading">List of Users</h2>
      <div className="container">
        <table>
          <thead>
            <td>Sr. No</td>
            <td>User Email</td>
            <td>User Name</td>
            <td>User Role</td>
            <td>Action</td>
          </thead>
          <tr>
            <td>#</td>
            <td>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                id="email"
              />
            </td>
            <td>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                name="name"
                id="name"
              />
            </td>
            <td>
              <select
                onChange={(e) => setRole(e.target.value)}
                name="role"
                id="role"
              >
                <option value="Student">Student</option>
                <option value="Teacher">Teacher</option>
                <option value="Admin">Admin</option>
              </select>
            </td>
            <td>
              <button onClick={handleSubmit}>Add User</button>
            </td>
          </tr>
          {user.map((el, idx) => (
            <tr>
              <td>{idx + 1}</td>
              <td>{el.email}</td>
              <td>{el.name}</td>
              <td>{el.role}</td>
              <td>
                <button id="edit-btn">Edit</button>
                <button id="delete-btn">Delete</button>
              </td>
            </tr>
          ))}
        </table>
      </div>
      <footer>Designed & Developed by RRJ</footer>
    </div>
  );
};

export default App;
