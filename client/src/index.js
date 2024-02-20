import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {configureStore} from "@reduxjs/toolkit"//La fonction configureStore est une fonction fournie par Redux Toolkit qui est utilisée pour créer un store Redux dans une application React. Elle simplifie la configuration du store en fournissant des options prédéfinies pour la gestion du middleware, la détection des mutations, et d'autres paramètres couramment utilisés.
import reducers from "./reducers"
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux"
const root = ReactDOM.createRoot(document.getElementById('root'));
const store=configureStore({
  reducer :{reducers}
})
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
