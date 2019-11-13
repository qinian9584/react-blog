import React from 'react';
import './index.less';
export interface IAppProps {
}

export interface IAppState {
}

export default class Herder extends React.Component<IAppProps, IAppState> {
    constructor(props: IAppProps) {
        super(props);

        this.state = {
        }
    }

    render() {
        return (
            <div className="nav">
                11122
                <p>头部</p>
            </div>
        );
    }
}


