import React from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import { Modal } from 'antd';
import './index.less';
// import {formatDate} from '../../utils/dateUtils';
const { confirm } = Modal;

class Header extends React.Component {
    static propTypes={
        time:PropTypes.string
    }

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
            }
        });
    }
    render() {
        return (
            <div className="header">
                <div className="header-left">
                        七念
                </div>
                <div className="header-right">
                    <span className="header-time">{this.props.time}</span>
                    <span className="header-name">欢迎，admin</span>
                    <span
                        onClick={this.loginOut.bind(this)}
                    >退出</span>
                </div>
            </div>
        );
    }
}

export default withRouter(Header)

