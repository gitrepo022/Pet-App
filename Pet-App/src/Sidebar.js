import { Link } from 'react-router-dom';
import './App.css';

function Sidebar() {
  return (
   
    
   <div className='nav'>
         <nav><Link  to="/Create">Create</Link></nav>
         <nav><Link  to="/Retrieve">Retrieve</Link></nav>
   </div>
 
  );
}

export default Sidebar;