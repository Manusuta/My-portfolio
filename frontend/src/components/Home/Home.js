import React from 'react'
import Header from "../Header"
import Intro from "../Home/intro";
import About from './About';
import Experiences from './Experiences';
import Project from './Project';
import Courses from './Courses';
import Contact from './Contact';
import Footer from './Footer';
import Sider from './Sider';
import {  useSelector } from "react-redux";
function Home() {
  const{loading,portfolioData}=useSelector((state)=>state.root)
  return (
    <div >
   {/* <Header/> */}
   {portfolioData &&(
   <div className='bg-[conic-gradient(var(--tw-gradient-stops))] from-black via-gray-600 to-sky-500/55 px-40 sm:px-5'> 
   <Intro/>
   <About/>
   <Experiences/>
   <Project/>
   <Courses/>
   <Contact/>
   <Footer/>
   <Sider/></div>
  
   
  )}
  </div>
)}

export default Home