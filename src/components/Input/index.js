import React from "react";

//STYLES
import { Container, Input } from "./styles";

export default function InputField(props) {
  return (
    <Container>
      <label>{props.label}</label>
      <Input type="text" id={props.name} width={props.width} />
    </Container>
  );
}
