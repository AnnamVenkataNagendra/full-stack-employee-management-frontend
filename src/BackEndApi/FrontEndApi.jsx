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
            return axios.delete(`${API_URL}/delete/${id}`);
       }

       update(id, student)
       {
        return axios.put(`${API_URL}/update/${id}`,student)
         
       }

}
export default new BackendApi();
