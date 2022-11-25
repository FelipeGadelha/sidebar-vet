import React, { forwardRef, ForwardRefRenderFunction, InputHTMLAttributes } from 'react';
import { Input } from '../../fields/Input';
import Label from '../../fields/Label';
import Text from '../../fundation/Text';
import { Container } from './styles';
// import { FieldError } from 'react-hook-form'

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string,
  label?: string,
  // error?: FieldError
}

const TextField: ForwardRefRenderFunction<HTMLInputElement, TextFieldProps>
  = ({name, label, ...rest}, ref) => {
  return (
    // <Container>
      <Label htmlFor={name}>
        {label && <Text>{label}</Text>}
        <Input id={name} name={name} {...rest} ref={ref}/>
        {/* {!!error && <Text>{error.message}</Text>} */}
      </Label>
    // </Container>
  );
}

export default forwardRef(TextField);
