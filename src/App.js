import React from 'react';
import './App.css';

import InfoSession from './components/InfoSession';
import ProductRow from './components/ProductRow';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <div className="aside">
        <li><a href="#">Vendas</a></li>
        <li><a href="#">Consultar vendas</a></li>
        <li><a href="#">Fechar caixa</a></li>
      </div>
      <div className="main">
        <div className="infosession">
          <InfoSession ></InfoSession>
        </div>
        <div className="searchbar">
          <SearchBar />
        </div>
      </div>
    </div>
  )
}


export default App;
