import React, { InputHTMLAttributes, ReactNode } from 'react';
import { Container } from './styles';

interface FormProps extends InputHTMLAttributes<HTMLFormElement> {
  children: ReactNode,
}

export function Form({children}: FormProps) {
  return (
    <Container>
      { children }
    </Container>
  );
}

export default Form;
