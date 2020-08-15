import React from "react";

//STYLES
import { Container } from "./styles.js";

//GLOBAL COMPONENTS
import Header from "../../components/Header";
import SearchBar from "./SearchBar";

//LOCAL COMPONENTS
import List from "./List";

export default function Products() {
  return (
    <Container>
      <Header />
      <SearchBar placeholder="Digite o nome do produto..." />
      <List />
    </Container>
  );
}
