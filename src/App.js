import React, { useState, useCallback } from 'react';

import Button from './components/UI/Button/Button.js';
import DemoOutput from './components/Demo/DemoOutput';
import './App.css';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  console.log("%c App component-function runned!", "color: red;");

  const toggleParagraphHandler = useCallback(() => {
    setShowParagraph((prevShowParagraph) => {
      return !prevShowParagraph;
    });
  }, []);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;
