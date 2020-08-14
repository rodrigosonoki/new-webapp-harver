import React from "react";

//STYLES
import { Container, Content } from "./styles";

//ASSETS
import { search } from "../../assets/icons";

export default function SearchBar(props) {
  return (
    <Container>
      <Content>
        <input placeholder={props.placeholder}></input>
        <button onClick={() => console}>
          <img src={search} alt="search icon" />
          Buscar
        </button>
      </Content>
    </Container>
  );
}
