import React, { useRef } from "react";
import { useDetectOutsideClick } from "../../utils/useDetectOutsideClick";

//STYLES
import {
  Container,
  Content,
  Logo,
  Nav,
  Profile,
  Menu,
  MenuItem,
} from "./styles";

//ASSETS
import {
  bell,
  circle,
  feedback,
  logout,
  user,
  store,
} from "../../assets/icons";

export default function Header() {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);

  const toogleMenu = () => setIsActive(!isActive);

  return (
    <Container>
      <Content>
        <Logo onClick={() => console.log(isActive)}>HARVER</Logo>
        <Nav>
          <img src={bell} alt="notifications" />
          <Profile onClick={toogleMenu}>
            <span>rodrigo@harver.com.br</span>
            <img src={circle} alt="profile picture" />
          </Profile>
        </Nav>
        <Menu ref={dropdownRef} isActive={isActive}>
          <div></div>
          <ul>
            <MenuItem>
              <span>Meu perfil</span>
              <img src={user} alt="profile" />
            </MenuItem>
            <MenuItem>
              <span>Minha loja</span>
              <img src={store} alt="store" />
            </MenuItem>
            <MenuItem>
              <span>Faça sua sugestão</span>
              <img src={feedback} alt="feedback" />
            </MenuItem>
            <MenuItem>
              <span>Sair</span>
              <img src={logout} alt="log out " />
            </MenuItem>
          </ul>
        </Menu>
      </Content>
    </Container>
  );
}
