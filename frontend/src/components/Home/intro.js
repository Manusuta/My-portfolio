import React from 'react'
import { useSelector } from "react-redux";
function Intro() {
  const{loading,portfolioData}=useSelector((state)=>state.root)
  const {intro}=portfolioData;
  const {firstName,lastName,welcomeText,description,caption}=intro;
  
  return (
    <div className='h-[80vh] bg-[conic-gradient(var(--tw-gradient-stops))] from-sky-500/55 via-gray-600 to-black flex flex-col items-start justify-center gap-8  pl-5'>
        <h1 className='text-gray-100 font-bold italic text-2xl '>{welcomeText || " "}</h1>
        <h1 className='text-7xl sm:text-3xl italic -font-bold from-white via-gray-500 to-sky-500/55  bg-gradient-to-r bg-clip-text text-transparent font-semibold'>{firstName || ""} {lastName || ""}</h1>
        <h1 className='text-6xl sm:text-3xl font-bold from-white via-gray-600 to-white  bg-gradient-to-r bg-clip-text text-transparent '>{caption || ""}</h1>
        <p className='text-white  text-lg w-2/3'>{description || ""}
       
        </p>
        <button className='border-4 border-sky-500/55 text-sky-500/55 font-bold px-10 py-5'>GET STARTED</button>
    </div>
  )
}

export default Intro