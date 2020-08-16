import styled from "styled-components";

export const Container = styled.div`
  max-width: 1248px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 8px 0;
`;

export const Input = styled.input`
  max-width: ${(props) => props.maxWidth || "1200px"};
  width: ${(props) => props.width || "100%"};
  height: 48px;
  border: 1px solid ${(props) => props.theme.colors.lineInWhite};
  padding: 8px;
  border-radius: 4px;

  &:focus {
    outline: none;
    border: 1px solid ${(props) => props.theme.colors.active};
  }
`;
