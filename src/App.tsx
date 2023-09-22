import React from 'react';
import Cabecalho from './components/Cabecalho'
import Carossel from './components/Carossel';
import Categorias from './components/Categorias';
import Produtos from './components/Produtos';


function App() {
  return (
    <>
      <Cabecalho />
      <Carossel/>
      <Categorias/>
      <Produtos/>
    </>
  );
}

export default App;
