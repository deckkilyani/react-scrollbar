import React, { useState, useRef, useEffect } from "react";
import reactImg1 from "./assets/artculture.png";
import reactImg2 from "./assets/guidedtours.png";
import reactImg3 from "./assets/localsightseeing.png";
import reactImg4 from "./assets/naturalsighteeing.png";

import "./App.css";
import ScrollableContainer from "./components/ScrollableContainer";

const App = () => {

  const liClass =
      "rounded select-none w-[180px] h-[220px] whitespace-nowrap inline-block bg-white cursor-pointer border-2 hover:border-teal-300 transition duration-500 ease-in-out hover:scale-105 transition hover:translate-y-[-6px] my-2 duration-500 ease-in-out";
  
  return (
    <ScrollableContainer classAttribute='max-w-[1200px]'>
      <img src={reactImg1} alt="" className={liClass} />
      <img src={reactImg2} alt="" className={liClass} />
      <img src={reactImg3} alt="" className={liClass} />
      <img src={reactImg4} alt="" className={liClass} />
      <img src={reactImg2} alt="" className={liClass} />
      <img src={reactImg3} alt="" className={liClass} />
      <img src={reactImg4} alt="" className={liClass} />
      <img src={reactImg1} alt="" className={liClass} />
      <img src={reactImg2} alt="" className={liClass} />
    </ScrollableContainer>
  );
};

export default App;
