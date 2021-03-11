import React from "react";
import HomePage from "./components/HomePage/HomePage";
import Section from "./components/Section/Section";
import { ImagesData } from "./components/ImagesData/ImagesData";
import AboutUs from "./components/AboutUs/AboutUs";

const App = () => (
  <>
    <HomePage slides={ImagesData} />
    <Section />
    <AboutUs />
  </>
);

export default App;
