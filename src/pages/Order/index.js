import React from "react";

//GLOBAL COMPONENTS
import Header from "../../components/Header";

//LOCAL COMPONENTS
import Details from "./Details";

//STYLES
import { Container } from "./styles";

export default function Order() {
  return (
    <Container>
      <Header />
      <Details />
    </Container>
  );
}
