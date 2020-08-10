import styled from "styled-components";
import { colors } from "../../styles/colors";

export const Container = styled.div`
  width: 100%;
  position: fixed;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.headerBackground};
  transition: 0.3s;

  /* (max-width: 768px) */
  @media only screen and (max-width: 768px) {
    height: 64px;
    transition: 0.3s;
  }
`;

export const Content = styled.div`
  max-width: 1248px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px 0 24px;
  position: relative;
`;

export const Logo = styled.div`
  font: 700 36px Archivo;
  color: white;
  transition: 0.3s;

  /* (max-width: 768px) */
  @media only screen and (max-width: 768px) {
    font: 700 24px Archivo;
    transition: 0.3s;
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;

  img {
    margin-right: 24px;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: space-between;

  img {
    margin-right: 0;
  }

  span {
    margin: 0 8px 0 0;
    color: ${colors.textInvert};
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 192px;

    /* (max-width: 768px) */
    @media only screen and (max-width: 768px) {
      font-size: 12px;
      width: 112px;
      transition: 0.3s;
    }

    /* (max-width: 512px) */
    @media only screen and (max-width: 512px) {
      display: none;
    }
  }
  img {
    /* (max-width: 768px) */
    @media only screen and (max-width: 768px) {
      height: 32px;
    }
  }
`;

export const Menu = styled.nav`
  position: absolute;
  top: calc(100% + 40px);
  right: 16px;
  width: 256px;
  display: ${({ isActive }) => (isActive ? "" : "none")};
  background-color: ${colors.headerBackground};
  color: ${colors.textInvert};
  border-radius: 8px;
  padding: 12px 0 12px 0;

  /* (max-width: 512px) */
  @media only screen and (max-width: 512px) {
    width: 100%;
    right: 0;
    border-radius: 0px;
    top: calc(100% + 16px);
    box-shadow: rgba(0, 0, 0, 0.44) 0px 5px 20px;
  }

  div {
    position: absolute;
    top: -6px;
    right: 19px;
    height: 16px;
    width: 16px;
    background-color: tomato;
    transform: rotate(45deg);
    border-radius: 2px;
    background-color: ${colors.headerBackground};

    /* (max-width: 512px) */
    @media only screen and (max-width: 512px) {
      display: none;
    }
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
  }
`;

export const MenuItem = styled.a`
  padding: 12px 24px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
