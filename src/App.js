import React, { useState, Component } from 'react';
import './App.css';

const App = () => {
    const [appName, setAppName] = useState("Sudarshan's Code App");
    return (
        <div className='App'>
            <h1>{appName}</h1>
        </div>
    )
}

export default App;