import React from "react";

//STYLES
import { Container, Content, Heading } from "./styles";

export default function Section({ children, label }) {
  return (
    <Container>
      <Heading>
        <span>{label}</span>
      </Heading>
      <Content>{children}</Content>
    </Container>
  );
}
