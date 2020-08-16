import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1200px;
`;

export const Table = styled.table`
  border-collapse: collapse;
  font-size: 14px;
  min-width: 400px;
  width: 100%;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  overflow: hidden;

  thead tr {
    background-color: #303030;
    color: #ffffff;
    text-align: left;
    font-weight: bold;
  }

  th,
  td {
    padding: 16px 16px;
  }

  tr td {
    width: 25%;
  }

  tbody tr {
    border-bottom: 1px solid #ddd;
    cursor: pointer;
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
`;
