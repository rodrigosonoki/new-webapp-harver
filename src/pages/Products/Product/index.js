import React from "react";
import { Link } from "react-router-dom";

//STYLES
import { Container, Image, Description } from "./styles";

export default function Product(props) {
  return (
    <Link>
      <Container>
        <Image src={props.productImage} />
        <Description>
          <span>{props.productName}</span>
          <p>{props.productPrice}</p>
        </Description>
      </Container>
    </Link>
  );
}
