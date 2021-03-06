import React from "react";

//STYLES
import { Container, Content } from "./styles.js";

//GLOBAL COMPONENTS
import Header from "../../components/Header";

//LOCAL COMPONENTS
import Address from "./Address";
import Bank from "./Bank";

export default function Store() {
  return (
    <Container>
      <Header />
      <Content>
        <Address />
        <Bank />
      </Content>
    </Container>
  );
}
