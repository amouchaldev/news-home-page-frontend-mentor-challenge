import styled from "styled-components";
const StyledFeature = styled.div`
  @media (min-width: 992px) {
    width: 33%;
  }
  display: flex;
  @media (max-width: 992px) {
    margin-bottom: 2rem;
  }
  .img-container {
    @media (min-width: 500px) {
      width: 23%;
    }
    @media (min-width: 730px) {
      width: 18%;
    }
    @media (min-width: 992px) {
      width: 30%;
    }

    img {
      width: 100%;
      height: 100%;
    }
  }
  div:last-child {
    padding: 0 1rem;
    @media (min-width: 500px) {
      width: 77%;
    }
    @media (min-width: 730px) {
      width: 82%;
    }
    @media (min-width: 992px) {
      width: 70%;
    }
    h6 {
      font-size: 2rem;
      color: var(--grayish-blue);
      letter-spacing: 0.1rem;
      margin-bottom: 0.6rem;
    }
    h4 {
      color: ${(props) =>
        props.darkMode ? props.colors.offWhite : props.colors.veryDarkBlue};
      margin-bottom: 0.5rem;
    }
    p {
      color: var(--dark-grayish-blue);
    }
  }
`;
export default StyledFeature;
