import styled from 'styled-components';

import covidBackground from '../../assets/covidBackground.jpeg';

export const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export const CardLeft = styled.div`
  display: flex;
  flex: 1;
  min-width: 700px;

  > div {
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

export const ButtonCadastrar = styled.button`
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

  &:hover {
    background-color: #777;
  }
`;
