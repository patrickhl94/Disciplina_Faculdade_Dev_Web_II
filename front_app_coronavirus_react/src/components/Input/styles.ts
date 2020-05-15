import styled, { css } from 'styled-components';

interface InputProps {
  widthStyle: 'max' | 'min';
}

export const Label = styled.label<InputProps>`
  display: flex;
  flex-direction: column;
  color: #666;
  font-weight: 700;
  border-bottom: 5px;
  
${props =>
  props.widthStyle === 'max'
    ? css`
        width: 100%;
      `
    : css`
        width: 48%;
      `};
}

  input {
    color: #111;
    font-size: 18px;
    height: 45px;
    border-radius: 8px;
    border: 0;
    padding: 10px 10px;
    background: #6f2725;
    margin-bottom: 10px;
    margin-top: 5px;

    &::-webkit-inner-spin-button, &::-webkit-outer-spin-button {
        -webkit-appearance: none;
        -moz-appearance: textfield;
        margin: 0;
    }

`;

export const Select = styled.div`
  display: flex;
  flex-direction: column;
  color: #666;
  font-weight: 700;
  border-bottom: 5px;
  width: 48%;

  select {
    color: #111;
    font-size: 18px;
    height: 45px;
    border-radius: 8px;
    border: 0;
    padding: 10px 10px;
    background: #6f2725;
    margin-bottom: 10px;
    margin-top: 5px;
  }
`;
