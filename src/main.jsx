import React from 'react';
import ReactDOM from 'react-dom/client';

import { FirstApp } from './FirstApp';

import './styles.css'; // Import styles0

ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        <FirstApp title="Hola, soy aldo" subTitle={ 123 } />
    </React.StrictMode>
)