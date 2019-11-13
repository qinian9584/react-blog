import React from 'react';

import './index.less';
import { Menu, Icon } from 'antd';

const { SubMenu } = Menu;

export interface IAppProps {
}

export interface IAppState {
}

export default class LeftNav extends React.Component<IAppProps, IAppState> {
    render() {
        return (
            <div className="nav">
                <div>
                    <Menu
                        defaultSelectedKeys={['2']}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                        theme="dark"
                    >
                        <Menu.Item key="1">
                            <Icon type="pie-chart" />
                            <span>首页</span>
                        </Menu.Item>
                        
                        <SubMenu
                            key="sub1"
                            title={
                                <span>
                                    <Icon type="mail" />
                                    <span>商品</span>
                                </span>
                            }
                        >
                            <Menu.Item key="5">品类管理</Menu.Item>
                            <Menu.Item key="6">商品管理</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="2">
                            <Icon type="desktop" />
                            <span>用户管理</span>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Icon type="inbox" />
                            <span>图形图表</span>
                        </Menu.Item>
                    </Menu>
                </div>
            </div>
        );
    }
}


