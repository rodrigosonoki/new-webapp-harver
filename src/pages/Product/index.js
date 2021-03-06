import React from "react";

//GLOBAL COMPONENTS
import Header from "../../components/Header";

//LOCAL COMPONENTS
import Description from "./Description";
import Photo from "./Photo";
import Buttons from "./Buttons";

//STYLES
import { Container } from "./styles";

export default function Product() {
  return (
    <Container>
      <Header />
      <Photo />
      <Description />
      <Buttons />
    </Container>
  );
}
