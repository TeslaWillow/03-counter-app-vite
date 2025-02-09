import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles.css'; // Import styles0
import { FirstApp } from './FirstApp';

ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        <FirstApp  subTitle={ 123 } />
        {/* <CounterApp value={100} /> */}
    </React.StrictMode>
)