import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // App.jsx will be created in the next step
import './index.css'; // Optional: Only if you want basic styles





const reactElement= React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'Click me to open new tab'
)

ReactDOM.createRoot(document.getElementById('root')).render(
    reactElement
  
);
