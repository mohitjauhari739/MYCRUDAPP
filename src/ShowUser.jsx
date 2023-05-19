import React, { useEffect, useState } from "react";
import { Link, useNavigate} from "react-router-dom";
export default function ShowUser(){
    
    const[user,setUser]=useState([])
    
    const navigate=useNavigate()
    useEffect(()=>{
    const urls="https://openuserapi.onrender.com/admin/users"
    let promise=fetch(urls)
    promise.then((response)=>{
     return response.json()
    }).then((data)=>{
     //console.log(data)
    setUser(data.list)
    }).catch((Error)=>{
        console.log(Error)
    })
    },[])
     //console.log(user)
    
     function HandleEdit(id){
      navigate('EditUser/'+id)
     }
 function hopt(x){
    HandleEdit(x)
 }
    return(
        <>
        <div className="container-fluid text-center">
            <div className="row">
                <div className="col-sm-12">
                    <div className="btn btn-dark text-light ">
                        { <Link to='Add' style={{color:"white",listStyleType:"none"}}>Add (+)</Link> }
                    </div>
                <h2>ShowUser</h2>
                </div>
                <div className="row">

                <div className="col-sm-12">
                <div className="col-sm-2"></div>
                <div className="col-sm-8">
                
                <table className="table table-bordered">
                    <thead className="bg-dark text-light">
                        <tr>
                            <td>Id</td>
                            <td>Name</td>
                            <td>Email</td>
                            <td>Phone</td>
                            <td>Password</td>
                            <td>Added_on</td>
                            <td>Status</td>
                            <td>Action</td>
                         
                            
                        </tr>
                    </thead>
                    
                    <tbody className="bg-light"  style={{color:"blue"}} >
                        {user.map((item,index)=>{
                            let date=item.createdAt;
                            let d1=new Date(date)
                            let formated = `${d1.getDate()}/${d1.getMonth()}/${d1.getFullYear()}`
                        //console.log(formated);
                        //console.log(item.status)

                        return(
                              <tr key={index}>
                                <td >{index+1}</td>
                                <td >{item.name}</td>
                                <td >{item.email}</td>
                                <td >{item.phone}</td>
                                <td >{item.password}</td>
                                <td >{formated}</td>
                                <td >true</td>
                                
                            <td>
                            <select  onChange={()=>{hopt(item._id)}}>
                                <option style={{backgroundColor:"yellow",textColor:"black",fontSize:"20px"}}>...</option>
                                <option style={{backgroundColor:"red",color:"white",fontSize:"20px"}}>Edit</option>
                                
                            </select>
                            </td>
                             
                              </tr>
                                     )
                        })}
                    </tbody>
                </table>
                </div>
                <div className="col-sm-2"></div>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}