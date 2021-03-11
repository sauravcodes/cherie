import React, { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { ImagesData } from "../ImagesData/ImagesData.js";
import {
  ParentDiv,
  NavbarDiv,
  LogoTextContainer,
  Logo,
  MobileIcon,
  Navmenu,
  NavLink,
  Button,
  LeftArrow,
  RightArrow,
  MainText,
} from "./HomePage.styles";

const HomePage = ({ slides }) => {
  const [click, setClick] = useState(false);
  const [current, setCurrent] = useState(0);

  const length = slides.length;
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const handleClick = () => setClick(!click);

  return (
    <ParentDiv>
      {ImagesData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt="dsf" key={index} />
            )}
          </div>
        );
      })}
      <NavbarDiv>
        <LogoTextContainer>
          <Logo />
          Cherie
        </LogoTextContainer>
        <MobileIcon onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </MobileIcon>
        <Navmenu click={click}>
          <NavLink>Home</NavLink>
          <NavLink>Products</NavLink>
          <NavLink>About</NavLink>
          <Button>Contact</Button>
        </Navmenu>
      </NavbarDiv>
      <LeftArrow onClick={prevSlide} />
      <RightArrow onClick={nextSlide} />
      <MainText click={click}>
        HomeMade <br />
        Chocolates
      </MainText>
    </ParentDiv>
  );
};

export default HomePage;
