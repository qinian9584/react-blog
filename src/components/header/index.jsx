import React from 'react';
import {withRouter} from 'react-router-dom';
import { Modal } from 'antd';
import './index.less';
// import {formatDate} from '../../utils/dateUtils';
const { confirm } = Modal;

class Header extends React.Component {
    loginOut = (e) => {
        e.preventDefault()
        confirm({
            content: '确认要退出登录吗？',
            okText: '确认',
            cancelText: '取消',
            onOk: ()=> {
                console.log('OK');
                this.props.history.replace('/login')
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }
    render() {
        return (
            <div className="header">
                <div className="header-left">
                    wertyu
                </div>
                <div className="header-right">
                <span className="header-time">1234</span>
                    <span className="header-name">欢迎，admin</span>
                    <a href="javascript" onClick={this.loginOut.bind(this)}>退出</a>
                </div>
            </div>
        );
    }
}

export default withRouter(Header)

