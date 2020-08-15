import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px 0;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: center;
  max-width: 1248px;
  width: 100%;
  padding: 0 24px 0 24px;

  input {
    border-radius: 4px;
    border: 1px solid #e6e6f0;
    height: 48px;
    width: 100%;
    background: #f8f8fc;
    padding: 0 8px;

    &:focus {
      outline: none;
      border: 1px solid ${(props) => props.theme.colors.active};
    }
  }

  button {
    border: none;
    border-radius: 0 4px 4px 0;
    width: 160px;
    height: 46px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    margin-left: -161px;
    outline: none;
    transition: 0.3s;
    cursor: pointer;

    img {
      margin-right: 8px;
    }
  }
`;
