import React from 'react';
import "./main.css"
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <><nav>
          <ul>
              <li><a href="">Home</a></li>
              <li><a href="">Reports</a></li>
              <li><a href="#">Info</a></li>
              <li><a href="#">About</a></li>
          </ul>
      </nav>
      <div className='det'>
       <Link to="/get"><button className='getbt' size="small">Get</button></Link>
       <Link to="/post"><button className='getbt' size="small">Post Reports</button></Link>
       <Link to="/delete"><button className='getbt' size="small">Delete</button></Link>
       <Link to="/update"><button className='getbt' size="small">Update</button></Link>
      </div>
      
      
    </>
      
          
    
  );
}

export default Navbar;
