import React from "react";

//STYLES
import { Container, Content, Image, Fields } from "./styles.js";

//GLOBAL COMPONENTS
import Section from "../../../components/Section";
import Input from "../../../components/Input";
import Button from "../../../components/Button";

export default function Personal() {
  return (
    <Container>
      <Section label="Perfil">
        <Content>
          <Image>
            <img
              src="https://www.w3schools.com/howto/img_avatar.png"
              alt="profile"
            />
          </Image>
          <Fields>
            <div>
              <label>
                <span>Nome</span>
                <Input />
              </label>
              <label>
                <span>Sobrenome</span>
                <Input />
              </label>
            </div>
            <div>
              <label>
                <span>DDD</span>
                <Input />
              </label>
              <label>
                <span>Telefone</span>
                <Input />
              </label>
            </div>
            <div>
              <label>
                <span>E-mail</span>
                <Input />
              </label>
            </div>
            <div>
              <Button primary label="Salvar" />
            </div>
          </Fields>
        </Content>
      </Section>
    </Container>
  );
}
