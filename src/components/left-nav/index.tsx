import React from 'react';
import {Link,withRouter} from 'react-router-dom'
import './index.less';
import { Menu, Icon } from 'antd';
import menuList from '../../config/menuConfig.js';
const { SubMenu } = Menu;

export interface IAppProps {
    history:any,
    location:any,
    match:any
}

export interface IAppState {
}

class LeftNav extends React.Component<IAppProps, IAppState> {

    //根据menuList的数据，生成对应的标签
    getMeunNodes = (menuList:any[]) =>{
        return menuList.map(item=>{
            if(!item.children){
                return (
                    <Menu.Item key={item.key}>
                        <Link to={item.key}>
                            <Icon type={item.icon} />
                            <span>{item.title}</span>
                        </Link>                          
                    </Menu.Item>
                )
            }else{
                return <SubMenu
                    key="sub1"
                    title={
                        <span>
                            <Icon type={item.icon} />
                            <span>{item.title}</span>
                        </span>
                    }
                >
                    {this.getMeunNodes(item.children)}
                </SubMenu>
                
            }
        })
    }

    render() {
        const path = this.props.location.pathname;
        return (
            <div className="nav">
                <div>
                    <Menu
                        defaultSelectedKeys={[path]}
                        defaultOpenKeys={[path]}
                        mode="inline"
                        theme="dark"
                    >                       
                        {this.getMeunNodes(menuList)}     
                    </Menu>
                </div>
            </div>
        );
    }
}

export default withRouter(LeftNav)

