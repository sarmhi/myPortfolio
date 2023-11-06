import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './pages/Home/Home';
import NoMatch from './pages/NoMatch/NoMatch';
import Projects from "./pages/Projects/Projects";
import About from './pages/About/About';

function App() {
  // const scrollElements = document.querySelectorAll(".scroll-el");
  // scrollElements.forEach(el => {
  //   el.getElementsByClassName.display = 0;
  // });

  const elementInView = (el, scrollOffset = 0) => {
    const elementTop = el.getBoundingClientRect().top;

    // returns true if the distance of the el from the top
    // is less than the viewport height
    return (
      elementTop <= (window.innerHeight || document.documentElement.clientHeight - scrollOffset)
    )
  };

  const displayScroLLElement = (el) => {
    el.classList.add("scrolled")
  };

  // resets element to default state
  const hideScrollElement = (el) => {
    el.classList.remove("scrolled");
  };

  const handleScrollAnimation = (scrollElements) => {
    scrollElements.forEach((el) => {
      if(elementInView(el, 100)) {
        displayScroLLElement(el);
      } else {
        hideScrollElement(el);
      }
    })
  };

  window.addEventListener("scroll", () => {
    const scrollElements = document.querySelectorAll(".scroll-el");
    scrollElements && handleScrollAnimation(scrollElements);
  })
 
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='projects' element={<Projects />} />
        <Route exact path='about' element={<About />} />
        <Route exact path='*' element={<NoMatch />} />
      </Routes>
    </Router>
  );
}

export default App;
