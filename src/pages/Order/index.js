import React from "react";

//GLOBAL COMPONENTS
import Header from "../../components/Header";

//LOCAL COMPONENTS
import Details from "./Details";

//STYLES
import { Container, Content } from "./styles";
import BackButton from "../../components/BackButton";

export default function Order() {
  return (
    <Container>
      <Header />
      <Content>
        <BackButton link="/orders" />
        <Details />
      </Content>
    </Container>
  );
}
