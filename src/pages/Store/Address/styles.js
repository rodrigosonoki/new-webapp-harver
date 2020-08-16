import styled from "styled-components";

export const Container = styled.div``;

export const Content = styled.form`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    margin-bottom: 16px;
  }

  label {
    width: 100%;
  }

  label:not(:last-child) {
    margin-right: 16px;
  }

  div:nth-child(1) {
    label:nth-child(1) {
      width: 20%;
    }
  }

  div:nth-child(2) {
    label:nth-child(1) {
      width: 15%;
    }
  }

  div:nth-child(3) {
    label:nth-child(3) {
      width: 10%;
    }
  }
`;
