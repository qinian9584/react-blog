import React from 'react';
import {withRouter} from 'react-router-dom';
import { Modal } from 'antd';
import './index.less';
import menuList from '../../config/menuConfig.js';//路由数据
import {formatDate} from '../../utils/dateUtils';
const { confirm } = Modal;
export interface IAppProps {
    history:any,
    location:any,
    match:any,
}

export interface IAppState {
    currentDate:string,
}

class Header extends React.Component<IAppProps, IAppState> {
    intervalId: NodeJS.Timeout| null = null;
    constructor(props: IAppProps) {
        super(props);

        this.state = {
            currentDate:formatDate(Date.now())
        }
    }

    getTitle = () => {
        const path = this.props.location.pathname;
        let title;
        menuList.forEach((item)=>{
            if(item.key === path){
                title = item.title
            }
            if(item.children){
                const citem= item.children.find(citem => citem.key === path)
                if(citem){
                    title = citem.title
                }
            }
        })
        return title
    }

    loginOut = (e:any) => {
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

    componentDidMount(){
        this.intervalId = setInterval(()=>{
            const currentDate = formatDate(Date.now())
            this.setState({currentDate:currentDate})   
        },1000)
    }
    componentWillUnmount(){
        clearInterval(Number(this.intervalId))
    }
    render() {
        const {currentDate} = this.state
        const title = this.getTitle()
        return (
            <div className="header">
                <div className="header-left">
                    {title}
                </div>
                <div className="header-right">
                <span className="header-time">{currentDate}</span>
                    <span className="header-name">欢迎，admin</span>
                    <a href="javascript" onClick={this.loginOut.bind(this)}>退出</a>
                </div>
            </div>
        );
    }
}

export default withRouter(Header)

