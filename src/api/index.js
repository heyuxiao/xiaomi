import axios from './fetch'

export const getData = ()=>{
    return axios.get('/home1')
}

export const getCategory1=()=>{
    return axios.get('/category1')
}