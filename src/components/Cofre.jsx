import React, { useRef, useState } from 'react';

/* CSS */
import './css/cofre.css';

/* CONTROLERS */
import handleClickSendButton from '../controller/CheckResp';
import handleChangeInputState from '../controller/ChangeState';

/* COMPONENTS */
import Visor from './Visor';
import Enter from './Enter';
import Teclado from './Teclado';



function Cofre({...rest }) {
   const visorRef = useRef(null);
   const [inputValue, setInputValue] = useState('');

   return (
      <div className='cofre' {...rest}>
         <div className='contorno'>
            <div id='visor'>
               <Visor type='text' maxLength={9} ref={visorRef} onChange={e => handleChangeInputState(e, setInputValue)}/>
            </div>
            <Teclado/>
            <Enter onClick={e => handleClickSendButton(e, inputValue, visorRef)}>ENTER</Enter>
         </div>
      </div>
   )
}

export default Cofre;