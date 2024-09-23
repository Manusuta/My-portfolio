import React ,{ useState }from 'react'
import SectionTitle from '../SectionTitle'
//import {courses} from "../../resources/courses"
import { useSelector } from 'react-redux';

function Courses() {
    const [selectedItemIndex, setselectedItemIndex ]=useState(0);
   // const [selectedItemIndex, setselectedItemIndex ]=useState(0);
    const{portfolioData}=useSelector((state)=>state.root)
    const {courses}=portfolioData;
  return (
    <div> <SectionTitle title="courses"/>
    <div className='flex py-10 gap-10 pl-5 '>
        <div className='flex flex-col gap-10 border-l-2 border-white w-1/3 '>
            {courses.map((courses,index)=>(
                <div onClick={()=>{
                    setselectedItemIndex(index)
                }}
                className='cursor-pointer'>
                    <h1 className={`text-xl px-5 ${selectedItemIndex === index ? "text-black border-black border-l-4 ml-[3px] bg-white py-3": "text-white"}`}>{courses.title}</h1>
</div>
            ))}
          
        </div>
        <div className='flex items-center justify-center gap-10'>
           
        <div  className='flex flex-col gap-5'>
            <h1 className='text-white text-4xl font-bold italic'>{courses[selectedItemIndex].title}</h1>

            <p className='from-black via-white to-black bg-gradient-to-r bg-clip-text text-transparent  text-3xl'>{courses[selectedItemIndex].description}
            <h1 className='text-white '>{courses[selectedItemIndex].link}</h1>
</p>
</div>
<img src={courses[selectedItemIndex].image} alt='' className='h-60 w-72 '/>
            </div>
    </div>
    </div>
  )
}

export default Courses