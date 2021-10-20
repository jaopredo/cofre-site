
export default function handleClickSendButton(inputValue, setInputValue, inputRef, cofreRef){
   /**
    * Função que lida com o clique do botão de ENTER
    * 
    * @param {Object} e Objeto do botão que eu cliquei
    * @param {String} inputValue String do useRef
    * @param {Function} setInputValue Alterar o valor do Ref passado
    * @param {Object} inputRef Referência do input
    */
   // rgb(131, 247, 108)
   // rgb(228, 116, 116)
   // rgb(13, 0, 255)

   const input = inputRef.current; // Declaro meu input
   const cofre = cofreRef.current;

   if (inputValue !== process.env.REACT_APP_RESP) {  // Se o que eu digitei for diferente da resposta
      input.style.backgroundColor = 'rgb(228, 116, 116)';  // Cor de fundo se eu errar
      setInputValue('');
   } else {
      input.style.backgroundColor = 'rgb(131, 247, 108)';  // Cor de fundo se acertar
   }

   setTimeout(() => {
      input.style.backgroundColor = 'rgb(13, 0, 255)';
      cofre.style.opacity = '0%';
   }, 3000);
   setTimeout(()=>{
      cofre.style.zIndex = '-1';
   }, 5000)
}
