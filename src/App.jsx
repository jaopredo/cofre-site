import React, { useState } from 'react';

import './App.css';

/* COMPONENTS */
import Cofre from './components/Cofre'

function App() {
   const [animate, setAnimate] = useState(false)

   return (
      <div className="App">
         <Cofre animate={animate} setAnimate={setAnimate}/>
      </div>
   );
}

export default App;
