import styled from "styled-components";

export const Container = styled.div``;

export const Content = styled.div`
  display: flex;
  padding: 0 0 8px 0;
  align-items: center;
`;

export const Image = styled.div`
  img {
    height: 160px;
    border-radius: 160px;
    margin-right: 24px;
  }
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
