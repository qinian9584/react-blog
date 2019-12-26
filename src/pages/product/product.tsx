import React from 'react';
import './product.less';
export interface IAppProps {
}

export interface IAppState {
    count: number
}

export default class Product extends React.Component<IAppProps, IAppState> {
    constructor(props: IAppProps) {
        super(props);

        this.state = {
            count: 0
        }
    }

    setCount = ()=>{
        Promise.resolve().then(val=>{
            this.setState({count:this.state.count+1},(state?:any)=>{
                console.log('state', state)
            })
            console.log('setState', this.state.count)
            this.setState({count:this.state.count+1},(state?:any)=>{
                console.log('state1', state)
            })
            console.log('setState1', this.state.count)
        }) 
    }

    render() {
        console.log('render', this.state.count)
        return (
            <div className="product">
                product 商品管理

                <button onClick={this.setCount}>测试</button>
            </div>
        );
    }
}


