import ajax from './ajax';

/**
 * @description 登录接口 
 * @param {string} username - 用户名
 * @param {string} password - 用户密码
 */
interface Ilogin{
    username:string,
    password:string,
};

/**
 * @description 登录接口 
 * @param {JSON} 登陆数据
 * @method {GET}
 * @return {promise} 返回请求结果
 */
export const reqLogin = (data:Ilogin): Promise<any> => ajax('/listUsers',data,'get');