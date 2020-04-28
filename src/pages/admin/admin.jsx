import React,{Component} from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';
import { Layout } from 'antd';
import LeftNav from '../../components/left-nav';
import Header from '../../components/header';
import Home from '../home/home';
import About from '../about/about';


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
                        <Switch>
                            <Route path='/home' component={Home}></Route>                            
                            <Route path='/about' component={About}></Route>
                            <Redirect to="/home" component={Home}></Redirect>                           
                        </Switch>
                    </Content>
                    <Footer style={{textAlign:'center',color:'#cccccc',padding:'15px 50px'}}>推荐使用chrome浏览器</Footer>
                </Layout>
            </Layout>
        )
    }
} 