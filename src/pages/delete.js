import React, { useState } from 'react';
import axios from 'axios';

function DeletePage() {
  const [id, setId] = useState('');

  const handleChange = (event) => {
    setId(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Call delete API with the ID
    console.log(`Deleting post with ID ${id}`);
    axios.delete(`http://localhost:8080/delete?id=${id}`)
      .then(() => {
        console.log(`Post with ID ${id} has been deleted`);
        // Reset the ID input field
        setId('');
      })
      .catch(error => {
        console.error(`Error deleting post with ID ${id}: ${error}`);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        ID:
        <input type="text" value={id} onChange={handleChange} />
      </label>
      <button type="submit">Delete</button>
    </form>
  );
}

export default DeletePage;

