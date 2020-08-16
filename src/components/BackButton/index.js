import React from "react";
import { Link } from "react-router-dom";

//STYLES
import { Container } from "./styles";

//ASSETS
import { back } from "../../assets/icons";

export default function BackButton({ link }) {
  return (
    <Link to={link}>
      <Container>
        <img src={back} alt="back button" />
        <span>Voltar</span>
      </Container>
    </Link>
  );
}
