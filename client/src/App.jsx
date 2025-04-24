import React from "react";

const App = () => {
  return (
    <div>
      <h1 id="heading">My User App</h1>
      <h2>List of Users</h2>
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
              <input type="email" name="email" id="email" />
            </td>
            <td>
              <input type="text" name="name" id="name" />
            </td>
            <td>
              <select name="role" id="role">
                <option value="Student">Student</option>
                <option value="Teacher">Teacher</option>
                <option value="Admin">Admin</option>
              </select>
            </td>
            <td>
              <button>Add User</button>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>tanisha@gmail.com</td>
            <td>Tanisha Sain</td>
            <td>Admin</td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>rrj@gmail.com</td>
            <td>Riya Ranjan jha</td>
            <td>Student</td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>kali@gmail.com</td>
            <td>Shtakshi Garg</td>
            <td>Teacher</td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default App;
