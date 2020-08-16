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

  div {
    float: right;

    button {
      margin-left: 16px;
    }
  }
`;
