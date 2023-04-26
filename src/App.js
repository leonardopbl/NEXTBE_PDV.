import React from 'react';

import InfoSession from './components/InfoSession';
import ProductRow from './components/ProductRow';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <div className="flex flex-col h-screen">
        <div className="aside">
          <h1>side</h1>
          <div className="w-64">
            <li><a href="#">Vendas</a></li>
            <li><a href="#">Consultar vendas</a></li>
            <li><a href="#">Fechar caixa</a></li>
          </div>
        </div>
        <div className="main">
          <div className="w-full grid justify-between">
            <div className="infosession" class="flex flex-row justify-between">
              <InfoSession ></InfoSession>
            </div>
            <div className="searchbar">
              <SearchBar />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default App;
