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
