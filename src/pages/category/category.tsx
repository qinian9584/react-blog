import React from 'react';
import './category.less';
export interface IAppProps {
}

export interface IAppState {
}

export default class Category extends React.Component<IAppProps, IAppState> {
    constructor(props: IAppProps) {
        super(props);

        this.state = {
        }
    }

    render() {
        return (
            <div className="category">
                category
            </div>
        );
    }
}


