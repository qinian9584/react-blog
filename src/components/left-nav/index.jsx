import React from 'react';
import {Link,withRouter} from 'react-router-dom'
import './index.less';
import { Menu, Icon } from 'antd';
import menuList from '../../config/menuConfig.js';//路由数据
const { SubMenu } = Menu;

class LeftNav extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            
        }
      }
    //根据menuList的数据，生成对应的标签
    getMeunNodes = (menuList) =>{
        const path = this.props.location.pathname;
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
                const cItem = item.children.find((cItem)=>cItem.key === path)
                if(cItem)this.openKey = item.key;
                
                return <SubMenu
                    key={item.key}
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

    UNSAFE_componentWillMount(){
        this.meunNodes = this.getMeunNodes(menuList)
    }

    render() {
        const path = this.props.location.pathname;
        const openKey = this.openKey;
        return (
            <div className="nav">
                <div>
                    <Menu
                        selectedKeys={[path]}
                        defaultOpenKeys={[openKey]}
                        mode="inline"
                        theme="dark"
                    >                       
                        {this.meunNodes}     
                    </Menu>
                </div>
            </div>
        );
    }
}

export default withRouter(LeftNav)

