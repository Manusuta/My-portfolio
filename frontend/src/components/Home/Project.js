import React ,{ useState }from 'react'
import SectionTitle from '../SectionTitle'
//import {projects} from "../../resources/projects"
import { useSelector } from 'react-redux';
function Project() {
    const [selectedItemIndex, setselectedItemIndex ]=useState(0);
    const{portfolioData}=useSelector((state)=>state.root)
    const {projects}=portfolioData;
  return (
    <div> <SectionTitle title="projects"/>
    <div className='flex py-10 gap-10 pl-5'>
        <div className='flex flex-col gap-10 border-l-2 border-white w-1/3 '>
            {projects.map((projects,index)=>(
                <div onClick={()=>{
                    setselectedItemIndex(index)
                }}
                className='cursor-pointer'>
                    <h1 className={`text-xl px-5 ${selectedItemIndex === index ? "text-black border-black border-l-4 ml-[3px] bg-white py-3": "text-white"}`}>{projects.title}</h1>
</div>
            ))}
          
        </div>
        <div className='flex items-center justify-center gap-10'>
            <img src={projects[selectedItemIndex].image} alt='' className='h-60 w-72'/>
        <div  className='flex flex-col gap-5'>
            <h1 className='text-white text-4xl font-bold italic'>{projects[selectedItemIndex].title}</h1>
            <p className='from-black via-white to-black bg-gradient-to-r bg-clip-text text-transparent  text-3xl'>{projects[selectedItemIndex].description}</p>
            <p className='text-white'>{projects[selectedItemIndex].link}</p>
</div>
            </div>
    </div>
    </div>
  )
}

export default Project