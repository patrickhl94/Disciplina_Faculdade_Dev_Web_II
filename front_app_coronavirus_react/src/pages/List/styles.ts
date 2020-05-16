import styled, { keyframes } from 'styled-components';

import covidBackground from '../../assets/covidBackground2.jpg';

export const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const animateLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(90px)
  }
 
  to {
    opacity: 1
    transform: translateX(-90px)
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
    padding: 20px 35px;

    border-radius: 15px;
    border-right-color: #288c68;
    border-right-style: solid;
    border-right-width: 8px;

    h1 {
      color: #999;
      margin-bottom: 18px;
    }

    > svg {
      margin-bottom: 18px;
      cursor: pointer;
      border-radius: 8px;
      transition: all 0.2s 0.2s ease-in-out;

      &:hover {
        background-color: #113a00;
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

export const LinkListagem = styled.footer`
  display: flex;
  justify-content: flex-start;
  padding-left: 60px;
  padding-top: 10px;

  a {
    display: flex;
    align-items: center;
    border-right-color: #288c68;
    border-right-style: solid;
    border-right-width: 6px;
    border-radius: 9px;
    padding: 8px;
    transition: all 0.2s 0.2s ease-in-out;
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
    margin-right: 10px;
  }
`;

export const ListCases = styled.ul`
  list-style: none;

  li {
    display: flex;
    justify-content: space-between;
    background: #a3d3bf;
    padding: 10px 15px;
    border-radius: 10px;

    & + li {
      margin-top: 10px;
    }

    section {
      display: flex;
      align-self: center;
      flex-direction: column;
      flex: 1;

      div {
        strong {
          color: #222;
          margin-right: 10px;
        }

        span {
          align-items: center;
          color: #555;
          margin-right: 12px;
        }
      }
    }
  }
`;

export const AreaIcons = styled.div`
  display: flex;
  flex-direction: column;

  svg {
    cursor: pointer;
    border-radius: 5px;
    transition: all 0.2s 0.2s ease-in-out;
    padding: 2px;

    &:hover {
      background: #81c4a8;
    }

    & + svg {
      margin-top: 10px;
    }
  }
`;

export const ContainerPage = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  padding-top: 15px;
  color: #fff;

  svg {
    margin: 0 20px;
    border-radius: 5px;
    cursor: pointer;
  }
`;

export const ContainerSubHeader = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 5px;
  margin-right: 5px;
  align-items: center;
  margin-bottom: 18px;
`;

export const CasesConfirmed = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  color: #bbb;
  font-weight: 700;
  font-size: 21px;

  svg {
    margin-left: 12px;
  }
`;
