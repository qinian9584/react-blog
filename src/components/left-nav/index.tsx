import React from 'react';
import './index.less';
export interface IAppProps {
}

export interface IAppState {
}

export default class LeftNav extends React.Component<IAppProps, IAppState> {
    constructor(props: IAppProps) {
        super(props);

        this.state = {
        }
    }

    render() {
        return (
            <div className="nav">
                11122
                <p>左侧导航</p>
            </div>
        );
    }
}


