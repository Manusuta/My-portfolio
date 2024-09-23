import React ,{ useState }from 'react'
import SectionTitle from '../SectionTitle'
import { useSelector } from "react-redux";

function Experiences() {
    const [selectedItemIndex, setselectedItemIndex ]=useState(0);
    const{portfolioData}=useSelector((state)=>state.root)
    const {experiences}=portfolioData;
  return (
    <div>
        
    <SectionTitle title="Experiences"/>
    <div className='flex py-10 gap-10 pl-5'>
        <div className='flex flex-col gap-10 border-l-2 border-white w-1/3  '>
            {experiences.map((experiences,index)=>(
                <div onClick={()=>{
                    setselectedItemIndex(index)
                }}
                className='cursor-pointer'>
                    <h1 className={`text-xl px-5 ${selectedItemIndex === index ? "text-black border-black border-l-4 ml-[3px] bg-white py-3": "text-white"}`}>{experiences.period}</h1>
</div>
            ))}
          
        </div>
        <div  className='flex flex-col gap-5'>
            <h1 className='text-white text-4xl italic font-bold'>{experiences[selectedItemIndex].title}</h1>
            <h1 className='from-black via-white to-black bg-gradient-to-r bg-clip-text text-transparent  text-3xl'>{experiences[selectedItemIndex].company}</h1>
            <p className='text-white'>lorem40 lorem40 fgghjkjkl ghhjkjkk

lorem40 fgghjkjkl ghhjkjkk

here are a few tech stack</p>
            </div>
    </div>
    </div>
  )
}

export default Experiences