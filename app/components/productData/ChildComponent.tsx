// ParentComponent.tsx
import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

interface ParentProps {
    // Define the function type to be passed as a prop
    updateParentState: (newValue: string) => void;
}

const ParentComponent: React.FC<ParentProps> = ({ updateParentState }) => {
    const [parentState, setParentState] = useState<string>('Initial Value');

    return (
        <div>
            <h1>Parent Component</h1>
            <p>Parent State: {parentState}</p>
            {/* Pass the function as a prop to the child component */}
            <ChildComponent updateParentState={updateParentState} />
        </div>
    );
};

export default ParentComponent;// ChildComponent.tsx
import React from 'react';

interface ChildProps {
    // Define the function type to be received as a prop
    updateParentState: (newValue: string) => void;
}

const ChildComponent: React.FC<ChildProps> = ({ updateParentState }) => {
    const handleClick = () => {
        // Call the function passed down from the parent to update its state
        updateParentState('New Value from Child');
    };

    return (
        <div>
            <h2>Child Component</h2>
            <button onClick={handleClick}>Change Parent State</button>
        </div>
    );
};

export default ChildComponent;