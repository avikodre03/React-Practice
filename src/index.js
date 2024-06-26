import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { CustomProvider } from './Components/ContextApi/Context';
// import { BrowserRouter } from "react-router-dom"

import { Provider } from 'react-redux';
import myStore from './Components/Redux/Store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  
    <Provider store={myStore}>

      <App />
    </Provider>

  

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
