import React from 'react';
import './style.css';

function Cabecalho( ){
    return(
        <div className='cabecalho'>
             <header>
                <h1>Peladeiros De Santos</h1>
            </header>
            <div className='menu'>
                <div id='jogadores'>
                    <h2>jogadores</h2>
                </div>
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