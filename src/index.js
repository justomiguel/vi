import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'; // este es opcional, sólo si tienes algún archivo css global

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
