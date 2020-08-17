import styled from "styled-components";

export const Container = styled.div``;

export const Content = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0 0 8px 0;

  div {
    display: flex;
    margin-bottom: 16px;
  }

  div:nth-child(2) {
    label {
      margin-right: 16px;
    }
  }

  label {
    width: 100%;
  }

  div:nth-child(3) {
    justify-content: flex-end;
  }
`;
