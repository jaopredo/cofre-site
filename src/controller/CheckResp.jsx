
export default function handleClickSendButton(e, state, visorRef){
   const input = visorRef.current
   if(state === process.env.REACT_APP_RESP) {
      input.style.backgroundColor = 'rgb(131, 247, 108)'
   } else {
      input.style.backgroundColor = 'rgb(228, 116, 116)'
   }
   setTimeout(()=>{
      input.style.backgroundColor = 'rgb(13, 0, 255)'
   }, 2000)
}
