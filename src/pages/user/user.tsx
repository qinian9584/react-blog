import React from 'react';
import './user.less';
export interface IAppProps {
}

export interface IAppState {
}

export default class User extends React.Component<IAppProps, IAppState> {
    constructor(props: IAppProps) {
        super(props);

        this.state = {
        }
    }

    render() {
        return (
            <div className="user">
                USER
            </div>
        );
    }
}


