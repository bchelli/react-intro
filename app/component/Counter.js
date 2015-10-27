import React from 'react';

class Counter extends React.Component {
    constructor (props) {
        super(props);
        this.state = { count: 0 };
    }

    render () {
        return (
            <div>
                <h2>Counter "{this.props.name}"</h2>
                <button onClick={this.inc.bind(this)}>+</button>
                {this.state.count}
                <button onClick={this.dec.bind(this)}>-</button>
            </div>
        );
    }

    inc () {
        this.setState({
            count: this.state.count + 1
        });
    }

    dec () {
        this.setState({
            count: this.state.count - 1
        });
    }
}

export default Counter
