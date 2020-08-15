import React from "react";

//STYLES
import { Container, Image, Description } from "./styles";

export default function Product(props) {
  return (
    <Container>
      <Image src={props.productImage} />
      <Description>
        <span>{props.productName}</span>
        <p>{props.productPrice}</p>
      </Description>
    </Container>
  );
}
