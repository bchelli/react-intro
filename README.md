# React Intro
This is a React introduction.

## How it works?
Follow the step by step tutorial by switching branches.

## Step 1 - Initialization of the repository
[Quick access](https://github.com/bchelli/react-intro/tree/step-1)

## Step 2 - Create a Component
[Quick access](https://github.com/bchelli/react-intro/tree/step-2)

## Step 3 - Props
### 1) Create a counter Component
They are to React Component what are parameters to a function.

Create ./app/component/Counter.js with the following content
```javascript
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
```

### 2) Use the Counter in the App component
Update ./app/component/App.js with the following content
```javascript
import React from 'react';
import Counter from './Counter';

class App extends React.Component {
    render () {
        return (
            <div>
                <h1>Hello World</h1>
                <p>This is a test app.</p>
                <Counter name="Level" />
            </div>
        );
    }
}

export default App
```

### 3) Run
```bash
npm run build
open dist/index.html
```
