import axios from 'axios';
import {message} from 'antd';
// var ccapi = axios.create({
//     baseURL: 'http://127.0.0.1:8081',
//     timeout: 10000,
//     headers: {}
// });
const baseURL = '';
export default function ajax(url:string,data={},type='get'){
    return new Promise((resolve,reject)=>{
        let promise;
        if(type==='get'){
            promise = axios.get(baseURL+url,{
                params:data
            })
        }else{
            promise = axios.post(baseURL+url,data)
        }
        promise.then(response=>{
            resolve(response)
        }).catch(error=>{
            message.error(error.message)
        })
    })
    
}

/**
 * 方法说明
 *  登录页面 
 * @method 
 * @return {promise} 返回请求结果
 */
// interface Ilogin{
//     username:string,
//     password:string,
// };
// export function login(data:Ilogin):any {
//     return ccapi({
//         method: 'get',
//         url:ccapi.getUri+ '/listUsers',
//         params: data
//     })
// };
