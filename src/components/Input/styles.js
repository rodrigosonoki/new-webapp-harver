import styled from "styled-components";

export const Input = styled.input`
  max-width: ${(props) => props.maxWidth || "1200px"};
  width: ${(props) => props.width || "100%"};
  height: 48px;
  border: 1px solid ${(props) => props.theme.colors.lineInWhite};
  padding: 8px;
  border-radius: 4px;

  &[type="checkbox"] {
    height: 24px;
  }

  &:focus {
    outline: none;
    border: 1px solid ${(props) => props.theme.colors.active};
  }

  &:read-only {
    background-color: ${(props) => props.theme.colors.secondaryButtonHover};
  }
`;
