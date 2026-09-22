
import React, { useState } from 'react'
import BackendApi from '../BackEndApi/FrontEndApi.jsx';
import { useNavigate } from 'react-router-dom';
const Update = () => {

     
        const [getId,setId]=useState({stuId:""})
        const[getStudent,setStudent]=useState({
            stuName:"",
            stuLocation:"",
            stuCollege:""
        });

    const usenagivate=useNavigate()
    const handelChange=(e)=>{
     e.preventDefault();
     BackendApi.update(getId.stuId, getStudent)
     .then((e)=>{
        console.log("UPDATE:",e);
        alert("UPDATE!!");
         usenagivate("/fetch")
        setStudent({
            stuName:"",
            stuLocation:"",
            stuCollege:""})
        setId({stuId:""})
     }).catch((e)=>{
        console.log("ERROR:",e);
        alert("ERROR");
     })
    };

  return (
    
    <form onSubmit={handelChange}>
     <div className='container border border-3 w-50 p-3 mt-3 rounded-3'>
        <h2 className='text-danger text-center bi bi-person-fill'>Update Student</h2>
       <dl>
         <dt>Enter Id:</dt>
        <dd> 
            <input type='text' className='form-control' value={getId.stuId}
                onChange={(e)=>{setId({...getId, stuId:e.target.value})}}/>
       </dd>
        <dt>Enter Name:</dt>
        <dd> 
            <input type='text' className='form-control'  value={getStudent.stuName}
                onChange={(e)=>{setStudent({
                    ...getStudent, stuName: e.target.value
                })}}/>
       </dd>
       <dt>Enter Location:</dt>
       <dd>
         <input type='text' className='form-control'  value={getStudent.stuLocation}
          onChange={(e)=>{setStudent({
                    ...getStudent, stuLocation: e.target.value
                })}}/>
       </dd>
       <dt>Enter College:</dt>
       <dd>
         <input type='text' className='form-control'   value={getStudent.stuCollege}
                 onChange={(e)=>{setStudent({
                    ...getStudent, stuCollege: e.target.value
                })}}/>
       </dd>
       </dl>
       <button className='btn btn-link' type='submit'>Update</button>
    </div>
    </form>
  )
}

export default Update
