import styled from "styled-components";

const CardCss = styled.div`
  border: 1px solid grey;
  .story-card {
    display: block;
    position: relative;

    .headline {
      display: flex;
      width: 90%;
      padding: 10px;
      padding-top: 20px;
      a {
        text-decoration: none;
        color: inherit;
        :hover {
          text-decoration: none;
          color: inherit;
        }
      }
    }
    .author {
      padding: 10px;
    }
  }
`;

export default CardCss;
