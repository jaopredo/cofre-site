import styled from "styled-components";

export default styled.div`
   position: absolute;
   word-break: break-word;
   background: linear-gradient(#FEFCAF, #FFFEDA);
   padding: 5px 20px 10px 20px;
   width: 250px;
   height: 150px;
   box-shadow: 1px 1px 3px rgba(0, 0, 0);
   border-radius: 2% / 50%;
   font: 13px "Lucida Grande", Serif;

   right: 230px;
   top: 80px;

   h1 {
      text-align: center;
      font-family: 'Permanent Marker', cursive;
      color: #eb2626;
   }

   &:before,
   &:after {
      content: '';
      z-index: -1;
      bottom: 10px;
      width: 70%;
      max-width: 300px;
      max-height: 100px;
      height: 55%;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
      transform: skew(-15deg) rotate(-6deg); 
   }

   &:after {
      transform: skew(15deg) rotate(6deg); 
   }
`;