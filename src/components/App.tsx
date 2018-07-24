import * as React from "react";
import {Input} from "./Input";
import {Button} from "./Button";
import {ChangeEvent} from "react";

export interface HelloProps {
    compiler: string;
    framework: string;
}

export interface TokenizerState {
    input   : string;
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class App extends React.Component<HelloProps, TokenizerState> {

    constructor(props: any) {
        super(props);
        this.state = {input: ''};
        this.handleChange = this.handleChange.bind(this);
        this.tokenizerClick = this.tokenizerClick.bind(this);
    }

    render() {
        return <div>
            <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>
            {/*<Input/>*/}

            <textarea placeholder="Japanese text here" onChange={this.handleChange}></textarea>
            <Button title="Tokenize" onClick={this.tokenizerClick}/>
        </div>
    }

    handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
        console.log("handleEvent", event.target.value);
        this.setState({input: event.target.value});
    }

    tokenizerClick() {

        console.log("Tokenize", this.state.input);
    }
}
