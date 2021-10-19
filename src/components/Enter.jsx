import styled from 'styled-components'

export default styled.button`
   color: white;
   height: 95%;
   border-radius: 10px;
   font-size: 20pt;
   background-color: #545454;
   display: flex;
   align-items: center;
   justify-content: center;
   box-shadow: 0px 0px 4px black;
   grid-area: enter;

   &:hover {
      background-color: #5a5a5a;
   }
   &:active {
      background-color: #3a3a3a;
   }
`