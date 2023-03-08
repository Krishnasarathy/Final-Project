import logo from './logo.svg';
import './App.css';
import Navbar from './Container/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PostPage from './pages/post';
import GetPage from './pages/get';
import DeletePage from './pages/delete';
import UpdatePage from './pages/update';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navbar/>}/>
      <Route path="/get" element={<GetPage/>}/>
      <Route path="/post" element={<PostPage/>}/>
      <Route path="/delete" element={<DeletePage/>}/>
      <Route path="/update" element={<UpdatePage/>}/>
      
      </Routes>
      </BrowserRouter>
      </>
      
  );
}

export default App;
