/**
 * Arquivo principal da aplicação.
 * 1º arquivo carregado pelo React
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//Rederiza o App dentro do id 'root'
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);