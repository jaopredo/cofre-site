import React from 'react';
import './App.css';

/* COMPONENTS */
import Cofre from './components/Cofre'
import Dica from './components/Dica';

function App() {

   return (
      <div className="App">
         <Cofre/>
         <Dica>
            <h1>DICA</h1>
            Eu estou em você, eu causo sua queda ao tropeçar,
            sua incapacidade de levitar, eu lhe mantenho preso aqui...
            Quem sou eu?
         </Dica>
      </div>
   );
}

export default App;
