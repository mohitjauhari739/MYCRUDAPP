import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Add(){
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[phone,setPhone]=useState("")
    const[password,setPassword]=useState("")
    const navigate=useNavigate()
    // console.log(name)
    let handleSubmit = (e)=>{
        e.preventDefault()
        let date= new Date().toLocaleDateString()
        console.log(date)
        const user = {name,email,password,phone,date}
        
        let urls="https://openuserapi.onrender.com/admin/create-user"
       
        let promise = fetch(urls,{
            headers:{
                'Content-Type':'application/json',
            },
            method:"POST",
            body:JSON.stringify(user)
        })
        promise.then((response)=>{
            if(response.ok){
            alert("user Added Successfully")
            window.location.reload()
            
             
            }
        
        }).then((data)=>{
            setName('')
            setEmail('')
            setPassword('')
            setPhone('')
        }).catch((Error)=>{
        console.log(Error)
        })
        
        navigate('/')
        
    }
    
    return(
        <>
       <div className="container">
        <div style={{color:"blue"}}className="card bg-info">
            <div className="card-title">
             <h2 className="text-center">AddUser</h2>
            </div>
            <div className="card-body bg-info">
                <form onSubmit={handleSubmit}>
                    <label>Name</label><br/>
                    <input type="text" value={name} onChange={e=>setName(e.target.value)} className="form-control" placeholder="Enter ur good name" />
                    <label>Email</label><br/>
                    <input type="email" value={email} onChange={e=>setEmail(e.target.value)} className="form-control" placeholder="Enter ur mailid" />
                    <label>Phone</label><br/>
                    <input type="number" value={phone} onChange={e=>setPhone(e.target.value)} className="form-control" placeholder="Enter ur pass" />
                    <label>Password</label><br/>
                    <input type="password" value={password} onChange={e=>setPassword(e.target.value)} className="form-control" placeholder="Enter ur mob_num..." /><br/>
                    <input style={{backgroundColor:"blue"}} type="submit" value="submit" className="btn btn-dark " />

                </form>
            </div>
        </div>
       </div>
        </>
    )
}