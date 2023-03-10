import React from 'react';
import './App.css';
import HelloWorld from "./components/HelloWorld";
import MyName from "./components/MyName";


function App() {
    return (
        <div className="App">
            <header className="App-header">
                <HelloWorld></HelloWorld>
                <MyName></MyName>
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
