import React, { useReducer } from 'react';

// Initial state for the theme
const initialState = {
  theme: 'light',  // Set the default theme as 'light'
};

// Reducer function to handle theme toggling
const themeReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light', // Toggle between 'light' and 'dark'
      };
    default:
      return state;
  }
};

const App = () => {
  // Use useReducer to manage state transitions
  const [state, dispatch] = useReducer(themeReducer, initialState);

  // Function to toggle the theme
  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  // Apply different styles based on the current theme
  const themeStyles = state.theme === 'light' ? {
    backgroundColor: '#fff',
    color: '#000',
  } : {
    backgroundColor: '#333',
    color: '#fff',
  };

  return (
    <div style={themeStyles}>
      <h1>Theme Toggle with useReducer</h1>
      <p>Current theme: {state.theme}</p>
      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
};

export default App;
