import React from "react";

//STYLES
import { Container } from "./styles.js";

//GLOBAL COMPONENTS
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";

export default function Products() {
  return (
    <Container>
      <Header />

      <SearchBar />
    </Container>
  );
}
