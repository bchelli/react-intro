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

    componentWillMount () {
        console.log('componentWillMount');
    }

    componentDidMount () {
        console.log('componentDidMount');
    }

    componentWillReceiveProps (nextProps) {
        console.log('componentWillReceiveProps', nextProps);
    }

    shouldComponentUpdate (nextProps, nextState) {
        console.log('shouldComponentUpdate', nextProps, nextState);
        return true;
    }

    componentWillUpdate (nextProps, nextState) {
        console.log('componentWillUpdate', nextProps, nextState);
    }

    componentDidUpdate (prevProps, prevState) {
        console.log('componentDidUpdate', prevProps, prevState);
    }

    componentWillUnmount () {
        console.log('componentWillUnmount');
    }
}

export default Counter
