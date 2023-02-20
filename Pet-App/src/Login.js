

import { useFormik } from 'formik';
import React from 'react';
import {useNavigate } from 'react-router-dom';
import './App.css';



export default function Login() {
   
    

    const navigate =useNavigate ();



    const validate= (values) => {
        const errors={} ;
       
        if (!values.email) {
            errors.email="*Required"
        }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
            errors.email= "Invalid Email"
        }
        
        if (!values.password) {
            errors.password="*Required"
        }else if(! /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/.test(values.password)){
            errors.password= "Prrovide Strong Password"
        }
    
        return errors;
        
    };





const formik =useFormik({
    initialValues:{
            email:"",
            password:"",

    },
    validate,
    onSubmit:(values)=>{
        console.log(values);
        navigate("/create");
    }
})

   
return (
   
    <div className="main" style={{marginTop:"100px",}}>

           <h1>LogIn</h1>
        <form onSubmit={formik.handleSubmit}>
           <input type="text" placeholder='Email' name='email' value={formik.values.email} onBlur={formik.handleBlur} onChange={formik.handleChange}/>
           {formik.touched.email && formik.errors.email?<span>{formik.errors.email}</span>:null}
           <input type="password" placeholder='Password' name='password'  value={formik.values.password} onBlur={formik.handleBlur} onChange={formik.handleChange}/>       
           {formik.touched.password&& formik.errors.password?<span>{formik.errors.password}</span>:null}
           
           <input type="submit"></input>
           
               
        </form>
    </div>
    )

}
