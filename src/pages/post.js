import React, { useState } from 'react';
import "./Postpage.css"

function PostPage() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [roomno, setRoomno] = useState('');
  const [suffers, setSuffers] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const post = { id, name, roomno, suffers };
    try {
      const response = await fetch('http://localhost:8080/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      console.log('Post created successfully');
      // clear the form
      setId('');    
      setName('');
      setRoomno('');
      setSuffers('');
      setError(null);
    } catch (error) {
      console.error('Error creating post:', error);
      setError('Error creating post. Please try again later.');
    }
  };

  return (
    <div>
      <h1>Create a New Post</h1>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="id">ID:</label>
        <input type="text" id="id" value={id} onChange={(event) => setId(event.target.value)}/>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={(event) => setName(event.target.value)}/>
        <label htmlFor="roomNo">Room Number:</label>
        <input type="text" id="roomNo" value={roomno} onChange={(event) => setRoomno(event.target.value)}/>
        <label htmlFor="suffers">Suffers:</label>
        <input type="text" id="suffers" value={suffers} onChange={(event) => setSuffers(event.target.value)}/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default PostPage;

