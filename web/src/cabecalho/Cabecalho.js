import React from 'react';
import { Link } from 'react-router-dom'
import './style.css';

function Cabecalho() {
    return (
        <div className='cabecalho'>
            <header>
                <h1>Peladeiros De Santos</h1>
            </header>
            <div className='menu'>
                <Link to='jogador'>
                    <div id='jogadores'>
                        <h2>jogadores</h2>
                    </div>
                </Link>
                <div id='jogo'>
                    <h2>
                        dias de partidas
                    </h2>
                </div>
            </div>
        </div>
    );
}

export default Cabecalho;