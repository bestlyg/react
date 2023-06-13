import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

const dom = document.createElement('div');
document.body.appendChild(dom);

const container = ReactDOM.createRoot(dom);

container.render(<App />);