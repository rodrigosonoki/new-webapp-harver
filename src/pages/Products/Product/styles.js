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
  cursor: pointer;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);

  @media only screen and (max-width: 768px) {
    flex-direction: row;
  }
`;

export const Image = styled.img`
  width: 200px;
  border-radius: 4px;

  @media only screen and (max-width: 768px) {
    width: 80px;
  }
`;

export const Description = styled.div`
  padding: 8px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 768px) {
    align-items: flex-start;
    width: 100%;
  }

  span {
    font: 700 16px Archivo;
  }
`;
