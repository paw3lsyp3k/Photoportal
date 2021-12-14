import React from 'react';
import { Label } from '../../atoms/Label/Label'
import { Input } from '../../atoms/Input/Input'
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 0 15px 0;
  ${Label} {
    margin:5px 0;
  }
`;


const FormField = ({onChange, value, label, name, id, type = 'text', ...props}) => {
  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      <Input name={name} id={id} type={type} value={value} onChange={onChange} data-testid={label} />
    </Wrapper>
  );
};


export default FormField;