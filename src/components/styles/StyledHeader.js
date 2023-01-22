import styled from "styled-components";
const StyledHeader = styled.header`
  .logo {
    width: 4rem;
    img {
      width: 100%;
    }
  }
  .icon-menu {
    color: ${(props) =>
      props.darkMode ? props.colors.offWhite : props.colors.veryDarkBlue};
    display: none;
    cursor: pointer;
    font-size: 1.5rem;
  }
  @media (max-width: 669px) {
    .icon-menu {
      display: block;
    }
  }
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 1.5rem;
    padding-bottom: 1rem;
  }
`;
export default StyledHeader;
