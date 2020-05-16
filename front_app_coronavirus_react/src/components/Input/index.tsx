import React, { InputHTMLAttributes, SelectHTMLAttributes } from 'react';

import { Label, Select } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  handleChange(val: string): void;
}
interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  handleChange(val: string): void;
}

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
  step,
  value,
  handleChange,
}) => {
  return (
    <Label widthStyle="min">
      {name}
      <input
        value={value}
        id={name}
        type={type}
        placeholder={placeholder}
        maxLength={maxLength}
        step={step}
        onChange={event => handleChange(event.target.value)}
      />
    </Label>
  );
};

export const SelectInput: React.FC<SelectProps> = ({
  name,
  handleChange,
  value,
}) => {
  return (
    <Select>
      {name}
      <select
        value={value}
        onChange={event => handleChange(event.target.value)}
      >
        <option value="nao">NÃO</option>
        <option value="sim">SIM</option>
      </select>
    </Select>
  );
};
