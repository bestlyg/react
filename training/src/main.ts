import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

const dom = document.createElement('div');
console.log(React, ReactDOM);

ReactDOM.render(<App />, dom);

document.body.appendChild(dom);

console.log(module, import.meta);
