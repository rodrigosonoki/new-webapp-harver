import React from "react";

//GLOBAL COMPONENTS
import Input from "../../../components/Input";
import TextArea from "../../../components/TextArea";

//LOCAL COMPONENTS
import Heading from "../Heading";

//STYLES
import { Container, Content } from "./styles";

export default function Description() {
  return (
    <Container>
      <Content>
        <Heading text="Nome e descrição" />
        <Input label="Nome" width="100%" />
        <TextArea label="Descrição" />
      </Content>
    </Container>
  );
}
