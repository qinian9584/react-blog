import React from 'react';
import './product.less';
export interface IAppProps {
}

export interface IAppState {
}

export default class Product extends React.Component<IAppProps, IAppState> {
    constructor(props: IAppProps) {
        super(props);

        this.state = {
        }
    }

    render() {
        return (
            <div className="product">
                product
            </div>
        );
    }
}


