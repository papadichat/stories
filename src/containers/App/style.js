import styled from "styled-components";

const CardCss = styled.div`
  padding: 5%;

  .stories-container {
    margin-top: 2vh;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 30px;
    @media (max-width: 600px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 601px) and (max-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

export default CardCss;
