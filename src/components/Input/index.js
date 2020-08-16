import React from "react";

//STYLES
import { Container, Input } from "./styles";

export default function InputField({ label, name, width, ...rest }) {
  return (
    <Container>
      <label>{label}</label>
      <Input type="text" name={name} width={width} {...rest} />
    </Container>
  );
}
