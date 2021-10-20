import React from 'react';

import changeInputState from '../controller/ChangeInputState';

function Teclado({ inputValue, setInputValue }) {
   let keys = [1, 2, 3, 4, 5, 6, 7, 8, 9];
   return (
      <div id='teclado'>
         {keys.map(number => <button onClick={e => changeInputState(inputValue, setInputValue, inputValue + number)} className='key' key={'key-'+number}>{number}</button>)}
      </div>
   );
}

export default Teclado;