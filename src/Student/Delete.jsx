
import React, { useState } from 'react'

import BackendAi from '../BackEndApi/FrontEndApi.jsx'
import { useNavigate } from 'react-router-dom'

const Delete = () => {


    const[getId,setId]=useState({stuId:""})


    const usenagivate=useNavigate()
    const deleteStudentId=(e)=>{

         e.preventDefault();

         BackendAi.delete(getId.stuId)
         .then((e) => {
            alert("UPDATE SUCCESS!!");
            console.log("UPDATE SUSSESS:", e)
             usenagivate("/fetch");
             setId(({stuId:""}))
            })
         .catch((e) => {
            alert("UPDATE ERROR!!")
            console.log("UPDATE ERROR:",e)
            });
    }

  return (
   
     
    <form onSubmit={deleteStudentId}>
         <div className='container mt-3 border border-3 w-50 p-3 mt-3 rounded-'>
        
        <dl>
            <dt>Enter Student Id:</dt>
            <dd>
                <input type='text' placeholder='enter id' onChange={(e)=>{setId({
                    ...getId, stuId:e.target.value
                })}} value={getId.stuId}
                className='form-control'/>
            </dd>
        </dl>
        <button className='btn btn-danger' type='submit'>Delete</button>
  </div>
    </form>
  )
}

export default Delete
