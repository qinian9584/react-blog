import React,{Component} from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';
import { Layout } from 'antd';
import Header from '../../components/header';
import LeftNav from '../../components/left-nav';
import Home from '../home/home';
import Category from '../category/category';
import Product from '../product/product';
import User from '../user/user';

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
                            <Route path='/category' component={Category}></Route>                            
                            <Route path='/product' component={Product}></Route>                            
                            <Route path='/user' component={User}></Route> 
                            <Redirect to="/home"></Redirect>                           
                        </Switch>
                    </Content>
                    <Footer style={{textAlign:'center',color:'#cccccc',padding:'15px 50px'}}>推荐使用chrome浏览器</Footer>
                </Layout>
            </Layout>
            
        )
    }
} 
