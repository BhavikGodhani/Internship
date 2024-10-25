import React, { useContext } from 'react';
import ThemeProvider from './context5';

function ThemeToggler() {
  const { theme, toggleTheme } = useContext(ThemeProvider);

  return (  
    <button onClick={toggleTheme}>
      Toggle Theme ({theme})
    </button>
  );
}

function Data() {
    return (
      <ThemeProvider>
        <div>
          <h1>Using Context in React</h1>
          <ThemeToggler />
        </div>
      </ThemeProvider>
    );
  }
  
  export default Data;
