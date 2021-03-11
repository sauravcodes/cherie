import styled from "styled-components";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { BiFoodTag } from "react-icons/bi";

export const MainText = styled.div`
  display: flex;
  position: absolute;
  color: palegoldenrod;
  font-size: 4rem;
  letter-spacing: 0.8rem;
  line-height: 6rem;
  top: 50%;
  left: 51%;
  transform: translate(-50%, -50%);
  @media screen and (max-width: 960px) {
    font-size: 2rem;
    letter-spacing: 0.4rem;
    line-height: 3rem;
    left: ${(props) => (!props.click ? "51%" : "1000%")};
    transition: all 0.7s ease;
  }
`;
export const LeftArrow = styled(FiArrowLeftCircle)`
  position: absolute;
  top: 47%;
  left: 2%;
  color: chocolate;
  font-size: 48px;
  cursor: pointer;
  opacity: 0.5;
  transition: all 0.3s ease-in;
  @media screen and (max-width: 960px) {
    font-size: 36px;
  }
  &:hover {
    opacity: 1;
  }
`;
export const RightArrow = styled(FiArrowRightCircle)`
  position: absolute;
  top: 47%;
  right: 2%;
  color: chocolate;
  font-size: 48px;
  cursor: pointer;
  opacity: 0.5;
  transition: all 0.3s ease-in;

  @media screen and (max-width: 960px) {
    font-size: 36px;
  }
  &:hover {
    opacity: 1;
  }
`;
export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 100%;
  padding: 26px;
  margin-left: 36px;
  font-family: "Indie Flower", cursive;
  background: goldenrod;
  color: palegoldenrod;
  font-size: 26px;
  outline: none;
  cursor: pointer;
  border: none;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;

  &:hover {
    transition: all 0.3s ease-out;
    background-color: chocolate;
    color: black;
  }

  @media screen and (max-width: 960px) {
    width: 80%;
    margin-left: 0;
    margin-top: 36px;

    &:hover {
      transition: all 0.3s ease-out;
      background-color: goldenrod;
      color: black;
    }
  }
`;
export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: flex;
    color: white;
    cursor: pointer;
    font-size: 1.6rem;
    color: goldenrod;
    margin-top: -6px;
    margin-right: 20px;
  }
`;
export const Navmenu = styled.div`
  display: flex;
  align-items: center;
  justify-self: center;
  font-size: 1.8rem;
  color: white;
  margin-right: 50px;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    height: 91vh;
    top: 80px;
    left: ${(props) => (props.click ? 0 : "-100%")};
    width: 80%;
    transition: all 0.5s ease-in;
    background-color: chocolate;
    color: palegoldenrod;
  }
`;

export const NavLink = styled.div`
  display: flex;
  /* width: 100%; */
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 1.6rem;
  margin: 10px;
  &:hover {
    color: goldenrod;
    transition: all 0.2s ease;
    border-top: 8px solid chocolate;
  }

  @media screen and (max-width: 960px) {
    padding: 0;
    margin: 40px;
    &:hover {
      color: goldenrod;
      transition: all 0.2s ease;
      border-top: 0;
    }
  }
`;

export const Logo = styled(BiFoodTag)`
  display: flex;
  margin-right: 1.2rem;
  margin-top: -0.3rem;
`;
export const LogoTextContainer = styled.div`
  display: flex;
  color: goldenrod;
  font-size: 2rem;
  justify-content: center;
  align-items: center;
  margin-left: 50px;

  @media screen and (max-width: 960px) {
    margin-left: 20px;
  }
`;
export const NavbarDiv = styled.div`
  display: flex;
  font-family: "Indie Flower", cursive;
  position: absolute;
  justify-content: space-between;
  align-items: center;
  top: 0;
  height: 80px;
  width: 100%;
  border-bottom: 1px solid goldenrod;
`;
export const ParentDiv = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;

  & img {
    display: flex;
    height: 100vh;
    width: 100vw;
    border-radius: 1px;
    image-rendering: pixelated;
  }
  .slide {
    opacity: 0.5;
    transition-duration: all 1s ease;
  }

  .slide.active {
    opacity: 1;
    transition-duration: 1s;
    transform: scale(1);
  }

  @media screen and (max-width: 960px) {
    & img {
      display: flex;
      object-fit: cover;
      border-radius: 0px;
      image-rendering: pixelated;
    }
  }
`;
