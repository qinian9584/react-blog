import React from 'react';
import './index.less';
import {formatDate} from '../../utils/dateUtils';
export interface IAppProps {
}

export interface IAppState {
    currentDate:any
}

export default class Herder extends React.Component<IAppProps, IAppState> {
    constructor(props: IAppProps) {
        super(props);

        this.state = {
            currentDate:formatDate(Date.now())
        }
    }

    componentDidMount(){
        setInterval(()=>{
            const currentDate = formatDate(Date.now())
            this.setState({currentDate:currentDate})   
        },1000)
    }

    render() {
        const {currentDate} = this.state

        return (
            <div className="header">
                <div className="header-left">
                    路由
                </div>
                <div className="header-right">
                <span className="header-time">{currentDate}</span>
                    <span className="header-name">欢迎，admin</span>
                    <a href="javascript">退出</a>
                </div>
            </div>
        );
    }
}


