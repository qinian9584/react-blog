import React from 'react';
import './home.less';
export interface IAppProps {
}

export interface IAppState {
}

export default class Home extends React.Component<IAppProps, IAppState> {
    constructor(props: IAppProps) {
        super(props);

        this.state = {
        }
    }

    render() {
        return (
            <div className="home">
                home
            </div>
        );
    }
}


