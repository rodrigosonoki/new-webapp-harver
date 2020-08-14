import React, { useRef } from "react";
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
} from "./styles";

//ASSETS
import { bell, circle, feedback, logout, user } from "../../assets/icons";

//PROFILE MENU
const profileMenu = [
  { text: "Meu perfil", img: user, imgAlt: "profile" },
  { text: "Faça sua sugestão", img: feedback, altImg: "feedback" },
  { text: "Sair", img: logout, altImg: "logout" },
];

//NAV MENU
const navMenu = [
  { name: "Overview", index: 1, url: "/" },
  { name: "Produtos", index: 2, url: "/products" },
  { name: "Vendas", index: 3, url: "/orders" },
  { name: "Usuários", index: 4, url: "/users" },
];

const storeName = "Loja do Rodrigo";

export default function Header() {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);

  const toogleMenu = () => setIsActive(!isActive);

  return (
    <>
      <Container>
        <MenuContainer>
          <MenuContent>
            <Logo>HARVER</Logo>
            <ProfileMenu>
              <img src={bell} alt="notifications" />
              <Profile onClick={toogleMenu}>
                <span>rodrigo@harver.com.br</span>
                <img src={circle} alt="profile" />
              </Profile>
            </ProfileMenu>
            <Menu ref={dropdownRef} isActive={isActive}>
              <div></div>
              <ul>
                {profileMenu.map((i, index) => {
                  return (
                    <MenuItem key={index}>
                      <span>{i.text}</span>
                      <img src={i.img} alt={i.imgAlt} />
                    </MenuItem>
                  );
                })}
              </ul>
            </Menu>
          </MenuContent>
        </MenuContainer>
        <NavContainer>
          <NavContent>
            <ul>
              <span>{storeName}</span>
              {navMenu.map((i) => {
                return (
                  <Link key={i.index} to={i.url}>
                    <NavItem>{i.name}</NavItem>
                  </Link>
                );
              })}
            </ul>
          </NavContent>
        </NavContainer>
      </Container>
    </>
  );
}
