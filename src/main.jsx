import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles.css'; // Import styles0
import { CounterApp } from './CounterApp';

ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        {/* <FirstApp title="Hola, soy hector" subTitle={ 123 } /> */}
        <CounterApp value={100} />
    </React.StrictMode>
)