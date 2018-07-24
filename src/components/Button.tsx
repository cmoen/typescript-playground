import * as React from "react";

export interface ButtonProps {
    title: string;
    onClick: any;
}

export class Button extends React.Component<ButtonProps, {}> {

    constructor(props: ButtonProps) {
        super(props);
    }

    render() {
        return <button onClick={this.props.onClick}>{this.props.title}</button>
    }
}
