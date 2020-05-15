import styled, { keyframes } from 'styled-components';

import covidBackground from '../../assets/covidBackground.jpg';

interface ButtonProps {
  displayLoader?: boolean;
}

export const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const animateLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100px)
  }
 
  to {
    opacity: 1
    transform: translateX(100px)
  }
`;

export const CardLeft = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 700px;

  > div {
    animation: ${animateLeft} 1s;
    display: flex;
    flex-direction: column;
    margin: auto;
    background: #222;
    padding: 30px 35px;
    border-radius: 15px;

    border-left-color: #6f2725;
    border-left-style: solid;
    border-left-width: 8px;

    h1 {
      color: #999;
      margin-bottom: 35px;
    }

    > div {
      display: flex;
      justify-content: flex-end;
      small {
        font-weight: 500;
        margin-top: 5px;
        color: #ea0000;
      }
    }
  }
`;
export const CardRight = styled.div`
  flex: 1;
  background: url(${covidBackground}) no-repeat center;
  background-size: cover;
`;

export const ContainerRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ButtonCadastrar = styled.button<ButtonProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: #999;
  font-weight: 700;
  margin-top: 25px;
  color: #222;
  font-size: 23px;
  padding: 8px;
  cursor: pointer;
  border: none;
  border-radius: 8px;
  transition: background-color 0.2s;

  span {
    display: ${props => props.displayLoader && 'none'};
  }

  svg {
    margin-left: 15px;
    display: ${props => !props.displayLoader && 'none'};
  }

  &:hover {
    background-color: #777;
  }
`;

export const LinkListagem = styled.footer`
  display: flex;

  justify-content: flex-end;
  align-items: flex-end;
  padding-right: 60px;

  a {
    display: flex;
    align-items: center;
    border-left-color: #6f2725;
    border-left-style: solid;
    border-left-width: 6px;
    border-radius: 9px;
    padding: 8px;
    transition: background-color 0.2s;
    animation: ${animateLeft} 2s;

    color: #fff;
    font-weight: 700;
    font-size: 22px;
    text-decoration: none;
    margin-bottom: 40px;

    &:hover {
      background-color: #111;
    }
  }
  svg {
    margin-left: 10px;
  }
`;
