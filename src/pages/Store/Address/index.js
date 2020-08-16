import React, { useState } from "react";
import { useForm } from "react-hook-form";

//STYLES
import { Container, Content } from "./styles";

//GLOBAL COMPONENTS
import Section from "../../../components/Section";
import Input from "../../../components/Input";

export default function Address() {
  const { register, handleSubmit } = useForm();
  const [item, setItem] = useState({
    zipCode: "",
    street: "",
    county: "",
    city: "",
    state: "",
  });

  const getAddress = async (e) => {
    const response = await fetch(
      `https://brasilapi.com.br/api/cep/v1/${e.zipCode}`
    );
    const address = await response.json();
    await setItem(address);
  };

  return (
    <Container>
      <Section label="Endereço">
        <Content onSubmit={handleSubmit(getAddress)}>
          <input name="zipCode" ref={register} />
          <input name="street" defaultValue={item.street} ref={register} />
          <input
            name="county"
            defaultValue={item.neighborhood}
            ref={register}
          />
          <input name="city" defaultValue={item.city} ref={register} />
          <input name="state" defaultValue={item.state} ref={register} />
          <button type="submit">Enviar</button>
        </Content>
      </Section>
    </Container>
  );
}
