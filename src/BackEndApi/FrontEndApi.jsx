import React from 'react'

import axios from 'axios';

 const API_URL = "http://localhost:8080/stu";

class BackendApi {

      login(data){

            return axios.post(`${API_URL}/login`,data);

        }

        retrive(){
            return axios.get(`${API_URL}/fetch`);
        }

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
