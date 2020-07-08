import React from 'react'
import './style.css'
function Jogador(){
    const teste =[{'name':'vinicius', 'telefone' : 1,'jogos':2},
    {'name':'igorr', 'telefone' : 1,'jogos':2},
    {'name':'heloisa', 'telefone' : 1,'jogos':2},
    {'name':'antonia', 'telefone' : 1,'jogos':2},
    {'name':'lauro', 'telefone' : 1,'jogos':2},]
 return(
     <div>
         {teste.map(Jogador=>(

            <div className='jogador'>
                <p><strong>Nome :</strong> {Jogador.name} <strong>Telefone :</strong> {Jogador.telefone}  <strong>domingos jogados :</strong> {Jogador.jogos} </p>
            </div>
         ))}
            
        <button className='add'>+</button>    
     </div>
 )
}

export default Jogador;