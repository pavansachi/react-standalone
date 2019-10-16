import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from 'react/App';

let value = ReactDOMServer.renderToString(<App />);
console.log(value);
