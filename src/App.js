import React, { useState, useEffect } from 'react';
import "./App.css"

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/users');
        const data = await response.json();
        setUsers(data.users);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1 align="center">Dummy data</h1>
      <table>
      <thead>
        <tr>
          <th>Sno.</th>
          <th>Profile Pic</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Gender</th>
          <th>Email</th>
          <th>Username</th>
          <th>Domain</th>
          <th>IP</th>
          <th>University</th>
        </tr>
      </thead>

      <tbody>
        {users.map((user, index) => (
          <tr key={user.id}>
            <td>{index + 1}</td>
            <td><img src={user.image} alt={`Profile of ${user.firstName} ${user.lastName}`} style={{ width: '50px' }} /></td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.gender}</td>
            <td>{user.email}</td>
            <td>{user.username}</td>
            <td>{user.domain}</td>
            <td>{user.ip}</td>
            <td>{user.university}</td>
          </tr>
        ))}
      </tbody>

      </table>
    </div>
  );
}

export default App;
