import React from 'react';
import { Radio, Button } from 'antd';
import {Market} from './openMarket.js'
import './scheme.less'
export interface IAppProps {
    
}

export interface IAppState {

}

// interface schemaName {
//     [key: string]: any,
// }

function onChange(e:any) {
    console.log(`radio checked:${e.target.value}`);

    if(e.target.value !== 'market'){
        window.location.href = e.target.value;
    }
}

function openMarket(name:any = 'default'){
    Market(name)
}

export default class Scheme extends React.Component<IAppProps, IAppState> {
    
    render() {
        return (
            <div className="scheme">
                <h2>测试能否唤起app</h2>
                <Radio.Group onChange={onChange} defaultValue="market">
                    <Radio.Button value="market">软件市场</Radio.Button>
                    <Radio.Button value="weixin://">跳转微信</Radio.Button>
                    <Radio.Button value="ztjy://com.seebaby/">跳转家长端</Radio.Button>
                </Radio.Group>

                <div className="box">
                    <h2 >唤起软件市场下载页</h2>
                    <Button type="primary" onClick={()=>{openMarket()}}>通用</Button>

                    <Button type="primary" onClick={()=>{openMarket('tmast')}}>腾讯应用宝</Button>
                    <Button type="primary" disabled onClick={()=>{openMarket()}}>360手机助手</Button>
                    <Button type="primary" disabled onClick={()=>{openMarket()}}>百度手机助手</Button>
                    <Button type="primary" disabled onClick={()=>{openMarket()}}>豌豆荚</Button>
                    <Button type="primary" disabled onClick={()=>{openMarket()}}>pp助手</Button>
                    <Button type="primary" disabled onClick={()=>{openMarket()}}>搜狗手机助手</Button>
                    <Button type="primary" disabled onClick={()=>{openMarket()}}>安卓市场/应用汇</Button>
                </div>
                <div className="box">
                    <Button type="primary" onClick={()=>{openMarket('huawei')}}>华为应用市场</Button>
                    {/* <Button type="primary">oppo软件商店</Button> */}
                    <Button type="primary" onClick={()=>{openMarket('vivo')}}>vivo应用商店</Button>
                    <Button type="primary" onClick={()=>{openMarket('isMi')}}>小米应用商店</Button>
                    {/* <Button type="primary">魅族应用中心</Button> */}
                </div>
            </div>
        );
    }
}