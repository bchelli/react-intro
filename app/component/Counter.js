import React from 'react';
import CounterStore from '../store/CounterStore';
import CounterAction from '../action/CounterAction';

class Counter extends React.Component {
    constructor (props) {
        super(props);
        this.state = { count: 0 };
    }

    render () {
        return (
            <div>
                <h2>Counter "{this.props.name}"</h2>
                <button onClick={CounterAction.inc}>+</button>
                {this.state.count}
                <button onClick={CounterAction.dec}>-</button>
            </div>
        );
    }

    componentWillMount () {
        this.removeCounterListener = CounterStore.listen(count => {
            this.setState({ count });
        });
        CounterAction.init();
    }

    componentWillUnmount () {
        this.removeCounterListener();
    }
}

export default Counter
