import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import BackendApi from '../BackEndApi/FrontEndApi.jsx';
const UserData = () => {


    const [getData,setData]=useState([]);

    useEffect(()=>{
       BackendApi.retrive()
        .then(res=>{
            setData(res.data);
        }).catch(error=> console.log(error))
        
    },[])
  return (
    
  <div className='container mt-3'>
     <div className='row mt-3 p-2'>
      <table className='table table-bordered' >
        <thead>
            <tr>
                <th>Id</th>
                <th>User Name</th>
                <th>College</th>
                <th>Location</th>
                <th>Delete</th>
                <th>Update</th>
            </tr>
        </thead>
        {
             getData.map((data)=>{
                return(
                    <>
                    <tbody key={data.stuId}>
                        <tr>
                            <td>{data.stuId}</td>
                            <td>{data.stuName}</td>
                            <td>{data.stuCollege}</td>
                            <td>{data.stuLocation}</td> 
                            <td>
                                <Link to={`/delete/${data.stuId}`} className='btn btn-primary'>Delete</Link>
                            </td>
                            <td>
                                <Link to={`/update/${data.stuId}`} className='btn btn-dark'>Update</Link>
                            </td>
                        </tr>

                    </tbody>
                    </>
                )
             })
        }

 <Link to='/'>
 <button className='btn btn-danger mt-4'>Login Page</button></Link>
    </table>
    
  </div>
  </div>
  )
}

export default UserData
