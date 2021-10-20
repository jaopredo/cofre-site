import React, { useState } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css';

/* COMPONENTS */
import Cofre from './components/Cofre'

function App() {
   const [animate, setAnimate] = useState(false)

   return (
      <Router>
         <div className="App">
            <Route
               path='/'
               exact
               render={()=><Cofre animate={animate} setAnimate={setAnimate}/>}
            />
         </div>
      </Router>
   );
}

export default App;
