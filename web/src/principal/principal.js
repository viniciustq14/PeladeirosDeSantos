import React from 'react';
import {Link} from 'react-router-dom'
import './style.css';


function Principal() {
  return (
    <>
     
      <div className="botoes">
      <Link to='jogador'>
        <button>Cadastrar Jogadores</button>
      </Link>
        <button>Iniciar Dia De Jogo </button>

      </div>
    </>
  );
}

export default Principal;
