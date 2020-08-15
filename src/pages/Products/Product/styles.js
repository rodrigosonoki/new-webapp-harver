import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  align-items: center;
  padding: 16px 24px;
  border: 1px solid ${(props) => props.theme.colors.lineInWhite};
  border-radius: 4px;
  background: #f8f8fc;
`;

export const Image = styled.img`
  width: 238px;
  border-radius: 4px;
`;

export const Description = styled.div`
  width: 240px;
  padding: 8px 16px;

  span {
    font: 700 16px Archivo;
  }
`;
