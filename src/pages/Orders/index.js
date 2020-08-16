import React from "react";

//STYLES
import { Container } from "./styles.js";

//GLOBAL COMPONENTS
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";

//LOCAL COMPONENTS
import Order from "./Order";

export default function Orders() {
  return (
    <Container>
      <Header />
      <SearchBar placeholder="Busque pelo número, valor ou status do pedido..." />
      <Order />
    </Container>
  );
}
