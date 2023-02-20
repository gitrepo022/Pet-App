import './App.css';
import { API_url } from './api';
import axios from 'axios';
import {useState } from 'react';


function RetrievePage() {
    const [datas, setData] = useState([]);
    const[id,setId] =useState('');

  

    const readData = async (id) => {
        if(!id) return alert("Please Fill All details");
        const response = await axios.get(API_url+"/"+id);
        console.log(response);
        setData(response.data)
    }
  


  return (
   
    
       <div className="main">
            
            <h1>Retrieve</h1>
            <div className='get'>
            <label>Id </label>

                <input type="text" name="id" value={id} 
                onChange={(event)=>{event.preventDefault();
                setId(event.target.value)}}
                
                /><br></br>
                <div className="btn">
                <button onClick={()=>readData(id)}>Retrieve data</button></div>

            <span>
                <ul >
                    <li>Id: {datas.id}</li>
                    <li>Name: {datas.name}</li>
                </ul>
            </span></div>
        </div>
        

  );
}

export default RetrievePage;