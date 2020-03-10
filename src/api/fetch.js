import axios from 'axios'
// import { message } from 'antd';

var service = axios.create({
    baseURL:'/xm',
    "content-type":"application/json",
    timeout:5000
})

//请求拦截器
service.interceptors.request.use((config)=>{
    // var token = sessionStorage.getItem('token')
    // config.headers['token'] = token 
    return config
})

service.interceptors.response.use((response)=>{
    var res = {}
    if(response.data && response.data.code===0){
        res=response.data || {}
    }else{
        // var msg = response.data.message || '请求错误'
        // message.error(msg);
        // window.location.href='/login'
    }
    return res
},error=>{
    //调接口失败
    console.log(error)
})

export default service