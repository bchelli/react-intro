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
### 1) Update Counter
Update ./app/component/Counter.js by adding the following methods to the class Counter
```javascript
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
```

### 2) Run
```bash
npm run build
open dist/index.html
```
