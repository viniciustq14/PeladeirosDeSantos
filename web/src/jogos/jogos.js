import React from 'react'
import './style.css'
function Jogo(){
    const teste =[{'dt':'12/12/1997'},{'dt':'19/12/1997'},{'dt':'21/12/1997'},{'dt':'01/01/1998'},]
 return(
     <div>
         {teste.map(Jogo=>(

            <div className='jogo'>
                <p><strong>Dia :</strong> {Jogo.dt}  </p>
            </div>
         ))}
            
         
     </div>
 )
}

export default Jogo;