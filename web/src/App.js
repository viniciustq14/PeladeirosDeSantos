import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Principal from './principal/principal' 
import Cabecalho from './cabecalho/Cabecalho'
import Jogador from './jogador/jogador.js'
import './App.css';

function App() {
  return (
   <div>
     <BrowserRouter>
     <Cabecalho/>
            <Switch>
                <Route path='/' exact component={Principal}/>
                <Route path='/jogador' component={Jogador}/>
            </Switch>
        </BrowserRouter>
     

   </div>

   
  );
}

export default App;
