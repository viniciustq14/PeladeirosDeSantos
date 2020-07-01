import React from 'react';

import './style.css';
import Cabecalho from '../cabecalho/Cabecalho'

function Principal() {
  return (
    <>
      <Cabecalho />
      <div className="botoes">
        <button>Cadastrar Jogadores</button>
        <button>Iniciar Dia De Jogo </button>

      </div>
    </>
  );
}

export default Principal;
