import React from "react";

//STYLES
import { Container, Content } from "./styles.js";

//GLOBAL COMPONENTS
import Header from "../../components/Header";

//LOCAL COMPONENTS
import Personal from "./Personal";

export default function Profile() {
  return (
    <Container>
      <Header />
      <Content>
        <Personal />
      </Content>
    </Container>
  );
}
