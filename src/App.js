import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './App.css';
import Form from './Form.js';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Form />
            </div>
    );
    }
}
export default App;
