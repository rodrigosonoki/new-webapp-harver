import React from "react";
import { Link } from "react-router-dom";

//STYLES
import { Container, Image, Description } from "./styles";

export default function Product(props) {
  return (
    <Link to={`/products/${props.productId}`}>
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
