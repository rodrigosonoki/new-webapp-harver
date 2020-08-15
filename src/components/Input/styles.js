import styled from "styled-components";

export const Container = styled.div`
  max-width: 1248px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  max-width: ${(props) => props.width || "100%"};
  width: 100%;
  height: 48px;
`;
