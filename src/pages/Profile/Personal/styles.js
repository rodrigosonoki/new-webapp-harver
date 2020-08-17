import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1248px;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  padding: 0 0 8px 0;
  align-items: center;
`;

export const Fields = styled.form`
  width: 100%;

  div {
    display: flex;
    margin-bottom: 16px;

    label {
      width: 100%;
    }

    &:nth-child(2) label:nth-child(1) {
      width: 10%;
    }

    &:nth-child(1),
    &:nth-child(2) {
      label:nth-child(1) {
        margin-right: 16px;
      }
    }
  }
  div:nth-child(4) {
    justify-content: flex-end;
  }
`;
