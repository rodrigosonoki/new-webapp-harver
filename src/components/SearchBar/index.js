import React from "react";

//STYLES
import { Container, Content } from "./styles";

//ASSETS
import { search } from "../../assets/icons";

//CONTEXTS
import { useFilter } from "../../store/useFilter";

export default function SearchBar({ placeholder }) {
  const { setFilter } = useFilter();

  const handleOnChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <Container>
      <Content>
        <input placeholder={placeholder} onChange={handleOnChange}></input>
        <button>
          <img src={search} alt="search icon" />
          Buscar
        </button>
      </Content>
    </Container>
  );
}
