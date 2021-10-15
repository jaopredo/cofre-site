import React, { useState, useRef } from 'react';

import './css/cofre.css';

import handleClickSendButton from '../controller/CheckResp';

function Cofre({...rest }) {
   const [resp, setResp] = useState('')
   const visorRef = useRef(null)

   return (
      <div className='cofre' {...rest}>
         <div id='visor'><input type='text' maxLength='9' onChange={e => setResp(e.target.value)} ref={visorRef} /></div>
         <div className="container">
            <div className='paper'>
               <p>Eu estou em você, eu causo sua queda ao tropeçar, sua incapacidade de levitar, eu lhe mantenho preso aqui... Quem sou eu?r</p>
            </div>
         </div>
         <div id='enter' onClick={
            e => handleClickSendButton(e, resp, visorRef)
         }>ENTER</div>
      </div>
   )
}

export default Cofre;