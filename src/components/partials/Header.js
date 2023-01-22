import StyledHeader from "../styles/StyledHeader";
import Container from "../styles/Container";
import Nav from "./Nav";
import darkLogo from "../../assets/images/logo.svg";
import whiteLogo from "../../assets/images/logo-white.png";
import { FiMenu } from "react-icons/fi";
import { ThemeContext } from "styled-components";
import { useContext } from "react";
const Header = () => {
  const { darkMode, colors } = useContext(ThemeContext);
  function showSideBar(e) {
    e.target.nextElementSibling.classList.add("show");
  }
  return (
    <StyledHeader darkMode={darkMode} colors={colors}>
      <Container>
        <div className="logo">
          <img src={darkMode ? whiteLogo : darkLogo} alt="logo" />
        </div>
        <FiMenu onClick={(e) => showSideBar(e)} className="icon-menu" />
        <Nav></Nav>
      </Container>
    </StyledHeader>
  );
};

export default Header;
