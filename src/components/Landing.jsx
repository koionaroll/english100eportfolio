import styled, { keyframes } from "styled-components";
import bg from "../assets/images/herobg.jpg";
import React from "react";

const fadeInMove = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Bg = styled.div`
  height: 100vh;
  scroll-snap-align: start;
  background-position: center;
  scroll-snap-stop: always;
  background-size: cover;
  background-image: url(${bg});
  position: relative;
  button{
    position:absolute;
    bottom:5rem; 
    left:4rem; 
    border:none;
    font-size:2rem;
    font-weight:500;
    color:#f4f4f4;
    text-align: left;
    width:60vw;
    background-color:transparent;
    cursor: pointer;
  }
`;

const TextLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ClassInfo = styled.p`
  position: absolute;
  top: 10px;
  left: 10px;
  font-weight: bold;
  color: #f4f4f4;
  
`;

const Name = styled.h1`
  font-size: 8rem;
  font-weight: bold;
  color: #f4f4f4;

  transform: translateY(-50px);
  animation: ${fadeInMove} 1.5s ease-out forwards;
`;


function Landing() {
  const clickDown = ()=>{
    window.scrollBy(0,1);
  }
  return (
    <Bg>
      <TextLayer>
        <ClassInfo>English 100 E-Portfolio</ClassInfo>
        <Name>Khôi Tran</Name>
      </TextLayer>
    <button onClick={()=>clickDown()}>v</button>
    </Bg>
  );
}

export default Landing;
