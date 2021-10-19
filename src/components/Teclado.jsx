import React from 'react';

function Teclado() {
   let keys = [1, 2, 3, 4, 5, 6, 7, 8, 9];
   return (
      <div id='teclado'>
         {keys.map(number => <button className='key' key={'key-'+number}>{number}</button>)}
      </div>
   );
}

export default Teclado;