import React from "react";

//STYLES
import { Container } from "./styles";

export default function Button({
  children,
  primary,
  handleClick,
  label,
  ...rest
}) {
  return (
    <Container primary={primary} onClick={handleClick} {...rest}>
      {label}
      {children}
    </Container>
  );
}
