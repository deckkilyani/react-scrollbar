import React, { useState, useRef, useEffect } from "react";
import { CaretLeft, CaretRight } from "phosphor-react";

const  ScrollableContainer =({classAttribute, children})=> {
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
      <div className={`flex items-start justify-center ${classAttribute} mx-auto overflow-x-hidden scrollable-tab-contrainer relative `}>
        <div
          className="text-gray-700 text-sm font-semibold  flex items-center gap-2  mx-16 my-16 list-none overflow-x-scroll sc-inside p-2"
          ref={tabsContainerRef}
          style={{ scrollBehavior: "smooth" }}
        >
         {children}
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

export default ScrollableContainer;




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
    