# React Intro
This is a React introduction.

## How it works?
Follow the step by step tutorial by switching branches.

## Step 1 - Initialization of the repository
[Quick access](https://github.com/bchelli/react-intro/tree/step-1)

## Step 2 - Create a Component
### 1) Add a basic Component
Create ./app/component/App.js with the following content
```javascript
import React from 'react';

class App extends React.Component {
    render () {
        return (
            <div>
                <h1>Hello World</h1>
                <p>This is a test app.</p>
            </div>
        );
    }
}

export default App
```

### 2) Use the Component
Update ./app/main.js with the following content
```javascript
import React from 'react';
import App from './component/App';

React.render(
  <App />,
  document.getElementById('react-root')
);
```

### 3) Run
```bash
npm run build
open dist/index.html
```
