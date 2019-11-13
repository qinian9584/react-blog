import React,{Component} from 'react';
import { Layout } from 'antd';
import Headers from '../../components/header';
import LeftNav from '../../components/left-nav';

const { Header, Footer, Sider, Content } = Layout;

export default class Admin extends Component {
    render() {
        return (
            
            <Layout style={{height:'100%'}}>
                <Sider>
                    <LeftNav/>
                </Sider>
                <Layout>
                    <Header>
                        <Headers/>
                    </Header>
                    <Content>Content</Content>
                    <Footer>Footer</Footer>
                </Layout>
            </Layout>
            
        )
    }
} 
