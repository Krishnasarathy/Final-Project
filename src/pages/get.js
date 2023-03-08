import React, { useState, useEffect } from 'react';
import "./get.css"
function GetPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/get')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h1>Reports</h1>
      <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Room Number</th>
          <th>Suffers</th>
        </tr>
      </thead>
      <tbody>
        {posts.map((post) => (
          <tr key={post.id}>
            <td>{post.id}</td>
            <td>{post.name}</td>
            <td>{post.roomno}</td>
            <td>{post.suffers}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}

export default GetPage;
