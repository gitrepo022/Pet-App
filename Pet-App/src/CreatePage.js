import './App.css';
import { API_url } from './api';
import axios from 'axios';
import { useState } from 'react';
import {  useNavigate } from 'react-router-dom';


function CreatePage() {
    const Navigate =useNavigate();
    const[id,setId] =useState('');
  
    const[name,setName] =useState('');
   
    

    const postData= async ()=>{
        
    if(!id  || !name ) return alert("Please Fill All details");
        
       await axios.post(API_url,{
          id,
          name,
        })
       
        Navigate('/Retrieve')
    }
  return (
   
    <div className="main" style={{marginTop:"100px",}}>
          
    <h1>Create</h1>
        <div className='container'>
        <label>Id </label>
        <input type="text" name="id" value={id} 
        onChange={(event)=>setId(event.target.value)}
        />
        <br></br>
        
        <label>name: </label>
        <input type="text" name="name" value={name} 
        onChange={(event)=>setName(event.target.value)}

        /></div>
        <br></br>
        <div className="btn">
        <button onClick={postData} > Add User</button></div><br></br>



</div>
  );
}

export default CreatePage;