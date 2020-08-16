import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 24px;
`;

export const Content = styled.div`
  max-width: 1200px;
  width: 100%;
  border: 1px solid ${(props) => props.theme.colors.lineInWhite};
  padding: 16px;
  border-radius: 4px;
  background: #fff;
`;

export const StyledHeading = styled.div`
  font: 700 24px Archivo;
`;
