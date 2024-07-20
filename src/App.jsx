import { useState } from 'react'
import Navbar from './Components/Navbar';
import About from './Components/About';
import Hero from './Components/Hero';
import Project from './Components/Projects';
import Techstack from './Components/Techstack';
import Footer from './Components/Footer';
import Contact from './Components/Contact';

function App(props) {
  function page(){
    if(props.page === "About"){
      return <About />;
    }
    if(props.page === "Contact"){
      return <Contact />
    }
    return <>
    <Hero />
    <Techstack />
    <Project/>
    </>
  }
  return (
    <>
      <Navbar />
      {page()}
      <Footer />
    </>
  )
}

export default App
