import React from 'react'

import axios from 'axios';

 const API_URL = "https://full-stack-employee-management.onrender.com/stu";

class BackendApi {

      login(data){

            return axios.post(`${API_URL}/login`,data);

        }

       retrive() {
             const token = localStorage.getItem("login");

             console.log(token);

              return axios.get(`${API_URL}/fetch`, {
                 headers: {
                      Authorization: `Bearer ${token}`
                        }
                  });}

        post(data){
            return axios.post(`${API_URL}/post`,data);
        }

      delete(id) {
        const token = localStorage.getItem("login");

        return axios.delete(`${API_URL}/delete/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}

       update(id, student)
       {
        const token = localStorage.getItem("login");
        return axios.put(`${API_URL}/update/${id}`,student,{
             headers: {
            Authorization: `Bearer ${token}`
        }
        })
         
       }

}
export default new BackendApi();
