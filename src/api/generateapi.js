import axios from "axios"

const generalUrl = "http://216.238.94.51:5078/api/";


export const apiClient = axios.create({
  baseURL: generalUrl,
  timeout: 2000,
  headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') || '' }
});

