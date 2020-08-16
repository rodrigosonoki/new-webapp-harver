import styled from "styled-components";

export const Container = styled.div`
  max-width: 1248px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 8px 0;
`;

export const TextArea = styled.textarea`
  max-width: ${(props) => props.maxWidth || "1200px"};
  width: ${(props) => props.width || "100%"};
  height: 48px;
  border: 1px solid ${(props) => props.theme.colors.lineInWhite};
  padding: 8px;
  border-radius: 4px;
  resize: vertical;
  min-height: 160px;
  max-height: 400px;

  &:focus {
    outline: none;
    border: 1px solid ${(props) => props.theme.colors.active};
  }
`;
