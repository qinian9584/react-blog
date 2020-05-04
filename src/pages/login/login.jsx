import React,{Component} from 'react'
import { Form, Icon, Input, Button } from 'antd'
import './login.less'
import { Layout } from 'antd';
const { Header, Content } = Layout;
export default class Login extends Component {

    render() {
        return (
            <div className="login">
                <Layout className="box">
                    <Header>Header</Header>
                    <Content className="login-content">
                        <Form className="login-form">
                            <Form.Item>
                                <Input
                                    placeholder="Username"
                                    prefix={<Icon style={{ color: 'rgba(0,0,0,.25)' }}
                                        type="user"
                                            />}
                                />
                            </Form.Item>
                            <Form.Item>
                                <Input
                                    placeholder="Password"
                                    prefix={<Icon style={{ color: 'rgba(0,0,0,.25)' }}
                                        type="lock"
                                            />}
                                    type="password"
                                />
                            </Form.Item>
                            <Form.Item>
                                <Button className="login-form-button"
                                    htmlType="submit"
                                    type="primary"
                                >
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