import React ,{useState,useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
export default function Edit(){
   // const { _id }=useParams()
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[phone,setPhone]=useState("")
    const[password,setPassword]=useState("")
   //const[status,setStatus]=useState(true);
    const {id} = useParams()
    
   // const[user1,setUser]=useState([])
    const navigate=useNavigate()
    useEffect(()=>{
 
    // const urls1=`https://openuserapi.onrender.com/admin/user/${_id}`
    // const urls=`https://openuserapi.onrender.com/admin/user/62f3099a1ecf67ad6ac89fc6`
    const url = 'https://openuserapi.onrender.com/admin/user/'+id
    let promise=fetch(url)
    promise.then((response)=>{
     return response.json()
    }).then((data)=>{
      //   console.log(data.list.status)
        setName(data.list.name)
        setEmail(data.list.email)
        setPhone(data.list.phone)
       // setPassword(data.list.password)
        //console.log(data.list)
    }).catch((Error)=>{
        console.log(Error)
    })
    },[id])
  //  alert(_id)
    function  handleSubmit(e){
        e.preventDefault()
        const UpdateData={id,name,email,phone,password}
      
    const url = 'https://openuserapi.onrender.com/admin/update-user'
        
        let promise=fetch(url,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
                       body:JSON.stringify(UpdateData)
        })
        promise.then((response)=>{
            return response.json();
        
        }).then((data)=>{
            // setName("")
            // setEmail("")
            // setPassword("")
            // setPhone("")
            navigate('/')
        }).catch((Error)=>{
         console.log(Error)
        })
       //

    }
    return(
        <>
        <div className="container">
         <div className="card bg-info" style={{color:"blue"}}>
             <div className="card-title">
              <h2 className="text-center">Edit User</h2>
             </div>
             <div className="card-body">
                 <form style={{color:"blue"}}onSubmit={handleSubmit}>
                     <label>Name</label><br/>
                     <input type="text" value={name} onChange={e=>setName(e.target.value)} className="form-control" placeholder="Enter ur good name" />
                     <label>Email</label><br/>
                     <input type="email" value={email} onChange={e=>setEmail(e.target.value)} className="form-control" placeholder="Enter ur mailid" />
                     <label>Password</label><br/>
                     <input type="password" value={password} onChange={e=>setPassword(e.target.value)} className="form-control" placeholder="Enter ur pass" />
                     <label>Phone</label><br/>
                     <input type="number" value={phone} onChange={e=>setPhone(e.target.value)} className="form-control" placeholder="Enter ur mob_num..." /><br/>
                     <input  style={{backgroundColor:" blue"}} type="submit" value="submit" className="btn btn-dark " />
 
                 </form>
             </div>
         </div>
        </div>
        
         </>
    )
} 