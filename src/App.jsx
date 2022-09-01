import React, { useState, useEffect } from 'react'

// Components
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Navi from './components/navi/Navi'
import About from './components/about/About'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'


const App = () => {

  // To show the other navigation bar
  const state = {
    isActive:false
  };


  // Calculte the scroll offset
  const [posY, setPosY] = useState(0);

  useEffect(() => {
    const handleScroll = (e) => setPosY(window.pageYOffset);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });




  return (
    <>

        <Header />
        <Nav />
        {/* <div>{posY}</div> */}
        {/* { posY > 720  ? <Nav/> : <Navi/>} */}
        <About />

        <Portfolio />
        {/*
        <Contact />
        <Footer /> */}
    </>
  )
}

export default App