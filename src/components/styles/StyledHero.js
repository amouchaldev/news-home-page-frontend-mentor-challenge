import styled from "styled-components";
const StyledHero = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 992px) {
    flex-direction: column;
    margin-top: 1.5rem;
  }
  /* left section */
  & > div:first-child {
    width: 70%;
    @media (max-width: 992px) {
      width: 100%;
      margin-bottom: 1.3rem;
    }
    img {
      width: 100%;
    }
    & > div {
      margin-top: 2rem;
      display: flex;
      @media (max-width: 768px) {
        flex-direction: column;
      }
      div {
        width: 60%;
        padding-top: 1.2rem;
        @media (max-width: 992px) {
          padding-left: 2rem;
          width: 100%;
          padding: 4rem 0;
        }
        @media (max-width: 768px) {
          padding: 2rem 0;
        }
      }
      h3 {
        width: 40%;
        padding-right: 2rem;
        font-size: 3rem;
        color: ${(props) =>
          props.darkMode ? props.colors.offWhite : props.colors.veryDarkBlue};
        font-weight: 900;
        @media (max-width: 768px) {
          width: 100%;
        }
      }
      div > p {
        word-spacing: 4px;
        line-height: 22px;
        color: var(--dark-grayish-blue);
      }
      div > button {
        background-color: var(--soft-red);
        color: white;
        padding: 11px 28px;
        margin-top: 2rem;
        border: none;
        transition: all 0.5s ease;
        letter-spacing: 4px;
        cursor: pointer;
        &:hover {
          background-color: var(--very-dark-blue);
        }
      }
    }
  }

  /* right section */
  & > div:last-child {
    width: 28%;
    background-color: var(--very-dark-blue);
    padding: 3rem 2rem;
    @media (max-width: 992px) {
      width: 100%;
      padding: 3rem 1rem;
    }
    h6 {
      color: var(--soft-range);
      font-size: 2.2rem;
      font-weight: bold;
      margin-bottom: 2rem;
    }
    ul {
      list-style: none;
    }
    ul li:not(li:last-child) {
      margin-bottom: 2.3rem;
      padding-bottom: 2.3rem;
      border-bottom: 1px solid hsl(233deg 8% 79% / 63%);
    }
    ul li a {
      color: white;
      text-decoration: none;
      display: block;
      margin-bottom: 11px;
      &:hover {
        transition: all 0.5s ease;
        color: var(--soft-range);
      }
    }
    ul li p {
      color: var(--grayish-blue);
    }
  }
`;
export default StyledHero;
