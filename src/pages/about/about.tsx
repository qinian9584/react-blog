import React from 'react';
export interface IAppProps {
}

export interface IAppState {
}

export default class About extends React.Component<IAppProps, IAppState> {
    render() {
        return (
            <div className="about">
                About
            </div>
        );
    }
}


