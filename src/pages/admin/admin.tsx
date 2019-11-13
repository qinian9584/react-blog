import React,{Component} from 'react';
import {Route,Switch,Link} from 'react-router-dom'
import { Layout } from 'antd';
import Header from '../../components/header';
import LeftNav from '../../components/left-nav';



const { Footer, Sider, Content } = Layout;

export default class Admin extends Component {
    render() {
        return (
            
            <Layout style={{height:'100%'}}>
                <Sider>
                    <LeftNav/>
                </Sider>
                <Layout>                    
                    <Header/>                   
                    <Content style={{background:'#fff'}}>
                        
                    </Content>
                    <Footer style={{textAlign:'center',color:'#cccccc'}}>推荐使用chrome浏览器</Footer>
                </Layout>
            </Layout>
            
        )
    }
} 
