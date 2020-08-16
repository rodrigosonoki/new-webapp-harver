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

export const Table = styled.table`
  border-collapse: collapse;
  font-size: 14px;
  min-width: 400px;
  width: 100%;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  text-align: center;

  thead tr {
    background-color: ${(props) => props.theme.colors.primary};
    color: #ffffff;
    font-weight: bold;
  }

  th,
  td {
    padding: 16px 16px;
  }

  tr td:nth-child(1) {
    width: 10%;
  }

  tr td:not(:first-child) {
    width: 22.5%;
  }

  tr td img {
    height: 64px;
  }

  tbody tr {
    border-bottom: 1px solid #ddd;
    transition: 0.2s;

    &:hover {
      background: #e4e4e4;
      transition: 0.2s;
    }
  }

  tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;

    &:hover {
      background: #e4e4e4;
      transition: 0.2s;
    }
  }

  tbody tr:nth-last-child(-n + 3) {
    background-color: #ffffff;
    border-bottom: none;
    cursor: default;

    &:hover {
      background-color: #ffffff;
    }
  }

  tbody tr:last-child {
    text-transform: uppercase;
    font: 700 16px Archivo;
  }
`;
