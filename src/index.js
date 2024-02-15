import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root')); // error Element not (s) inside the public folder/index.html we have a root id inside a div. Just a html boilerpalte.
root.render(<App />);