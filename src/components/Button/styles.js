import styled from "styled-components";

export const Container = styled.button`
  height: 48px;
  border: ${(props) =>
    props.primary ? "none" : `1px solid ${props.theme.colors.lineInWhite}`};
  width: 160px;
  background: ${(props) =>
    props.primary ? `${props.theme.colors.secondary}` : "#fff"};
  font: 400 14px Poppins;
  color: ${(props) => (props.primary ? "#fff" : "#303030")};
  padding: 8px;
  border-radius: 4px;
  transition: 0.2s;
  cursor: pointer;
  outline: none;

  &:hover {
    background: ${(props) =>
      props.primary ? `${props.theme.colors.secondaryDark}` : "#f0f0f0"};
    transition: 0.2s;
  }
`;
