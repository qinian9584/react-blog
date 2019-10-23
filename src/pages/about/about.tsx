import React,{Component} from 'react';
export default class About extends Component {
    constructor(props:any) {
        super(props);
        this.state={}
    }
    
    handleClick() {
        console.log(3456789)
    }
 
    render() { 
        return (
            <div onClick={this.handleClick}>
                about
            </div>
        )
    }
}