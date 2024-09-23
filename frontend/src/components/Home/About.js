import React from 'react'
import { useSelector } from "react-redux";
import SectionTitle from '../SectionTitle'
function About() {
    const{loading,portfolioData}=useSelector((state)=>state.root)
    const {about}=portfolioData;
    const {lottieURL,description1,description2,skills}=about;
  return (
    <div>
        <SectionTitle title="About"/>
        <div className='flex  w-full items-center sm: flex-col '>
            <div className='h-[70vh]  w-1/2  '><lottie-player src={lottieURL} background="transparent" speed="1"  loop  autoplay direction="1" mode="normal"></lottie-player></div>
            <div className='flex flex-col gap-5 w-1/2 '>
                <p className='text-white italic '>{description1 || ""}</p>
                <p className='text-white font-bold italic'>{description2 || ""}</p>
            </div>
           
            
        </div>
        <div className='py-5 pl-5'>
                <h1 className=' italic text-xl font-semibold text-black'>Here are  a few tech Stack</h1>
         
            <div className='flex flex-wrap gap-10 mt-5'>
            {
                skills.map((skill,index)=>(
                    <div className=' border-2 k py-3 px-10'>
                        <h1 className='text-white font-bold'>{skill}</h1>
                        </div>
                ))
            }
            </div>
            </div>
    </div>
  )
}

export default About