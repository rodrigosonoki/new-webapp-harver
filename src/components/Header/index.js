import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDetectOutsideClick } from "../../utils/useDetectOutsideClick";

//STYLES
import {
  Container,
  MenuContainer,
  MenuContent,
  NavContainer,
  NavContent,
  NavItem,
  Logo,
  Profile,
  Menu,
  MenuItem,
  ProfileMenu,
  Tab,
} from "./styles";

//ASSETS
import { bell, circle, feedback, logout, user } from "../../assets/icons";

//CONTEXTS
import { useNav } from "../../store/useNav";
import { useUser } from "../../store/useUser";

//PROFILE MENU
const profileMenu = [
  { text: "Meu perfil", img: user, imgAlt: "profile", url: "/account" },
  { text: "Faça sua sugestão", img: feedback, altImg: "feedback" },
  { text: "Sair", img: logout, altImg: "logout" },
];

//NAV MENU
const navMenu = [
  { name: "Overview", index: 1, url: "/" },
  { name: "Produtos", index: 2, url: "/products" },
  { name: "Vendas", index: 3, url: "/orders" },
  { name: "Minha Loja", index: 4, url: "/store" },
];

const storeName = "Loja do Rodrigo";

const props = { color: "#303030", borderBottom: "2px solid #303030" };

export default function Header() {
  const { nav, setNav } = useNav();
  const { user } = useUser();
  const [isVisible, setIsVisible] = useState(true);

  function toggleMenu() {
    setIsVisible(!isVisible);
    if (isVisible && window.innerWidth <= 680)
      document.body.style.overflow = "hidden";
    else document.body.style.overflow = "initial";
  }

  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);

  const toogleMenu = () => setIsActive(!isActive);

  function handleSetNav() {
    navMenu.map((i) => {
      if (window.location.href.indexOf(i.url) > -1) setNav(i.index);
      return i;
    });
  }

  useEffect(() => {
    handleSetNav();
  });

  return (
    <>
      <Container isVisible={isVisible}>
        <MenuContainer isVisible={isVisible}>
          <MenuContent>
            <Logo>HARVER</Logo>
            <ProfileMenu>
              <img src={bell} alt="notifications" />
              <Profile onClick={toogleMenu}>
                <span>{user.email}</span>
                <img src={circle} alt="profile" />
              </Profile>
            </ProfileMenu>
            <Menu ref={dropdownRef} isActive={isActive}>
              <div></div>
              <ul>
                {profileMenu.map((i, index) => {
                  return (
                    <Link to={i.url}>
                      <MenuItem key={index}>
                        <span>{i.text}</span>
                        <img src={i.img} alt={i.imgAlt} />
                      </MenuItem>
                    </Link>
                  );
                })}
              </ul>
            </Menu>
          </MenuContent>
        </MenuContainer>
        <NavContainer isVisible={isVisible}>
          <NavContent isVisible={isVisible}>
            <span>{storeName}</span>
            <ul>
              {navMenu.map((i) => {
                return (
                  <Link key={i.index} to={i.url}>
                    {(() => {
                      if (i.index === nav) {
                        return <NavItem style={props}>{i.name}</NavItem>;
                      } else {
                        return <NavItem>{i.name}</NavItem>;
                      }
                    })()}
                  </Link>
                );
              })}
            </ul>
          </NavContent>
          <Tab isVisible={isVisible} onClick={toggleMenu}>
            <div />
            <div />
            <div />
          </Tab>
        </NavContainer>
      </Container>
    </>
  );
}
