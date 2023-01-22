import StyledNav from "../styles/StyledNav";
import { AiOutlineClose } from "react-icons/ai";
import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { BsFillSunFill } from 'react-icons/bs'
import { FaRegMoon } from 'react-icons/fa'
const Nav = () => {
  const { darkMode, colors, switchDarkMode } = useContext(ThemeContext);
  function hideSideBar(e) {
    e.target.parentElement.classList.remove("show");
  }
  return (
    <StyledNav darkMode={darkMode} colors={colors}>
      <AiOutlineClose className="icon-close" onClick={(e) => hideSideBar(e)} />
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">New</a>
        </li>
        <li>
          <a href="#">Popular</a>
        </li>
        <li>
          <a href="#">Trending</a>
        </li>
        <li>
          <a href="#">Categories</a>
        </li>
        <li onClick={switchDarkMode}>
          {
            darkMode ? <BsFillSunFill className="sun" /> : <FaRegMoon />
          }
        </li>
      </ul>
    </StyledNav>
  );
};

export default Nav;
