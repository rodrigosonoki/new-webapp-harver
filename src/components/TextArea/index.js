import React from "react";

//STYLES
import { Container, TextArea } from "./styles";

export default function TextAreaField(props) {
  return (
    <Container>
      <label>{props.label}</label>
      <TextArea type="text" id={props.name} width={props.width} />
    </Container>
  );
}
