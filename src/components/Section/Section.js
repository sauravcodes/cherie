import React from "react";
import { ProductData } from "./ProductData";
import {
  ParentDiv,
  Productss,
  ProductDiv,
  ProductsContainer,
} from "./Section.styles";

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
