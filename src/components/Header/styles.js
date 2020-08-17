import styled, { css } from "styled-components";
import { colors } from "../../styles/colors";

export const Container = styled.div`
  width: 100%;
  position: sticky;
  top: 0;

  @media only screen and (max-width: 768px) {
    /* <--FULL SCREEN--> */
    background-color: ${({ isVisible }) => (isVisible ? "" : "#fff")};
    justify-content: ${({ isVisible }) => (isVisible ? "" : "center")};
    width: ${({ isVisible }) => (isVisible ? "" : "100vw")};
    height: ${({ isVisible }) => (isVisible ? "" : "100vh")};
    top: ${({ isVisible }) => (isVisible ? "" : "0")};
    left: ${({ isVisible }) => (isVisible ? "" : "0")};
    z-index: ${({ isVisible }) => (isVisible ? "" : "9999")};
  }
`;

export const MenuContainer = styled.div`
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

  @media only screen and (max-width: 768px) {
    /* <--FULL SCREEN--> */
    display: ${({ isVisible }) => (isVisible ? "" : "none")};
  }
`;

export const MenuContent = styled.div`
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

export const ProfileMenu = styled.nav`
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
  background-color: ${colors.headerBackground};
  color: ${colors.textInvert};
  border-radius: 8px;
  padding: 12px 0 12px 0;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.1s linear;
  z-index: 2;

  a:visited {
    color: #fff;
  }

  ${({ isActive }) =>
    isActive &&
    css`
      visibility: visible;
      opacity: 1;
    `}

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
  cursor: pointer;
`;

export const NavContainer = styled.div`
  width: 100%;
  position: sticky;
  top: 0;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;

  @media only screen and (max-width: 768px) {
    /* <--FULL SCREEN--> */
    height: ${({ isVisible }) => (isVisible ? "64px" : "100vh")};
  }
`;

export const NavContent = styled.nav`
  max-width: 1248px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 24px 0 24px;

  ul {
    display: flex;
    list-style: none;
    align-items: center;
  }

  ul a {
    &:visited {
      color: ${colors.text};
    }
  }

  ul li {
    color: rgba(0, 0, 0, 0.2);
    transition: 0.3s;
  }

  ul li:hover {
    color: ${colors.text};
    transition: 0.3s;
  }

  ul li,
  span {
    margin-right: 16px;
    line-height: 64px;
  }

  span {
    text-transform: uppercase;
    font: 700 18px Archivo;
  }

  @media only screen and (max-width: 768px) {
    /* <--FULL SCREEN--> */

    ul {
      flex-direction: column;
      display: ${({ isVisible }) => (isVisible ? "none" : "flex")};
      z-index: ${({ isVisible }) => (isVisible ? "" : "9999")};
      text-align: ${({ isVisible }) => (isVisible ? "" : "center")};
      margin: ${({ isVisible }) => (isVisible ? "" : "auto")};
      font-size: ${({ isVisible }) => (isVisible ? "" : "32px")};
    }

    span {
      display: ${({ isVisible }) => (isVisible ? "" : "none")};
    }
  }
`;

export const NavItem = styled.li`
  width: 112px;
  display: flex;
  justify-content: center;
`;

export const Tab = styled.div`
  @media (max-width: 768px) {
    width: 40px;
    height: 30px;
    margin: 0 24px 0 0;
    position: ${({ isVisible }) => (isVisible ? "" : "absolute")};
    top: ${({ isVisible }) => (isVisible ? "" : "80px")};
    right: ${({ isVisible }) => (isVisible ? "" : "-4px")};

    div:nth-child(1) {
      background-color: ${({ isVisible }) =>
        isVisible ? "#303030" : "#303030"};
      height: 5px;
      width: 100%;
      margin: 0 auto 6px;
      transition-duration: 0.3s;
      border-radius: 8px;
      transform: ${({ isVisible }) =>
        isVisible ? "" : "rotate(45deg) translate(7px, 7px)"};
    }

    div:nth-child(2) {
      background-color: #303030;
      height: 5px;
      border-radius: 8px;
      width: 100%;
      margin: 0 auto 6px;
      transition-duration: 0.3s;
      opacity: ${({ isVisible }) => (isVisible ? "" : "0")};
    }

    div:nth-child(3) {
      background-color: ${({ isVisible }) =>
        isVisible ? "#303030" : "#303030"};
      height: 5px;
      border-radius: 8px;
      width: 100%;
      margin: 0 auto 6px;
      transition-duration: 0.3s;
      transform: ${({ isVisible }) =>
        isVisible ? "" : "rotate(-45deg) translate(8px, -9px)"};
    }
  }
`;
