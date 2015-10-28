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
[Quick access](https://github.com/bchelli/react-intro/tree/step-4)

## Step 5 - Component Lifecycle
[Quick access](https://github.com/bchelli/react-intro/tree/step-5)

## Step 6 - Flux
### 1) What is flux?
[Flux Architecture](https://facebook.github.io/flux/docs/overview.html)

### 2) Install Reflux
```bash
npm install --save reflux@0.3.0
```

### 3) Create a Action
Create ./app/action/CounterAction.js with the following content
```javascript
import Reflux from 'reflux';

var CounterAction = Reflux.createActions({
  "init": {},
  "inc": {},
  "dec": {},
});

export default CounterAction;
```

### 4) Create a Store
Create ./app/store/CounterStore.js with the following content
```javascript
import Reflux from 'reflux';
import CounterAction from '../action/CounterAction';

var CounterStore = Reflux.createStore({

  init: function () {
    this.value = 0;
    this.listenTo(CounterAction.init, this.initValue.bind(this));
    this.listenTo(CounterAction.inc,  this.incValue.bind(this));
    this.listenTo(CounterAction.dec,  this.decValue.bind(this));
  },

  set: function (value) {
    this.value = value;
    this.trigger(value);
  },

  initValue: function () {
    this.set(0);
  },

  incValue: function () {
    this.set(this.value + 1);
  },

  decValue: function () {
    this.set(this.value - 1);
  }

});

export default CounterStore;
```

### 5) Update Counter
Update ./app/component/Counter.js with the following content

```javascript
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
```

### 6) Run
```bash
npm run build
open dist/index.html
```
