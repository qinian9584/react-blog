import React,{Component} from 'react';
export default class About extends Component {
    constructor(props) {
        super(props);
        // 这边绑定是必要的，这样 `this` 才能在回调函数中使用
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
       console.log('3456789')
    }

    render() {
        return (
            <div onClick={this.handleClick}>
                about 345678
            </div>
        )
    }
}