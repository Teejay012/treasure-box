"use client";
import React from 'react';
import styled from 'styled-components';


const Header = () => {
  return (
    <HeadingContainer>
        <img src="/images/acc.png" alt="img" />
        <h1>My Account</h1>
    </HeadingContainer>
  )
}


const HeadingContainer = styled.header`
  width: 100%;
  height: 345px;
  overflow: hidden;
  position: relative;
  img{
    height: 150%;
    width: 100%;
    object-position: center;
    object-fit: cover;
    position: absolute;
    left: 0;
    top: -50%;
  }
    h1{
        font-size: 50px;
        font-weight: 700;
        z-index: 10;
        position: absolute;
        left: 70px;
        bottom: 50px;

        @media (max-width: 800px) { 
            font-size: 35px;  
            left: 40px;
            bottom: 40px;
        }
        @media (max-width: 500px) { 
            font-size: 20px;  
        }
    }
        
    @media (max-width: 700px) { 
            height: 215px;  
        }
`;

export default Header