import React from 'react';
import './App.css';
import SmartHomeControllerComponent from './components/SmartHomeControllerComponent';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Smart Home Automation System</h1>
      </header>
      <main>
        <SmartHomeControllerComponent />
      </main>
    </div>
  );
}

export default App;
