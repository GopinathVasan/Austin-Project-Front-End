import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/default/read_users_users__get');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    }

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Username</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Role</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.role}</td>
              <td>{user.phone_number}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default UserList;