import React from "react";
import { Link } from "react-router-dom";

//STYLES
import { Container, Content } from "./styles";

//GLOBAL COMPONENTS
import Button from "../../../components/Button";

export default function Buttons() {
  const i = "Hello, World!";

  const handleClick = () => {
    console.log(i);
  };

  return (
    <Container>
      <Content>
        <div>
          <Link to="/products">
            <Button label="Voltar" handleClick={handleClick} />
          </Link>
          <Button primary label="Salvar alterações" handleClick={handleClick} />
        </div>
      </Content>
    </Container>
  );
}
