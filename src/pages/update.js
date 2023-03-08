import React, { useState, useEffect } from 'react';
// import "./UpdatePage.css"

function UpdatePage() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [roomno, setRoomno] = useState('');
  const [suffers, setSuffers] = useState('');

  useEffect(() => {
    // Fetch the post data using the ID passed in the URL
    const postId = window.location.pathname.split('/').pop();
    fetch(`http://localhost:8080/update}`)
      .then(response => response.json())
      .then(data => {
        setId(data.id);
        setName(data.name);
        setRoomno(data.roomno);
        setSuffers(data.suffers);
      })
      .catch(error => {
        console.error('Error fetching post:', error);
        // show an error message here
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const post ={ id, name, roomno, suffers };
    fetch(`http://localhost:8080/update`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)
    }).then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        console.log('Post updated successfully');
        // redirect to the post details page here
      })
      .catch(error => {
        console.error('Error updating post:', error);
        // show an error message here
      });
  };

  return (
    <div>
      <h1>Update Report</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="id">ID:</label>
        <input type="text" id="id" value={id} onChange={(event) => setId(event.target.value)} />
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={(event) => setName(event.target.value)} />
        <label htmlFor="roomNo">Room Number:</label>
        <input type="text" id="roomNo" value={roomno} onChange={(event) => setRoomno(event.target.value)} />
        <label htmlFor="suffers">Suffers:</label>
        <input type="text" id="suffers" value={suffers} onChange={(event) => setSuffers(event.target.value)} />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default UpdatePage;
