import React, { useState, useEffect } from "react";

//STYLES
import { Container, Content } from "./styles";

//GLOBAL COMPONENTS
import Section from "../../../components/Section";
import Input from "../../../components/Input";
import Button from "../../../components/Button";

const data = {
  zipCode: "05427010",
  street: "Rua Fernão Dias",
  number: "323",
  complement: "42",
  neighborhood: "Pinheiros",
  city: "São Paulo",
  state: "SP",
};

const initialState = {
  zipCode: "",
  street: "",
  number: "",
  complement: "",
  neighborhood: "",
  city: "",
  state: "",
};

export default function Address() {
  const [cep, setCep] = useState("");
  const [item, setItem] = useState(initialState);
  const [completeAddress, setCompleteAddress] = useState(true);
  const [buttonText, setButtonText] = useState("Salvar");
  const [readOnly, setReadyOnly] = useState(true);

  useEffect(() => {
    setItem(data);
  }, []);

  const getAddress = async () => {
    if (cep.length === 8) {
      setItem(initialState);
      const response = await fetch(
        `https://brasilapi.com.br/api/cep/v1/${cep}`
      );
      const address = await response.json();
      setReadyOnly(false);
      setItem(address);
      setCompleteAddress(true);
      if (address.neighborhood === "" || address.street === "") {
        setCompleteAddress(false);
      }
    }
  };

  const saveAddress = async (e) => {
    e.preventDefault();
    setButtonText("Salvando...");

    setButtonText("Salvar");
    setReadyOnly(true);
  };

  return (
    <Container>
      <Section label="Endereço de cobrança">
        <Content>
          <div>
            <label>
              <span>CEP</span>
              <Input
                onChange={(e) => setCep(e.target.value)}
                onKeyUp={getAddress}
                maxLength="8"
                name="zipCode"
                defaultValue={item.zipCode}
              />
            </label>
            <label>
              <span>Rua</span>
              {(() => {
                if (completeAddress) {
                  return (
                    <Input name="street" defaultValue={item.street} readOnly />
                  );
                } else {
                  return (
                    <Input
                      name="street"
                      defaultValue={item.street}
                      onChange={(e) => (item.street = e.target.value)}
                    />
                  );
                }
              })()}
            </label>
          </div>
          <div>
            <label>
              <span>Número</span>
              {(() => {
                if (readOnly) {
                  return (
                    <Input name="number" defaultValue={item.number} readOnly />
                  );
                } else {
                  return (
                    <Input
                      name="number"
                      onChange={(e) => (item.number = e.target.value)}
                    />
                  );
                }
              })()}
            </label>
            <label>
              <span>Complemento</span>
              {(() => {
                if (readOnly) {
                  return (
                    <Input
                      name="complement"
                      defaultValue={item.complement}
                      readOnly
                    />
                  );
                } else {
                  return (
                    <Input
                      name="complement"
                      onChange={(e) => (item.complement = e.target.value)}
                    />
                  );
                }
              })()}
            </label>
          </div>
          <div>
            <label>
              <span>Bairro</span>
              {(() => {
                if (completeAddress) {
                  return (
                    <Input
                      name="neighborhood"
                      defaultValue={item.neighborhood}
                      readOnly
                    />
                  );
                } else {
                  return (
                    <Input
                      name="neighborhood"
                      defaultValue={item.neighborhood}
                      onChange={(e) => (item.neighborhood = e.target.value)}
                    />
                  );
                }
              })()}
            </label>
            <label>
              <span>Cidade</span>
              <Input name="city" defaultValue={item.city} readOnly />
            </label>
            <label>
              <span>UF</span>
              <Input name="state" defaultValue={item.state} readOnly />
            </label>
          </div>
          <div>
            <Button primary onClick={saveAddress} label={buttonText} />
          </div>
        </Content>
      </Section>
    </Container>
  );
}
