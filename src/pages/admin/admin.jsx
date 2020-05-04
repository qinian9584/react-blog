import React,{Component} from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';
import { Layout } from 'antd';
import LeftNav from '../../components/left-nav';
import Header from '../../components/header';
import Home from '../home/home';
import About from '../about/about';
import Reduxpage from '../redux';


const { Footer, Sider, Content } = Layout;
export default class Admin extends Component {
    render() {
        return (
            <Layout style={{height:'100%'}}>
                <Sider>
                    <LeftNav></LeftNav>
                </Sider>
                <Layout>
                    <Header time="2020-4-28"></Header>
                    <Content style={{background:'#fff'}}>
                        <Switch>
                            <Route component={Home}
                                path="/home"
                            ></Route>
                            <Route component={Reduxpage}
                                path="/redux"
                            ></Route>
                            <Route component={About}
                                path="/about"
                            ></Route>
                            <Redirect component={Home}
                                to="/home"
                            ></Redirect>
                        </Switch>
                    </Content>
                    <Footer style={{textAlign:'center',color:'#cccccc',padding:'15px 50px'}}>推荐使用chrome浏览器</Footer>
                </Layout>
            </Layout>
        )
    }
}