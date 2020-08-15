import React from 'react';
import SubmitButton from './components/submitbutton/SubmitButton';

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <div className="container">
                    <SubmitButton/>
                </div>
            </div>
            )
    }
}

export default App;
