import React, { useState, useRef, useEffect } from "react";
import reactImg1 from "./assets/artculture.png";
import reactImg2 from "./assets/guidedtours.png";
import reactImg3 from "./assets/localsightseeing.png";
import reactImg4 from "./assets/naturalsighteeing.png";
import { CaretLeft, CaretRight} from "phosphor-react";
import './App.css'

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const tabsContainerRef = useRef(null);

  const handleScrollRight = () => {
    const container = tabsContainerRef.current;
    const containerWidth = container.offsetWidth;
    const tabsWidth = container.scrollWidth;
    const maxScrollPosition = tabsWidth - containerWidth;
    const scrollAmount = Math.min(250, maxScrollPosition - scrollPosition);
    const newScrollPosition = scrollPosition + scrollAmount;
    setScrollPosition(newScrollPosition);
  };

  const handleScrollLeft = () => {
    const container = tabsContainerRef.current;
    //const containerWidth = container.offsetWidth;
    const scrollAmount = Math.min(250, scrollPosition);
    const newScrollPosition = scrollPosition - scrollAmount;
    setScrollPosition(newScrollPosition);
  };

  useEffect(() => {
    const container = tabsContainerRef.current;
    container.scrollLeft = scrollPosition;
  }, [scrollPosition]);

  useEffect(() => {
    const container = tabsContainerRef.current;
    let timeoutId;
    
    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setScrollPosition(container.scrollLeft);
      }, 50);
    };
  
    container.addEventListener("scroll", handleScroll);
    
    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

/*   useEffect(() => {
    const container = tabsContainerRef.current;
    const handleScroll = (event) => {
      event.preventDefault(); // prevent default scrolling behavior
      const scrollAmount = event.deltaY; // get scroll amount from event
      const newScrollPosition = scrollPosition + scrollAmount; // calculate new scroll position
      setScrollPosition(newScrollPosition); // update state
    };
    container.addEventListener("wheel", handleScroll); // add event listener
    return () => {
      container.removeEventListener("wheel", handleScroll); // remove event listener
    };
  }, [scrollPosition]); */
  
  

 

  
  
  const liClass =
    "rounded select-none w-[180px] h-[220px] whitespace-nowrap inline-block bg-white cursor-pointer border-2 hover:border-teal-300 transition duration-500 ease-in-out hover:scale-105 transition hover:translate-y-[-6px] my-2 duration-500 ease-in-out";

  const leftArrowClass = `absolute left-12 top-1/2 transform -translate-y-1/2 text-gray-700 text-2xl cursor-pointer transition duration-500 ease-in-out ${
    scrollPosition === 0 ? "hidden" : ""
  }`;
  const rightArrowClass = `absolute right-12  top-1/2 transform -translate-y-1/2 text-gray-700 text-2xl cursor-pointer  ${
    tabsContainerRef.current &&
    scrollPosition + tabsContainerRef.current.offsetWidth >=
      (tabsContainerRef.current.scrollWidth -0.7)
      ? "hidden"
      : ""
  }`;

  return (
    <div className="flex items-start justify-center mx-auto max-w-[1200px] overflow-x-hidden scrollable-tab-contrainer relative">
      <div
        className="text-gray-700 text-sm font-semibold  flex items-center gap-2  mx-16 my-16 list-none overflow-x-scroll sc-inside p-2"
        ref={tabsContainerRef}
        style={{ scrollBehavior: "smooth" }}
      >
        <img src={reactImg1} alt="" className={liClass} />
        <img src={reactImg2} alt="" className={liClass} />
        <img src={reactImg3} alt="" className={liClass} />
        <img src={reactImg4} alt="" className={liClass} />
        <img src={reactImg2} alt="" className={liClass} />
        <img src={reactImg3} alt="" className={liClass} />
        <img src={reactImg4} alt="" className={liClass} />
        <img src={reactImg1} alt="" className={liClass} />
        <img src={reactImg2} alt="" className={liClass} />
      </div>
      <div className={leftArrowClass} onClick={handleScrollLeft}>
        <CaretLeft className="p-1 rounded-full text-white bg-gradient-to-r from-black to-transparent" size={32} />
      </div>
      <div
        className={rightArrowClass}
        onClick={handleScrollRight}
      >
        <CaretRight className="p-1 rounded-full text-white bg-gradient-to-l from-black to-transparent" size={32} />
      </div>
    </div>
  );
}

export default App
