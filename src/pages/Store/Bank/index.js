import React, { useState } from "react";

//GLOBAL COMPONENTS
import Section from "../../../components/Section";
import Button from "../../../components/Button";
import Input from "../../../components/Input";

//STYLES
import { Container, Content } from "./styles";

export default function Bank() {
  const [bank] = useState({ name: "", agency: "", accountNumber: "" });

  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <Section label="Dados bancários">
        <Content>
          <div>
            <label>
              <span>Banco</span>
              <Input
                name="name"
                onChange={(e) => (bank.name = e.target.value)}
              />
            </label>
          </div>
          <div>
            <label>
              <span>Agência</span>
              <Input
                name="agency"
                onChange={(e) => (bank.agency = e.target.value)}
              />
            </label>
            <label>
              <span>Conta corrente</span>
              <Input
                name="accountNumber"
                onChange={(e) => (bank.accountNumber = e.target.value)}
              />
            </label>
          </div>
          <div>
            <Button onClick={handleClick} primary label="Salvar" />
          </div>
        </Content>
      </Section>
    </Container>
  );
}
