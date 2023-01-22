import styled from "styled-components";
const StyledNav = styled.nav`
  .icon-close {
    display: none;
  }
  ul {
    display: flex;
    list-style: none;
  }
  .sun,
  ul li > svg {
    cursor: pointer;
    transition: all 0.5s ease-in;
  }
  .sun:hover,
  ul li:hover > svg {
    transform: scale(0.9, 0.9);
  }
  .sun {
    color: ${(props) => props.colors.offWhite};
    &:hover {
      color: yellow;
    }
  }
  ul li > svg,
  ul li > a {
    text-decoration: none;
    color: ${(props) =>
      props.darkMode ? props.colors.offWhite : props.colors.darkGrayishBlue};
  }
  ul li > svg {
    &:hover {
      color: ${(props) => props.colors.veryDarkBlue};
    }
  }
  ul li a:hover {
    transition: all 0.5s ease;
    color: var(--soft-red);
  }
  @media (min-width: 670px) {
    ul li:not(li:last-child) {
      margin-right: 2rem;
    }
  }
  @media (max-width: 669px) {
    background-color: ${(props) =>
      props.darkMode ? props.colors.veryDarkBlue : props.colors.offWhite};
    position: fixed;
    top: 0;
    right: -16rem;
    height: 100vh;
    width: 16rem;
    transition: all 0.4s ease;
    .icon-close {
      display: block;
      font-size: 1.5rem;
      margin: 2rem 1rem 0 auto;
      color: ${(props) =>
        props.darkMode ? props.colors.offWhite : props.colors.veryDarkBlue};
      cursor: pointer;
    }
    &.show {
      right: 0rem;
    }
    ul {
      flex-direction: column;
      padding: 5rem 0 0 3rem;
    }
    ul li:not(li:last-child) {
      margin-bottom: 2rem;
    }
    ul li a {
      color: ${(props) =>
        props.darkMode ? props.colors.offWhite : props.colors.veryDarkBlue};
    }
    ul li a:hover {
      transition: all 0.5s ease;
      color: var(--soft-red);
    }
  }
`;
export default StyledNav;
