import React from 'react';
import ReactDOM from 'react-dom/client';



import './styles.css'; // Import styles0
import { CounterApp } from './CounterApp';

ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        {/* <FirstApp  subTitle={ 123 } /> */}
        <CounterApp value={4556} />
    </React.StrictMode>
)