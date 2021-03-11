import React from "react";
import styled from "styled-components";
import { ProductData } from "./ProductData";

const Section = () => {
  return (
    <ParentDiv>
      <div className="header"> chocolates</div>
      <Productss>
        {ProductData.map((item, index) => {
          return (
            <ProductDiv key={index}>
              <ProductsContainer>
                <img src={item.image} alt="{item.title}" />
              </ProductsContainer>
              <div className="title">{item.title}</div>
            </ProductDiv>
          );
        })}
      </Productss>
    </ParentDiv>
  );
};

export default Section;

const ProductDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .title {
    display: flex;
    font-size: 2.5rem;
    color: chocolate;
    margin-bottom: 56px;
  }

  @media screen and (max-width: 960px) {
    .title {
      display: flex;
      font-size: 2rem;
      margin-bottom: 26px;
    }
  }
`;
const Productss = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 15px solid chocolate;
  height: 400px;
  width: 300px;
  padding: 24px;
  margin: 56px 56px 0 56px;
  cursor: pointer;
  @media screen and (max-width: 960px) {
    margin: 56px 12px 0 12px;
  }
  & img {
    -webkit-filter: blur(3px);
    filter: blur(3px);
    -webkit-transition: 0.3s ease-in-out;
    transition: 0.3s ease-in-out;
    height: 445px;
    width: 345px;

    &:hover {
      -webkit-filter: blur(0);
      filter: blur(0);
    }
  }

  @media screen and (max-width: 960px) {
    height: 250px;
    width: 200px;

    & img {
      height: 290px;
      width: 240px;
      -webkit-filter: blur(0);
      filter: blur(0);
    }
  }
`;
const ParentDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border: 2px solid chocolate;
  height: 100%;
  background-color: #0005;

  .header {
    display: flex;
    font-weight: 600;
    letter-spacing: 0.8rem;
    font-size: 8rem;
    color: chocolate;
    font-family: "Indie Flower", cursive;
    margin-top: 56px;

    @media screen and (max-width: 960px) {
      font-size: 3rem;
      letter-spacing: 0.4rem;
    }
  }
`;
