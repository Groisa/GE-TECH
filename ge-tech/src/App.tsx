import React from 'react';

import 'animate.css'
import styled from 'styled-components';
import { Layout } from './Components/Layout';
import { AiOutlineInstagram } from 'react-icons/ai'
import { BsGithub } from 'react-icons/bs'

function App() {
  return (
    <Layout>
      <ContainerMain>
        <div>
          <h1>GE-TECH</h1>
          <div>
            <AiOutlineInstagramStyled />
            <BsGithubStyled />
          </div>
          <div>

          </div>
        </div>
      </ContainerMain>
    </Layout>
  );
}
const AiOutlineInstagramStyled = styled(AiOutlineInstagram)`
  cursor: pointer;
  :hover {
      animation: rotateIn; 
      animation-duration: 1s; 
      color: #00ff;
  }
  :active {
      animation: rotateIn; 
      animation-duration: 1s; 
      color: #00ff;
      
  }
`
const BsGithubStyled = styled(BsGithub)`
  cursor: pointer;
  :hover {
      animation: rotateIn; 
      animation-duration: 1s; 
      color: #00ff;
     
  }
  :active {
      animation: rotateIn; 
      animation-duration: 1s; 
      color: #00ff;
  }
`
const ContainerMain = styled.div`
  div {
      h1 {
      margin-top: 150px;
      font-size: 100px;
      background: linear-gradient(to right bottom, #212121, #343334, #484648, #5f5a5c, #766e70, #898082, #9c9395, #afa6a8, #c2bcbe, #d5d2d4, #e9e8ea, #ffffff);
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
      font-weight: 700;
      text-align: center;
      width: 100%;
      animation: pulse; 
      animation-duration: 3s; 
      :hover {
            scale: 0.9;
            font-size: 90px;
            transition: 2s;
            text-shadow: 4px 4px 2px rgba(255,255,255,0.6);
        
        }
      }
      div {
        color: #fff;
        font-size: 30px;
        display: flex;
        gap: 25px;
        margin-top: 120px;
        flex-direction: column;
        padding-left: 30px;
      }
  }
    width: 100%;
`
export default App;
