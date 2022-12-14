import React from "react";

class ClassBaseComponent extends React.Component{
    constructor() {
        super();
        this.increment=this.increment.bind(this)
        this.state={
            number:0
        }
    }

    increment(){                                     //classbase component
        this.setState({
            number: this.state.number+1
        })
    }


    render() {
        return(
            <div>
                <h3>classbase component</h3>
                <h1>Counter={this.state.number}</h1>
                <button onClick={this.increment}>Increment</button>
            </div>
        )
    }
}
export default ClassBaseComponent;