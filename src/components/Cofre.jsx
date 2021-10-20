import React, { useRef, useState } from 'react';

/* CSS */
import './css/cofre.css';

/* IMAGES */
import Shiva from '../images/Shiva.png'
import Buda from '../images/Buda.png'

/* CONTROLERS */
import handleClickSendButton from '../controller/CheckResp';

/* COMPONENTS */
import Visor from './Visor';
import Enter from './Enter';
import Teclado from './Teclado';



function Cofre({animate, setAnimate, ...rest }) {
   const inputRef = useRef(null);
   const cofreRef = useRef(null);
   const [inputValue, setInputValue] = useState('');

   return (
      <div id='interno'>
         <div id='cofre' className='cofre' ref={cofreRef} {...rest} onAnimationEnd={e=>e.target.style.zIndex = '-1'}>
            <div className='contorno'>
               <div id='visor'>
                  <Visor ref={inputRef} type='text' maxLength={4} value={inputValue} readOnly/>
               </div>
               <Teclado inputValue={inputValue} setInputValue={setInputValue}/>
               <Enter onClick={() => handleClickSendButton(
                  inputValue,
                  setInputValue,
                  inputRef,
                  cofreRef,
               )}>ENTER</Enter>
            </div>
         </div>
         <img className='totem' src={Shiva} alt='Shiva' />
         <img className='totem' src={Buda} alt='Buda' />
      </div>
   )
}

export default Cofre;