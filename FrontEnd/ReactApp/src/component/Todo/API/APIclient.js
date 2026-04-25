import axios from "axios";

export const APPIClient = axios.create( {
        baseURL: 'http://localhost:8080'
    });