import React, { InputHTMLAttributes, SelectHTMLAttributes } from 'react';

import { Label, Select } from './styles';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const InputMax: React.FC<InputProps> = ({ name, type, placeholder }) => {
  return (
    <Label widthStyle="max">
      {name}
      <input id={name} type={type} placeholder={placeholder} />
    </Label>
  );
};

export const InputMin: React.FC<InputProps> = ({
  name,
  type,
  placeholder,
  maxLength,
}) => {
  return (
    <Label widthStyle="min">
      {name}
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        maxLength={maxLength}
      />
    </Label>
  );
};

export const SelectInput: React.FC<SelectHTMLAttributes<HTMLSelectElement>> = ({
  name,
}) => {
  return (
    <Select>
      {name}
      <select>
        <option value="nao">NÃO</option>
        <option value="sim">SIM</option>
      </select>
    </Select>
  );
};
