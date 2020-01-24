import axios from 'axios';

const api = axios.create({
    baseURL: 'https://tapiocaria.azurewebsites.net/api'
}); 

export default api;