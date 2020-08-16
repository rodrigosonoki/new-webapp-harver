import React from "react";

//STYLES
import { Container } from "./styles";

export default function Button(props) {
  return (
    <Container primary={props.primary} onClick={props.handleClick}>
      {props.label}
    </Container>
  );
}
