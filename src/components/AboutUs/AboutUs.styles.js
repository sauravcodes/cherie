import styled from "styled-components";
import cherie from "../../../src/assets/cherie8.jpg";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: goldenrod;
  position: absolute;
  top: 10%;
  left: 10%;
  font-family: "Indie Flower", cursive;
  width: 500px;

  .heading {
    font-size: 3rem;
  }

  .subheading {
    font-size: 2.7rem;
  }

  .para {
    font-size: 2rem;
  }

  @media screen and (max-width: 960px) {
    width: 240px;
    top: 7%;
    .heading {
      font-size: 2.5rem;
      margin-bottom: 6px;
    }

    .subheading {
      font-size: 2.2rem;
      margin-bottom: 16px;
    }

    .para {
      font-size: 1rem;
    }
  }
`;
export const Containter = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${cherie});
  height: 99vh;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
export const ParentDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid goldenrod;
  background-color: black;

  .header {
    display: flex;
    font-weight: 600;
    letter-spacing: 0.8rem;
    font-size: 8rem;
    color: chocolate;
    font-family: "Indie Flower", cursive;
    margin-top: 120px;
    margin-bottom: 50px;

    @media screen and (max-width: 960px) {
      font-size: 3rem;
      letter-spacing: 0.4rem;
      margin-top: 50px;
      margin-bottom: 0;
    }
  }
`;
