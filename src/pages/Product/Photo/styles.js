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

  img {
    height: 240px;
  }
`;

export const ImageList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  grid-gap: 16px;
  margin-top: 16px;
`;
