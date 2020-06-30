import React from 'react';

import './style.css';
import Cabecalho from '../cabecalho/Cabecalho'

function Principal() {
  return (
    <>
    <Cabecalho/>
    <button>Cadastrar Jogadores</button>
    <button>Iniciar Dia De Jogo </button>
    </>
  );
}

export default Principal;
