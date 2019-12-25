import React,{Component} from 'react';
import { Form, Icon, Input, Button ,Layout,message} from 'antd';
import { FormComponentProps } from 'antd/es/form';
import './login.less';
import {reqLogin} from '../../api/index';
const { Content } = Layout;


interface UserFormProps extends FormComponentProps {
    history:any,
    location:any,
    match:any,
}

interface IState { 
}

class Login extends Component<UserFormProps, IState> {
    // 提交数据
    handleSubmit = (event:any):void=>{
        event.preventDefault()

        this.props.form.validateFields(async (err:any, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                
                const response = await reqLogin(values);              
                if(response.status === 200){
                    console.log('登陆成功');
                    this.props.history.replace('/')
                }else{
                    message.error('登陆失败');

                }

                
                
            }else{
                console.log('检验失败');
                
            }
        });
    }

    // 验证密码输入
    validatePsd = (rule:any,value:string,callback:any)=>{
        console.log(rule,value)
        if(!value){
            callback('请输入密码!')
        }else if(value.length<4){
            callback('密码至少四位!')
        }else if(value.length>12){
            callback('密码最多十二位!')
        }else if(!/^[a-zA-z0-9]+$/.test(value)){
            callback('密码必须由字母数字下划线组成!')
        }else{
            callback()
        }
        
    }

    render() {
        
        const { getFieldDecorator } = this.props.form;
        
        return (
            <div className="login">
                <Layout className="box"> 
                    <Content className="login-content">
                        <Form onSubmit={this.handleSubmit} className="login-form">
                            <Form.Item>
                                {getFieldDecorator('username', {
                                    rules: [
                                        { required: true,whitespace:true, message: '请输入用户名!' },
                                        { min: 4, message: '用户名至少四位！' },
                                        { max: 12, message: '用户名最多十二位!' },
                                        { pattern: /^[a-zA-z0-9]+$/, message: '用户名必须由字母数字下划线组成!' },
                                    ],
                                })(
                                    <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="Username"
                                    />,
                                )}                          
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('password', {
                                    rules: [
                                        {
                                            validator:this.validatePsd
                                        }
                                    ],
                                })(
                                    <Input
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    placeholder="Password"
                                    />,
                                )} 
                                
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    Log in
                                </Button>
                                
                            </Form.Item>
                        </Form>
                    </Content>
                </Layout>
            </div>
        )
    }
}

const WarpLogin = Form.create<UserFormProps>()(Login)

export default WarpLogin