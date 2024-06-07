import React, { useState } from 'react';

// Step 1: Create ComponentA
const ComponentA = () => (
  <div>
    <h2>Component A</h2>
    <p>This is content for Component A.</p>
  </div>
);

// Step 1: Create ComponentB
const ComponentB = () => (
  <div>
    <h2>Component B</h2>
    <p>This is content for Component B.</p>
  </div>
);
const ComponentC = () => (
  <div>
    <h2>ComponentC</h2>
    <p>This is cntent for componenet C.</p>
  </div>
)

// Step 3: Create ToggleComponent
const ToggleComponent = () => {
  // State to track which component to display
  const [showComponentA, setShowComponentA] = useState(true);
  const [showComponentC, setShowComponentC] = useState(false);


  // Function to toggle between components
  const toggleComponent = () => {
    setShowComponentA((prevShowComponentA) => !prevShowComponentA);
    setShowComponentC((prevShowComponentC) => !prevShowComponentC);
  };


  // Render UI with button and either ComponentA or ComponentB
  return (
    <div>
      <h2>Toggle Components</h2>
      <button onClick={toggleComponent}>Toggle</button>
      {/* {showComponentA ? <ComponentA /> : <ComponentB />  } */}
      {showComponentA && <ComponentA />}
      {!showComponentA && !showComponentC && <ComponentB />}
      {showComponentC && <ComponentC />}

    </div>
    // : <ComponentC/>
  );
};


export default ToggleComponent;