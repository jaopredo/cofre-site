export default function changeInputState(inputValue, setInputValue, add){
   if (inputValue.length < 4) {
      setInputValue(add)
   }
}