import React from "react";

//STYLES
import { Container, Content } from "./styles";

//LOCAL COMPONENTS
import Heading from "../Heading";

export default function Details() {
  return (
    <Container>
      <Content>
        <Heading text="Detalhes do pedido" />
      </Content>
    </Container>
  );
}
