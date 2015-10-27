import React from 'react';

class Counter extends React.Component {
    render () {
        return (
            <div>
                <h2>Counter "{this.props.name}"</h2>
            </div>
        );
    }
}

export default Counter
