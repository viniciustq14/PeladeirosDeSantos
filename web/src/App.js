import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Principal from './principal/principal' 
import Cabecalho from './cabecalho/Cabecalho'
import './App.css';

function App() {
  return (
   <div>
     <Cabecalho/>
     <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Principal}/>
              
            </Switch>
        </BrowserRouter>
     

   </div>

   
  );
}

export default App;
