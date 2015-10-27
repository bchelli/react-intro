# React Intro
This is a React introduction.

## How it works?
Follow the step by step tutorial by switching branches.

## Step 1 - Initialization of the repository
[Quick access](https://github.com/bchelli/react-intro/tree/step-1)

## Step 2 - Create a Component
[Quick access](https://github.com/bchelli/react-intro/tree/step-2)

## Step 3 - Props
[Quick access](https://github.com/bchelli/react-intro/tree/step-3)

## Step 4 - State
### 1) Update the Counter component
Create ./app/component/Counter.js with the following content
```javascript
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
```

### 2) Run
```bash
npm run build
open dist/index.html
```
